import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-breadcrumb',
  styleUrl: 'breadcrumb-component.scss',
  shadow: true,
})
export class SddsBreadcrumb {
  render() {
    return (
      <Host class={'sdds-breadcrumb'}>
        <slot></slot>
      </Host>
    );
  }
}
