import { Component, Host, State, Element, Prop, h, Method } from '@stencil/core';

function generateKeyFromName(name: string) {
  return name
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9-]/gi, '')
    .toLowerCase();
}

@Component({
  tag: 'sdds-inline-tabs',
  styleUrl: 'inline-tabs.scss',
  shadow: true,
})
export class InlineTabs {
  @Element() host: HTMLElement;

  /** either use this (default-tab="...") or read attribute "default" from one of the slotted children. */
  @Prop() defaultTab: string = '';

  /** different height settings. right now only supports "auto", otherwise ignored */
  @Prop() autoHeight: boolean = false;

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

  /** used for switching to a tab programmatically */
  @Method()
  async showTab(key: string) {
    this.switchToTab(key);
  }

  startingTab: string = null; // name of the tab to show by default (infered from either "default-tab"-prop (on component) or "default"-prop (on a slotted child)

  navWrapperElement: HTMLElement = null; // reference to container with nav buttons

  tabWrapperElement: HTMLElement = null; // reference to container with slotted children

  componentWidth: number = 0; // visible width of this component

  buttonsWidth: number = 0; // total width of all nav items combined

  scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper

  useAutoHeight: boolean = false; // set height for slotted children or not

  componentWillLoad() {
    this.initComponent();
  }

  initComponent(createInitialState = true) {
    if (this.autoHeight) {
      this.useAutoHeight = true;
    }

    this.tabs = Array.from(this.host.children).map((item: HTMLSddsInlineTabElement, index) => {
      const name = item.label ? item.label : item.getAttribute('name') || `Tab ${index + 1}`;
      const key = generateKeyFromName(name);
      if (item.default) {
        this.startingTab = key;
      }
      let disabled = false;
      if (item.disabled) {
        disabled = true;
      }
      return {
        name,
        key,
        element: item,
        disabled,
        visible: true,
        initialDisplay: window.getComputedStyle(item).display,
      };
    });

    if (createInitialState) {
      this.setInitialState();
    }
    this.tabs = Array.from(this.tabs);
  }

  calculateButtonWidth() {
    const navButtons = this.navWrapperElement.querySelectorAll('button.sdds-inline-tabs--tab');
    let best = 0;
    Array.from(navButtons).forEach((navButton: HTMLElement) => {
      const oldStyle = navButton.style.width;
      // eslint-disable-next-line no-param-reassign
      navButton.style.width = '';
      const width = navButton.clientWidth;
      // eslint-disable-next-line no-param-reassign
      navButton.style.width = oldStyle;

      if (navButton.clientWidth > best) {
        best = width;
      }
    });

    this.buttonWidth = best;
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
    this.calculateButtonWidth();
  }

  componentDidLoad() {
    const mutationObserver = new MutationObserver((/* mutations, observer */) => {
      const visibleTab = this.tabs.find((tab) => tab.visible);
      this.initComponent(false);
      this.calculateTabHeight();
      this.calculateButtonWidth();
      if (visibleTab) {
        this.switchToTab(visibleTab.key);
      }
    });

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const componentWidth = entry.contentRect.width;
        let buttonsWidth = 0;

        const navButtons = entry.target.querySelectorAll('button.sdds-inline-tabs--tab');
        Array.from(navButtons).forEach((navButton: HTMLElement) => {
          buttonsWidth += navButton.clientWidth;
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

        this.calculateTabHeight();
      });
    });

    mutationObserver.observe(this.host, {
      childList: true,
      attributes: true,
    });

    resizeObserver.observe(this.navWrapperElement);

    this.calculateButtonWidth();
    this.calculateTabHeight();
  }

  setInitialState() {
    if (this.defaultTab) {
      this.startingTab = this.defaultTab;
    }

    this.tabs.forEach((tab, index) => {
      if (this.startingTab) {
        if (tab.key !== this.startingTab) {
          this.hideTab(index);
        }
      } else {
        if (index > 0) {
          this.hideTab(index);
        }
      }
    });
  }

  unhideTab(tabIndex) {
    const tab = this.tabs[tabIndex];
    tab.element.style.display = '';
    tab.visible = true;
  }

  hideTab(tabIndex) {
    const tab = this.tabs[tabIndex];
    tab.element.style.display = 'none';
    tab.visible = false;
  }

  switchToTab(key: string) {
    this.tabs.forEach((tab, index) => {
      if (tab.key === key) {
        this.unhideTab(index);
      } else {
        this.hideTab(index);
      }
    });

    this.tabs = Array.from(this.tabs);
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

  render() {
    const style: Record<string, string> = {};
    if (this.useAutoHeight) {
      style.height = `${this.tabHeight}px`;
    }

    return (
      <Host class={`${this.modeVariant !== null ? `sdds-mode-variant-${this.modeVariant}`: ''}`}>
        <div class={`sdds-inline-tabs sdds-inline-tabs`}>
          <nav class="sdds-inline-tabs-header">
            <div
              ref={(el) => {
                this.navWrapperElement = el as HTMLDivElement;
              }}
              class="sdds-inline-tabs-wrapper"
            >
              {this.tabs.map((tab) => (
                <button
                  style={{ width: `${this.buttonWidth}px` }}
                  disabled={tab.disabled}
                  class={`sdds-inline-tabs--tab ${
                    tab.visible ? 'sdds-inline-tabs--tab__active' : ''
                  }`}
                  onClick={() => this.switchToTab(tab.key)}
                >
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
            <div class="sdds-inline-tabs-header-navigation">
              <button
                class={`sdds-inline-tabs--forward ${
                  this.showRightScroll ? 'sdds-inline-tabs--back__show' : ''
                }`}
                disabled={!this.showRightScroll}
                onClick={() => this.scrollRight()}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.1147 17.3291C5.87062 17.0851 5.87062 16.6893 6.1147 16.4453L12.2948 10.2652C12.4412 10.1187 12.4412 9.8813 12.2948 9.73485L6.1147 3.55476C5.87062 3.31068 5.87062 2.91496 6.1147 2.67088C6.35878 2.4268 6.75451 2.4268 6.99858 2.67088L13.1787 8.85097C13.8133 9.48557 13.8133 10.5145 13.1787 11.1491L6.99858 17.3291C6.75451 17.5732 6.35878 17.5732 6.1147 17.3291Z"
                  />
                </svg>
              </button>
              <button
                class={`sdds-inline-tabs--back ${
                  this.showLeftScroll ? 'sdds-inline-tabs--back__show' : ''
                }`}
                disabled={!this.showLeftScroll}
                onClick={() => this.scrollLeft()}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8853 2.67085C14.1294 2.91493 14.1294 3.31066 13.8853 3.55473L7.70522 9.73482C7.55878 9.88127 7.55878 10.1187 7.70522 10.2652L13.8853 16.4452C14.1294 16.6893 14.1294 17.085 13.8853 17.3291C13.6412 17.5732 13.2455 17.5732 13.0014 17.3291L6.82134 11.149C6.18674 10.5144 6.18674 9.48554 6.82134 8.85094L13.0014 2.67085C13.2455 2.42677 13.6412 2.42677 13.8853 2.67085Z"
                  />
                </svg>
              </button>
            </div>
          </nav>
          <div
            ref={(el) => {
              this.tabWrapperElement = el as HTMLElement;
            }}
            class="sdds-inline-tabs-main"
            style={style}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
