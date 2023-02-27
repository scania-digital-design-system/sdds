import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'sdds-breadcrumb',
  styleUrl: 'sdds-breadcrumb.scss',
  shadow: true,
})
export class SddsBreadcrumb {
  @Element() el: HTMLElement;

  connectedCallback() {
    this.el.children[this.el.children.length - 1].classList.add('sdds-breadcrumb-item-last');
  }

  render() {
    return (
      <nav>
        <ol class={'sdds-breadcrumb'}>
          <slot></slot>
        </ol>
      </nav>
    );
  }
}
