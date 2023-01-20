import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-button',
  styleUrl: 'header-launcher-button.scss',
  shadow: true,
})
export class HeaderLauncherButton {
  render() {
    return (
      <Host>
        <sdds-header-button-v2>
          <sdds-icon name="bento" size="20px"></sdds-icon>
        </sdds-header-button-v2>
      </Host>
    );
  }
}
