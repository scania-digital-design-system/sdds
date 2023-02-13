import { Component, Host, State, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-navigation-tabs',
  styleUrl: 'navigation-tabs.scss',
  shadow: true,
})
export class NavigationTabs {
  @Element() host: HTMLElement;

  @State() tabs: Array<any> = []; // array with metadata for slotted children

  @State() showLeftScroll: boolean = false;

  @State() showRightScroll: boolean = false;
  
   /** Variant of the tabs, primary= on white, secondary= on grey50 */
   @Prop() modeVariant: 'primary' | 'secondary' = null;

  navWrapperElement: HTMLElement = null; // reference to container with nav buttons

  componentWidth: number = 0; // visible width of this component

  buttonsWidth: number = 0; // total width of all nav items combined

  scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper

  buttonWidth: number = 0; // current calculated width of the largest nav button

  componentDidRender() {
    this.calculateButtonWidth();
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

          navButton.classList.add('sdds-navigation-tabs-tab');
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

  calculateButtonWidth() {
    let best = 0;
    const navButtons = Array.from(this.host.children);
    navButtons.forEach((navButton: HTMLElement) => {
      const style = window.getComputedStyle(navButton);
      const width =
        navButton.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);

      if (width > best) {
        best = width;
      }
    });

    this.buttonWidth = best;
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
    return (
      <Host  class={`${this.modeVariant !== null ? `sdds-mode-variant-${this.modeVariant}`: ''}`}>
        <div class="sdds-navigation-tabs">
          <div
            class="sdds-navigation-tabs-wrapper"
            ref={(el) => {
              this.navWrapperElement = el as HTMLElement;
            }}
          >
            <slot />
          </div>
          <div class="sdds-navigation-tabs-navigation">
            <button
              class={`sdds-navigation-tabs-forward ${
                this.showRightScroll ? 'sdds-navigation-tabs-forward-show' : ''
              }`}
              onClick={() => this.scrollRight()}
              disabled={!this.showRightScroll}
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
                  fill="#0D0F13"
                ></path>
              </svg>
            </button>
            <button
              class={`sdds-navigation-tabs-back ${
                this.showLeftScroll ? 'sdds-navigation-tabs-back-show' : ''
              }`}
              onClick={() => this.scrollLeft()}
              disabled={!this.showLeftScroll}
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
                  fill="#0D0F13"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Host>
    );
  }
}
