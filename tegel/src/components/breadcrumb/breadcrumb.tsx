import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'sdds-breadcrumb',
  styleUrl: 'breadcrumb-component.scss',
  shadow: true,
})
export class SddsBreadcrumb {
  @Element() el: HTMLElement;

  connectedCallback() {
    this.el.children[this.el.children.length - 1].classList.add('sdds-breadcrumb-item-last');
  }

  render() {
    return (
      <ul class={'sdds-breadcrumb'}>
        <slot></slot>
      </ul>
    );
  }
}
