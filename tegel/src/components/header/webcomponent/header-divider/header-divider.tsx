import { Component, h } from '@stencil/core';

@Component({
  tag: 'sdds-header-divider',
  styleUrl: 'header-divider.scss',
  shadow: true,
})
export class SddsHeader {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
