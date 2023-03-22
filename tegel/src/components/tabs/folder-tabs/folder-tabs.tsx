import {
  Component,
  Host,
  State,
  Element,
  Prop,
  h,
  Watch,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core';

@Component({
  tag: 'sdds-folder-tabs',
  styleUrl: 'folder-tabs.scss',
  shadow: true,
})
export class InlineTabs {
  @Element() host: HTMLElement;

  /** Variant of the tabs, primary= on white, secondary= on grey50 */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  /** Sets the default selected tab. */
  @Prop() defaultSelectedIndex: number;

  /** Sets the selected tab.
   * If this is set all tab changes needs to be handled by the user. */
  @Prop() selectedIndex: number;

  @State() buttonWidth: number = 0;

  @State() showLeftScroll: boolean = false;

  @State() showRightScroll: boolean = false;

  navWrapperElement: HTMLElement = null; // reference to container with nav buttons

  componentWidth: number = 0; // visible width of this component

  buttonsWidth: number = 0; // total width of all nav items combined

  scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper

  children: Array<HTMLSddsFolderTabElement>;

  @Event({
    eventName: 'sddsChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsChange: EventEmitter<{
    selectedTabIndex: number;
  }>;

  @Watch('selectedIndex')
  handleSelectedTabIndexChange() {
    this.host.setAttribute('selected-tab-index', `${this.selectedIndex}`);
  }

  /** Sets the passed tabindex as the selected tab. */
  @Method()
  async selectTab(tabIndex: number) {
    if (!this.children[tabIndex].disabled) {
      this.children.forEach((element) => element.setSelected(false));
      this.children = this.children.map((element, index) => {
        if (index === tabIndex) {
          element.setSelected(true);
          this.selectedIndex = tabIndex;
        }
        return element;
      });
    }
    return {
      selectedTabIndex: this.selectedIndex,
    };
  }

  calculateButtonWidth() {
    this.children = this.children.map((tab: HTMLSddsFolderTabElement) => {
      if (tab.offsetWidth > this.buttonWidth) {
        this.buttonWidth = tab.offsetWidth;
      }
      return tab;
    });
    this.children.forEach((tab) => {
      tab.setTabWidth(this.buttonWidth);
    });
  }

  scrollRight() {
    const scroll = this.navWrapperElement.scrollLeft;
    this.navWrapperElement.scrollLeft = scroll + this.buttonWidth;
    this.evaluateScrollButtons();
  }

  scrollLeft() {
    const scroll = this.navWrapperElement.scrollLeft;
    this.navWrapperElement.scrollLeft = scroll - this.buttonWidth;
    this.evaluateScrollButtons();
  }

  evaluateScrollButtons() {
    const scroll = this.navWrapperElement.scrollLeft;

    if (scroll >= this.scrollWidth) {
      this.showRightScroll = false;
    } else {
      this.showRightScroll = true;
    }

    if (scroll <= 0) {
      this.showLeftScroll = false;
    } else {
      this.showLeftScroll = true;
    }
  }

  addResizeObserver = () => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const componentWidth = entry.contentRect.width;
        let buttonsWidth = 0;

        const navButtons = Array.from(this.host.children);
        navButtons.forEach((navButton: HTMLElement) => {
          const style = window.getComputedStyle(navButton);
          buttonsWidth +=
            navButton.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        });

        this.componentWidth = componentWidth;
        this.buttonsWidth = buttonsWidth;
        this.scrollWidth = buttonsWidth - componentWidth;

        if (this.buttonsWidth > this.componentWidth) {
          this.evaluateScrollButtons();
        } else {
          this.showLeftScroll = false;
          this.showRightScroll = false;
        }
      });
    });

    resizeObserver.observe(this.navWrapperElement);
  };

  addEventListenerToTabs = () => {
    this.children = Array.from(this.host.children) as Array<HTMLSddsFolderTabElement>;
    this.children = this.children.map((item, index) => {
      item.addEventListener('click', () => {
        if (!item.disabled) {
          this.children.forEach((element) => element.setSelected(false));
          item.setSelected(true);
          this.selectedIndex = index;
          this.sddsChange.emit({
            selectedTabIndex: this.selectedIndex,
          });
        }
      });
      this.selectedIndex = index;
      return item;
    });
  };

  componentDidLoad() {
    this.children = Array.from(this.host.children) as Array<HTMLSddsFolderTabElement>;
    if (!this.selectedIndex) {
      this.addEventListenerToTabs();
    } else {
      this.children[this.selectedIndex].setSelected(true);
      this.sddsChange.emit({
        selectedTabIndex: this.selectedIndex,
      });
    }
    if (this.defaultSelectedIndex) {
      this.children[this.defaultSelectedIndex].setSelected(true);
      this.selectedIndex = this.defaultSelectedIndex;
      this.sddsChange.emit({
        selectedTabIndex: this.selectedIndex,
      });
    }
    this.children[0].classList.add('first');
    this.children[this.children.length - 1].classList.add('last');
    this.calculateButtonWidth();
  }

  componentDidUpdate() {
    this.calculateButtonWidth();
  }

  componentDidRender() {
    if (this.buttonsWidth > this.componentWidth) {
      this.evaluateScrollButtons();
    } else {
      this.showLeftScroll = false;
      this.showRightScroll = false;
    }
    this.addResizeObserver();
  }

  render() {
    return (
      <Host class={`${this.modeVariant ? `sdds-mode-variant-${this.modeVariant}` : ''}`}>
        <div
          ref={(el) => {
            this.navWrapperElement = el as HTMLDivElement;
          }}
          class="wrapper"
          role="list"
        >
          <button
            class={`scroll-left-button ${this.showLeftScroll ? 'show' : ''}`}
            disabled={!this.showLeftScroll}
            onClick={() => this.scrollLeft()}
          >
            <sdds-icon name="chevron_left" size="20px"></sdds-icon>
          </button>
          <slot></slot>
          <button
            class={`scroll-right-button ${this.showRightScroll ? 'show' : ''}`}
            disabled={!this.showRightScroll}
            onClick={() => this.scrollRight()}
          >
            <sdds-icon name="chevron_right" size="20px"></sdds-icon>
          </button>
        </div>
      </Host>
    );
  }
}
