import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { HostElement, State } from '@stencil/core/internal';

@Component({
  tag: 'sdds-toast',
  styleUrl: 'sdds-toast.scss',
  shadow: true,
})
export class SddsToast {
  /** ID for the toast. Randomly generated if not specified. */
  @Prop() toastId: string = crypto.randomUUID();

  /** Header text for the component. */
  @Prop() header: string;

  /** Subheader text for the component. */
  @Prop() subheader: string;

  /** Type of toast. */
  @Prop() type: 'information' | 'error' | 'warning' | 'success' = 'information';

  /** Removes the icon in the toast. */
  @Prop() noIcon: boolean = false;

  @Prop() show: boolean = true;

  @Element() host: HostElement;

  @State() hasSubHeader: boolean;

  getIconName = () => {
    switch (this.type) {
      case 'information':
        return 'info';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'success':
        return 'tick';
      default:
        return 'info';
    }
  };

  /** Sends unique toast identifier when it is closed. */
  @Event({
    eventName: 'sddsToastClosedEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsToastClosedEvent: EventEmitter<{
    toastId: string;
  }>;

  connectedCallback() {
    this.hasSubHeader = this.host.children[0].slot === 'toast-subheader';
  }

  render() {
    return (
      this.show && (
        <Host>
          <div
            class={`
            toast-wrapper
            ${this.type}
            `}
          >
            {!this.noIcon && <sdds-icon name={this.getIconName()} size="20px"></sdds-icon>}
            <div class={`toast-content`}>
              <div class={`toast-header ${this.hasSubHeader ? '' : 'no-subheader'}`}>
                {this.header}
              </div>
              <div class="toast-subheader">
                <slot name="toast-subheader"></slot>
              </div>
              <slot name="toast-link"></slot>
            </div>
            <button
              onClick={() => {
                this.show = false;
                this.sddsToastClosedEvent.emit({
                  toastId: this.toastId,
                });
              }}
              class={`toast-close`}
            >
              <sdds-icon name="cross" size="20px"></sdds-icon>
            </button>
          </div>
        </Host>
      )
    );
  }
}
