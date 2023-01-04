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

  parentSlot: string;

  @Element() host: HTMLElement;

  @Method()
  async toggleDropdown() {
    if (!this.open) {
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
          class={`${this.open ? 'open' : 'closed'}`}
          onClick={() => {
            this.toggleDropdown();
          }}
        >
          <slot></slot>
        </button>
        <ul class={`${this.open ? 'open' : 'closed'} ${this.parentSlot}`}>
          <slot name="child"></slot>
        </ul>
      </Host>
    );
  }
}
