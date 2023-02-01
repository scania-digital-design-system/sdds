import { Component, Host, State, Element, h, Prop, Event, EventEmitter } from '@stencil/core';
import { HostElement, Watch } from '@stencil/core/internal';

@Component({
  tag: 'sdds-inline-tabs',
  styleUrl: 'inline-tabs.scss',
  shadow: true,
})
export class InlineTabsFullbleed {
  /** Variant of the tabs, primary= on white, secondary= on grey50 */
  @Prop() modeVariant: 'primary' | 'secondary' = 'primary';

  @Element() host: HostElement;

  @State() tabs: Array<any> = []; // array with metadata for slotted children

  @State() showLeftScroll: boolean = false;

  @State() showRightScroll: boolean = false;

  @State() selectedTab: string;

  navWrapperElement: HTMLElement = null; // reference to container with nav buttons

  componentWidth: number = 0; // visible width of this component

  buttonsWidth: number = 0; // total width of all nav items combined

  scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper

  buttonWidth: number = 0; // current calculated width of the largest nav button

  children: Array<HTMLSddsInlineTabElement> = [];

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

  calculateButtonWidth() {
    this.children = this.children.map((navButton: HTMLSddsInlineTabElement) => {
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

  connectedCallback() {
    this.children = Array.from(this.host.children) as HTMLSddsInlineTabElement[];

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

    this.children[0].classList.add('first');
    this.children[this.children.length - 1].classList.add('last');
  }

  @Event({
    eventName: 'sddsInlineTabChangeEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsInlineTabChangeEvent: EventEmitter<{
    selectedTab: string;
  }>;

  @Watch('selectedTab')
  handleSelectedTabChange() {
    this.host.setAttribute('selected-tab', this.selectedTab);
    this.sddsInlineTabChangeEvent.emit({
      selectedTab: this.selectedTab,
    });
  }

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
          <slot />
        </div>
        <button
          class={`scroll-right-button ${this.showRightScroll ? 'show' : ''}`}
          onClick={() => this.scrollRight()}
          disabled={!this.showRightScroll}
        >
          <sdds-icon name="chevron_right" size="20px"></sdds-icon>
        </button>
        <button
          class={`scroll-left-button ${this.showLeftScroll ? 'show' : ''}`}
          onClick={() => this.scrollLeft()}
          disabled={!this.showLeftScroll}
        >
          <sdds-icon name="chevron_left" size="20px"></sdds-icon>
        </button>
      </Host>
    );
  }
}
