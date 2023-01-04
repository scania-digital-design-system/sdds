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
  /** The na that is displayed in the header */
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
  closeChildren() {
    this.closeAllEvent.emit();
  }

  render() {
    return (
      <Host>
        <div class="sdds-header-app-name">{this.siteName}</div>
        <nav class="nav-content">
          <ul>
            <slot name="inline-menu"></slot>
          </ul>
          <ul>
            <slot name="toolbar"></slot>
          </ul>
        </nav>
        <div class="sdds-header-logo">
          <a class="sdds-header-logo-holder" href={this.iconHref}></a>
        </div>
      </Host>
    );
  }
}
