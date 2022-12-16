import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class SddsBreadcrumbItem {
  /** Boolean for the current link */
  @Prop() current: boolean = false;

  /** Href for the link */
  @Prop() href: string;

  /** The text for the breadcrumb */
  @Prop() linkText: string;

  /** The text for the breadcrumb */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host class={`sdds-breadcrumb-item ${this.disabled && 'disabled'}`}>
        {!this.disabled ? (
          <a href={this.href} aria-current={this.current && 'page'}>
            {this.linkText}
          </a>
        ) : (
          <a>{this.linkText}</a>
        )}
      </Host>
    );
  }
}
