import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';

interface CollapsedEvent {
  collapsed: boolean;
}

const OPENING_ANIMATION_DURATION = 400;
const INITIALIZE_ANIMATION_DELAY = 500;

@Component({
  tag: 'sdds-side-menu',
  styleUrl: 'side-menu.scss',
  shadow: true,
})
export class SddsSideMenu {
  @Element() host: HTMLSddsSideMenuElement;

  /** Broadcasts collapsed state to child components. */
  @Event({
    eventName: 'sddsSideMenuCollapsed',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  collapsedEventEmitter: EventEmitter<CollapsedEvent>;

  /** If the side menu is open or not. */
  @Prop({ reflect: true }) open: boolean = false;

  /** If the side menu should always be shown on desktop screens to the side. */
  @Prop({ reflect: true }) persistent: boolean = false;

  /** If the side menu is collapsed. Only a persistent desktop menu can be collapsed. */
  @Prop({ reflect: true }) collapsed: boolean = false;

  @State() isUpperSlotEmpty: boolean = false;

  @State() isClosed: boolean = true;

  @State() isOpen: boolean = false;

  @State() isClosing: boolean = false;

  @State() isOpening: boolean = false;

  connectedCallback() {
    this.collapsedEventEmitter.emit({
      collapsed: this.collapsed,
    });
  }

  componentDidLoad() {
    setTimeout(() => this.onOpenChange(this.open), INITIALIZE_ANIMATION_DELAY);

    const upperSlot = this.host.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    const upperSlotElements = upperSlot.assignedElements();
    const hasUpperSlotElements = upperSlotElements?.length > 0;

    if (!hasUpperSlotElements) {
      this.isUpperSlotEmpty = true;
    }
  }

  @Watch('open')
  onOpenChange(newVal: boolean, oldVal?: boolean) {
    if (newVal && !oldVal) {
      this.setOpening();
    }
    if (!newVal && oldVal) {
      this.setClosing();
    }
  }

  @Watch('collapsed')
  onCollapsedChange(newVal: boolean) {
    this.collapsedEventEmitter.emit({
      collapsed: newVal,
    });
  }

  async setOpening() {
    this.isClosed = false;

    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
    this.isOpening = true;

    await new Promise((resolve) => {
      setTimeout(resolve, OPENING_ANIMATION_DURATION);
    });
    this.isOpening = false;
    this.isOpen = true;
  }

  async setClosing() {
    this.isOpen = false;
    this.isClosing = true;

    await new Promise((resolve) => {
      setTimeout(resolve, OPENING_ANIMATION_DURATION);
    });
    this.isClosing = false;
    this.isClosed = true;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'wrapper': true,
            'state--upper-slot-empty': this.isUpperSlotEmpty,
            'state--open': this.isOpen || this.isOpening,
            'state--closed': this.isClosed,
          }}
        >
          <slot name="overlay"></slot>
          <aside class={`menu`}>
            <slot name="close-button"></slot>
            <div class="sdds-side-menu-wrapper">
              <ul class={`sdds-side-menu-list sdds-side-menu-list-upper`}>
                <slot></slot>
              </ul>
              <ul class={`sdds-side-menu-list sdds-side-menu-list-end`}>
                <slot name="end"></slot>
              </ul>
            </div>
            <slot name="sticky-end"></slot>
          </aside>
        </div>
      </Host>
    );
  }
}
