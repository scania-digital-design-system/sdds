import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-v2',
  styleUrl: 'header-component.scss',
  shadow: true,
})
export class SddsHeader {
  @Element() host: HTMLElement;

  render() {
    return (
      <Host>
        <slot></slot>
        <div class="middle-spacer"></div>
        <slot name="end"></slot>
      </Host>
    );
  }
}
