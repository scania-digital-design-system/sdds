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

@Component({
  tag: 'sdds-side-menu',
  styleUrl: 'side-menu.scss',
  shadow: true,
})
export class SddsSideMenu {
  @Element() host: HTMLSddsSideMenuElement;

  /** Broadcasts collapsed state to child components */
  @Event({
    eventName: 'tegelCollapsedSideMenu',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  collapsedSideMenuEventEmitter: EventEmitter<any>;

  /* If the side menu is open or not */
  @Prop({ reflect: true }) open: boolean = false;

  /* If the side menu should be shown persistently on desktop screens */
  @Prop({ reflect: true }) persistent: boolean = false;

  /** If collapsed, only a persistent desktop menu can be collapsed */
  @Prop({ reflect: true }) collapsed: boolean = false;

  @State() isUpperSlotEmpty: boolean = false;

  @State() isClosed: boolean = true;

  @State() isOpen: boolean = false;

  @State() isClosing: boolean = false;

  @State() isOpening: boolean = false;

  connectedCallback() {
    this.collapsedSideMenuEventEmitter.emit({
      collapsed: this.collapsed,
    });
  }

  componentDidLoad() {
    setTimeout(() => this.onOpenChange(this.open), 500);

    const upperSlot = this.host.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    const upperSlotElements = upperSlot.assignedElements();
    const hasUpperSlotElements = upperSlotElements?.length > 0;

    if (!hasUpperSlotElements) {
      this.isUpperSlotEmpty = true;
    }
  }

  @Watch('open')
  onOpenChange(newValue: boolean, oldValue?: boolean) {
    if (newValue && !oldValue) {
      this.setOpening();
    }
    if (!newValue && oldValue) {
      this.setClosing();
    }
  }

  @Watch('collapsed')
  onCollapsedChange(newValue: boolean) {
    this.collapsedSideMenuEventEmitter.emit({
      collapsed: newValue,
    });
  }

  setOpening() {
    this.isClosed = false;
    setTimeout(() => {
      this.isOpening = true;

      setTimeout(() => {
        this.isOpening = false;
        this.isOpen = true;
      }, 400);
    });
  }

  setClosing() {
    this.isOpen = false;
    this.isClosing = true;

    setTimeout(() => {
      this.isClosing = false;
      this.isClosed = true;
    }, 400);
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
