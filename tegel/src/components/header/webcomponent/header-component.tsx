import {
  Component,
  h,
  Host,
  Prop,
  Element,
  Listen,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core';

@Component({
  tag: 'sdds-header',
  styleUrl: 'header-component.scss',
  shadow: true,
})
export class SddsHeader {
  /** The name that is displayed in the header */
  @Prop() siteName: string = 'Application';

  /** Href for the header icon */
  @Prop() iconHref: string = '#';

  @Element() host: HTMLElement;

  @Event({
    eventName: 'closeAllEvent',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  closeAllEvent: EventEmitter;

  @Listen('childOpenedEvent', { target: 'body' })
  handleChildOpenedEvent() {
    this.closeAllEvent.emit();
  }

  @Method()
  async closeChildren() {
    this.closeAllEvent.emit();
  }

  render() {
    return (
      <Host>
        <div class="header-app-name">{this.siteName}</div>
        <nav class="nav-content">
          <nav class="mobile-menu">
            <ul>
              <slot name="mobile-menu"></slot>
            </ul>
          </nav>
          <ul class="inline-menu">
            <slot name="inline-menu"></slot>
          </ul>
          <ul class="toolbar">
            <slot name="toolbar"></slot>
          </ul>
        </nav>
        <div class="header-logo">
          <a href={this.iconHref}></a>
        </div>
      </Host>
    );
  }
}
