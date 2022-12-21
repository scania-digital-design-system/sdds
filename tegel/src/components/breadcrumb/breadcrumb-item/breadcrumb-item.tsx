import { Component, h, Prop } from '@stencil/core';

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

  /** Toggle the disabled state for the breadcrumb */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <li
        class={`${this.current ? 'sdds-breadcrumb-item-current' : ''} 
        ${this.disabled ? 'sdds-breadcrumb-item-disabled' : ''}`}
      >
        <a
          aria-current={this.current && 'page'}
          // eslint-disable-next-line no-script-url
          href={this.disabled ? 'javascript:void(0)' : this.href}
        >
          {this.linkText}
        </a>
      </li>
    );
  }
}
