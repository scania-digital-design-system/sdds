import { Component, Element, h, Prop } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-footer-link',
  styleUrl: 'sdds-footer-link.scss',
  shadow: false,
  scoped: true,
})
export class SddsFooterLink {
  @Prop() linkHref: string;

  parentIsTopPart: boolean = false;

  @Element() host: HostElement;

  connectedCallback() {
    this.parentIsTopPart = this.host.closest('sdds-footer-link-group').parentElement.slot === 'top';
  }

  render() {
    return (
      <li class={`${this.parentIsTopPart ? 'top-part-child' : ''}`}>
        <a href={this.linkHref}>
          <slot></slot>
        </a>
      </li>
    );
  }
}
