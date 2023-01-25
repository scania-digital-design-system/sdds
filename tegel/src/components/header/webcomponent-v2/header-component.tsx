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
        <nav class="nav-content">
          <div class="header-left">
            <slot></slot>
          </div>
          <div class="header-right">
            <slot name="end"></slot>
          </div>
        </nav>
      </Host>
    );
  }
}
