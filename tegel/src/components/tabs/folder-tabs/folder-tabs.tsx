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
} from '@stencil/core';

@Component({
  tag: 'sdds-folder-tabs',
  styleUrl: 'folder-tabs.scss',
  shadow: true,
})
export class InlineTabs {
  @Element() host: HTMLElement;

  /** either use this (default-tab="...") or read attribute "default" from one of the slotted children. */
  @Prop() defaultTab: string;

  /** Variant of the tabs, primary= on white, secondary= on grey50 */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  /** array with metadata for slotted children */
  @State() tabs: Array<any> = [];

  /** current calculated width of each nav button (calculated from the largest one) */
  @State() buttonWidth: number = 0;

  /** current calculated tab height (calculated from the one with the most height) */
  @State() tabHeight: number = 0;

  @State() showLeftScroll: boolean = false;

  @State() showRightScroll: boolean = false;

  @State() selectedTab: string = null;

  startingTab: string = null; // name of the tab to show by default (infered from either "default-tab"-prop (on component) or "default"-prop (on a slotted child)

  navWrapperElement: HTMLElement = null; // reference to container with nav buttons

  componentWidth: number = 0; // visible width of this component

  buttonsWidth: number = 0; // total width of all nav items combined

  scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper

  children: Array<HTMLSddsFolderTabElement> = [];

  initComponent(createInitialState = true) {
    if (createInitialState) {
      this.setInitialState();
    }
    this.children = Array.from(this.tabs);
  }

  calculateButtonWidth() {
    this.children = this.children.map((navButton: HTMLSddsFolderTabElement) => {
      const width = navButton.clientWidth;
      if (navButton.clientWidth > this.buttonWidth) {
        this.buttonWidth = width;
      }
      if (this.buttonWidth > 0) {
        // eslint-disable-next-line no-param-reassign
        navButton.style.width = `${this.buttonWidth.toString()}px`;
      }
      return navButton;
    });
  }

  calculateTabHeight() {
    let best = 0;
    this.tabs.forEach((_, tabIndex) => {
      const tab = this.tabs[tabIndex];
      // TODO: add comment on what this does
      const oldStyle = tab.element.style.display;
      tab.element.style.display = '';
      const height = tab.element.clientHeight;
      tab.element.style.display = oldStyle;

      if (height > best) {
        best = height;
      }
    });

    this.tabHeight = best;
  }

  componentDidRender() {
    this.calculateTabHeight();
  }

  componentDidLoad() {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const componentWidth = entry.contentRect.width;
        let buttonsWidth = 0;

        const navButtons = Array.from(this.host.children);
        navButtons.forEach((navButton: HTMLElement) => {
          const style = window.getComputedStyle(navButton);
          buttonsWidth +=
            navButton.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);

          navButton.classList.add('sdds-inline-tabs-fullbleed--tab');
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
    this.calculateButtonWidth();
  }

  setInitialState() {
    if (this.defaultTab) {
      this.startingTab = this.defaultTab;
    }
  }

  scrollRight() {
    const scroll = this.navWrapperElement.scrollLeft;
    console.log(this.buttonWidth);

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

  connectedCallback() {
    this.children = Array.from(this.host.children) as HTMLSddsFolderTabElement[];
    this.children.forEach((item) => {
      if (item.selected) {
        this.selectedTab = item.label;
      }
      item.addEventListener('click', () => {
        if (!item.disabled) {
          this.children.forEach((test) => test.removeAttribute('selected'));
          item.setAttribute('selected', '');
          this.selectedTab = item.label;
        }
      });
    });
    this.calculateButtonWidth();
  }

  @Event({
    eventName: 'sddsFolderTabChangeEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  tabChangeEvent: EventEmitter<{
    selectedTab: string;
  }>;

  @Watch('selectedTab')
  handleSelectedTabChange() {
    this.host.setAttribute('selected-tab', this.selectedTab);
    this.tabChangeEvent.emit({
      selectedTab: this.selectedTab,
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
        >
          <slot />
        </div>
        <button
          class={`scroll-right-button ${this.showRightScroll ? 'show' : ''}`}
          disabled={!this.showRightScroll}
          onClick={() => this.scrollRight()}
        >
          <sdds-icon name="chevron_right" size="20px"></sdds-icon>
        </button>
        <button
          class={`scroll-left-button ${this.showLeftScroll ? 'show' : ''}`}
          disabled={!this.showLeftScroll}
          onClick={() => this.scrollLeft()}
        >
          <sdds-icon name="chevron_left" size="20px"></sdds-icon>
        </button>
      </Host>
    );
  }
}
