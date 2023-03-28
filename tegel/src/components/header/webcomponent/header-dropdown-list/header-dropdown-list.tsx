import { Component, Element, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown-list',
  styleUrl: 'header-dropdown-list.scss',
  shadow: true,
})
export class HeaderDropdownList {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) type: 'lg' | 'md' = 'md';

  componentWillLoad() {
    const { children } = this.el;

    // Set the type prop for each child, if they have such a property
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as any;

      if ('type' in child) {
        child.type = this.type;
      }
    }
  }

  render() {
    return (
      <Host role="list">
        <slot></slot>
      </Host>
    );
  }
}
