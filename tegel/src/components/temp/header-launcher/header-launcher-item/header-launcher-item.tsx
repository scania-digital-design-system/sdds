import { Component, h, Host, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-item',
  styleUrl: 'header-launcher-item.scss',
  shadow: true,
})
export class SddsHeaderLauncherItem {
  @Prop() type: 'button' | 'link' | 'category' = 'button';

  @Prop() text: string = '';

  @Prop() href: string = '';

  /** Hide overlay event */
  @Event({
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  hideOverlayEvent: EventEmitter;

  /** Hide overlay event */
  @Event({
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  closeLauncherEvent: EventEmitter;

  closeLauncher = () => {
    this.hideOverlayEvent.emit();
    this.closeLauncherEvent.emit();
  };

  render() {
    return (
      <Host>
        <li>
          {this.type === 'button' && (
            <button
              onClick={() => {
                this.closeLauncher();
              }}
            >
              {this.text}
            </button>
          )}
          {this.type === 'link' && (
            <a
              onClick={() => {
                this.closeLauncher();
              }}
              href={this.href}
            >
              {this.text}
            </a>
          )}
          {this.type === 'category' && <div class="sdds-launcher-item-category">{this.text}</div>}
        </li>
      </Host>
    );
  }
}
