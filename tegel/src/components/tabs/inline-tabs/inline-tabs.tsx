import { Component, Host, State, Element, h, Prop, Event, EventEmitter } from '@stencil/core';
import { HostElement, Method, Watch } from '@stencil/core/internal';

@Component({
  tag: 'sdds-inline-tabs',
  styleUrl: 'inline-tabs.scss',
  shadow: true,
})
export class InlineTabsFullbleed {
  /** Variant of the tabs, primary= on white, secondary= on grey50 */
  @Prop() modeVariant: 'primary' | 'secondary' = 'primary';

  @Element() host: HostElement;

  @State() showLeftScroll: boolean = false;

  @State() showRightScroll: boolean = false;

  @State() selectedTab: {
    tab: string;
    tabIndex: number;
  };

  @State() buttonWidth: number = 0; // current calculated width of the largest nav button

  private navWrapperElement: HTMLElement = null; // reference to container with nav buttons

  private componentWidth: number = 0; // visible width of this component

  private buttonsWidth: number = 0; // total width of all nav items combined

  private scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper

  private children: Array<HTMLSddsInlineTabsButtonElement | HTMLSddsInlineTabsLinkElement>;

  /** Selects a tab based on tabindex, will not select a disabled tab. */
  @Method()
  async selectTab(tabIndex: number) {
    if (!this.children[tabIndex].disabled) {
      this.children.forEach((element) => element.removeAttribute('selected'));
      this.children = this.children.map((element, index) => {
        if (index === tabIndex) {
          element.setAttribute('selected', '');
          this.selectedTab = {
            tab: element.innerText,
            tabIndex: index,
          };
        }
        return element;
      });
    }
    return {
      selectedTab: this.selectedTab.tab,
      selectedTabIndex: this.selectedTab.tabIndex,
    };
  }

  @Event({
    eventName: 'sddsChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsChange: EventEmitter<{
    selectedTab: {
      tab: string;
      tabIndex: number;
    };
  }>;

  @Watch('selectedTab')
  handleSelectedTabChange() {
    this.host.setAttribute('selected-tab', this.selectedTab.tab);
    this.host.setAttribute('selected-tab-index', `${this.selectedTab.tabIndex}`);
    this.sddsChange.emit({
      selectedTab: this.selectedTab,
    });
  }

  connectedCallback() {
    this.children = Array.from(this.host.children) as Array<
      HTMLSddsInlineTabsButtonElement | HTMLSddsInlineTabsLinkElement
    >;
    this.children = this.children.map((item, index) => {
      item.addEventListener('click', () => {
        if (!item.disabled) {
          this.children.forEach((element) => element.removeAttribute('selected'));
          item.setAttribute('selected', '');
          this.selectedTab = {
            tab: item.innerText,
            tabIndex: index,
          };
        }
      });
      if (item.selected) {
        this.selectedTab = {
          tab: item.innerText,
          tabIndex: index,
        };
      }
      return item;
    });
    this.children[0].classList.add('first');
    this.children[this.children.length - 1].classList.add('last');
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
  }

  componentWillRender() {
    if (!this.selectedTab) {
      this.children = Array.from(this.host.children) as Array<
        HTMLSddsInlineTabsButtonElement | HTMLSddsInlineTabsLinkElement
      >;
      this.children = this.children.map((item, index) => {
        if (item.selected) {
          this.selectedTab = {
            tab: item.innerText,
            tabIndex: index,
          };
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

  scrollRight() {
    const scroll = this.navWrapperElement.scrollLeft;
    this.navWrapperElement.scrollLeft = scroll + 95;
    this.evaluateScrollButtons();
  }

  scrollLeft() {
    const scroll = this.navWrapperElement.scrollLeft;
    this.navWrapperElement.scrollLeft = scroll - 10;
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

  render() {
    return (
      <Host class={`${this.modeVariant ? `sdds-mode-variant-${this.modeVariant}` : ''}`}>
        <div
          role="list"
          class="wrapper"
          ref={(el) => {
            this.navWrapperElement = el as HTMLElement;
          }}
        >
          <button
            class={`scroll-left-button ${this.showLeftScroll ? 'show' : ''}`}
            onClick={() => this.scrollLeft()}
            disabled={!this.showLeftScroll}
          >
            <sdds-icon name="chevron_left" size="20px"></sdds-icon>
          </button>
          <slot />
          <button
            class={`scroll-right-button ${this.showRightScroll ? 'show' : ''}`}
            onClick={() => this.scrollRight()}
            disabled={!this.showRightScroll}
          >
            <sdds-icon name="chevron_right" size="20px"></sdds-icon>
          </button>
        </div>
      </Host>
    );
  }
}
