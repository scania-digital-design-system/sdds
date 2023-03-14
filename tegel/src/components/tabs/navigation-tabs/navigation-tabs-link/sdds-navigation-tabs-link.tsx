import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-navigation-tabs-link',
  styleUrl: 'sdds-navigation-tabs-link.scss',
  shadow: true,
})
export class SddsNavigationTabsLink {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  /** Href for the link */
  @Prop() href: string;

  /** Where to open the linked URL */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

  render() {
    return (
      <Host role="listitem">
        <a
          class={`
        ${this.selected ? 'selected' : ''}
        ${this.disabled ? 'disabled' : ''}
        `}
          href={this.href}
          target={this.target}
          rel={this.rel}
        >
          <div class="label">
            <slot></slot>
          </div>
        </a>
      </Host>
    );
  }
}
