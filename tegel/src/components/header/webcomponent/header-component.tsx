import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header',
  styleUrl: 'header-component.scss',
  shadow: true,
})
export class SddsHeader {
  /** The na that is displayed in the header */
  @Prop() siteName: string = 'Application';

  /** URL for the sdds-header-icon */
  @Prop() iconHref: string = '#';

  @Element() host: HTMLElement;

  render() {
    return (
      <Host>
        <div class="sdds-header-app-name">{this.siteName}</div>
        <div class="sdds-header-content">
          <slot name="inline-menu"></slot>
          <slot name="toolbar"></slot>
        </div>
        <div class="sdds-header-logo">
          <a class="sdds-header-logo-holder" href={this.iconHref}></a>
        </div>
      </Host>
    );
  }
}
