import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-message',
  styleUrl: 'sdds-message.scss',
  shadow: true,
})
export class SddsMessage {
  @Prop() header: string;

  @Prop() modeVariant: 'primary' | 'secondary' = 'primary';

  // Type / State?
  @Prop() type: 'information' | 'error' | 'warning' | 'success' = 'information';

  @Prop() noIcon: boolean = false;

  @Prop() minimal: boolean = false;

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

  render() {
    return (
      <Host>
        <div
          class={`
        message-wrapper ${this.type}
        ${this.minimal ? 'message-minimal' : ''}
        sdds-mode-variant-${this.modeVariant}`}
        >
          {!this.noIcon && <sdds-icon name={this.getIconName()} size="20px"></sdds-icon>}
          <div class={`message-content`}>
            <div class="message-header">{this.header}</div>
            {!this.minimal && (
              <div class="message-extended-message">
                <slot></slot>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
