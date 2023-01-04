import {
  Component,
  Host,
  h,
  Prop,
  Method,
  Element,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher',
  styleUrl: 'header-launcher.scss',
  shadow: true,
})
export class HeaderLauncher {
  /** Opens and closes the launcher */
  @Prop() open: boolean = false;

  parentSlot: string;

  @Element() host: HTMLElement;

  @Method()
  async toggleLauncher() {
    if (!this.open) {
      this.childOpenedEvent.emit();
    }
    this.open = !this.open;
  }

  connectedCallback() {
    this.parentSlot = this.host.parentElement.slot;
  }

  @Listen('closeAllEvent', { target: 'body' })
  handleCloseAllEvent() {
    this.open = false;
  }

  @Event({
    eventName: 'childOpenedEvent',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  childOpenedEvent: EventEmitter;

  render() {
    return (
      <Host>
        <button
          class={`${this.open ? 'open' : 'closed'}`}
          onClick={() => {
            this.toggleLauncher();
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