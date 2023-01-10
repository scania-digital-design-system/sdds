import {
  Component,
  h,
  Host,
  Method,
  Prop,
  Element,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown',
  styleUrl: 'header-dropdown.scss',
  shadow: true,
})
export class HeaderDropdown {
  /** Opens and closes the dropdown */
  @Prop() open: boolean = false;

  @Prop() wide: boolean = false;

  @Prop() active: boolean = false;

  @Prop() noDropdownIcon: boolean = false;

  parentSlot: string;

  @Element() host: HTMLElement;

  @Method()
  async toggleDropdown() {
    if (
      !this.open &&
      !(this.parentSlot === 'mobile-menu-top' || this.parentSlot === 'mobile-menu-bottom')
    ) {
      this.childOpenedEvent.emit();
    }
    this.open = !this.open;
  }

  connectedCallback() {
    this.parentSlot = this.host.parentElement.slot;
  }

  @Event({
    eventName: 'childOpenedEvent',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  childOpenedEvent: EventEmitter;

  @Listen('closeAllEvent', { target: 'body' })
  handleCloseAllEvent() {
    this.open = false;
  }

  render() {
    return (
      <Host>
        <button
          class={`${this.active ? 'active' : ''} ${this.open ? 'open' : 'closed'} ${
            this.parentSlot
          }`}
          onClick={() => {
            this.toggleDropdown();
          }}
        >
          <slot name="dropdown-button"></slot>
          {!this.noDropdownIcon && (
            <sdds-icon class="chevron_down" name="chevron_down" size="16px"></sdds-icon>
          )}
        </button>
        <ul
          class={`${this.open ? 'open' : 'closed'} ${this.wide ? 'wide' : ''} ${this.parentSlot}`}
        >
          <slot name="dropdown-menu"></slot>
        </ul>
      </Host>
    );
  }
}
