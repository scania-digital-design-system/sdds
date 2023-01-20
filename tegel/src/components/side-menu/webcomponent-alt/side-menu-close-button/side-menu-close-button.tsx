import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-close-button',
  styleUrl: 'side-menu-close-button.scss',
  shadow: true,
})
export class SideMenuCloseButton {
  render() {
    return (
      <Host>
        <button aria-label="close">
          <sdds-icon name="cross" size="20px"></sdds-icon>
        </button>
      </Host>
    );
  }
}
