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
  /** Variant of the tabs, primary= on white, secondary= on grey50 */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  @State() buttonWidth: number = 0;

  @State() showLeftScroll: boolean = false;

  @State() showRightScroll: boolean = false;

  @State() selectedTab: string;

  @State() selectedTabIndex: number;

  @Element() host: HTMLElement;

  navWrapperElement: HTMLElement = null; // reference to container with nav buttons

  componentWidth: number = 0; // visible width of this component

  buttonsWidth: number = 0; // total width of all nav items combined

  scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper

  children: Array<HTMLSddsTabButtonElement | HTMLSddsTabLinkElement> = [];

  calculateButtonWidth() {
    this.children = this.children.map(
      (navButton: HTMLSddsTabButtonElement | HTMLSddsTabLinkElement) => {
        if (navButton.offsetWidth > this.buttonWidth) {
          this.buttonWidth = navButton.offsetWidth;
        }
        return navButton;
      },
    );
    this.children.forEach((item) => {
      item.setTabWidth(this.buttonWidth);
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

  connectedCallback() {
    this.children = Array.from(this.host.children) as Array<
      HTMLSddsTabButtonElement | HTMLSddsTabLinkElement
    >;
    this.children = this.children.map((item, index) => {
      item.addEventListener('click', () => {
        if (!item.disabled) {
          this.children.forEach((element) => element.removeAttribute('selected'));
          item.setAttribute('selected', '');
          this.selectedTab = item.innerHTML;
          this.selectedTabIndex = index;
        }
      });
      if (item.selected) {
        this.selectedTab = item.innerHTML;
        this.selectedTabIndex = index;
      }
      return item;
    });
  }

  componentDidLoad() {
    this.calculateButtonWidth();
  }

  componentWillRender() {
    if (!this.selectedTab) {
      this.children = Array.from(this.host.children) as Array<
        HTMLSddsTabButtonElement | HTMLSddsTabLinkElement
      >;
      this.children = this.children.map((item, index) => {
        if (item.selected) {
          this.selectedTab = item.innerHTML;
          this.selectedTabIndex = index;
        }
        return item;
      });
    }
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

  componentDidUpdate() {
    this.calculateButtonWidth();
  }

  @Event({
    eventName: 'sddsChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsChange: EventEmitter<{
    selectedTab: string;
    selectedTabIndex: number;
  }>;

  /** Sets the passed tabindex as the selected tab. */
  @Method()
  async selectTab(tabIndex: number) {
    if (!this.children[tabIndex].disabled) {
      this.children.forEach((element) => element.removeAttribute('selected'));
      this.children = this.children.map((element, index) => {
        if (index === tabIndex) {
          element.setAttribute('selected', '');
          this.selectedTab = element.innerHTML;
          this.selectedTabIndex = tabIndex;
        }
        return element;
      });
    }
    return {
      selectedTab: this.selectedTab,
      selectedTabIndex: this.selectedTabIndex,
    };
  }

  @Watch('selectedTab')
  handleSelectedTabChange() {
    this.host.setAttribute('selected-tab', this.selectedTab);
  }

  @Watch('selectedTabIndex')
  handleSelectedTabIndexChange() {
    this.host.setAttribute('selected-tab-index', `${this.selectedTabIndex}`);
    this.sddsChange.emit({
      selectedTab: this.selectedTab,
      selectedTabIndex: this.selectedTabIndex,
    });
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
