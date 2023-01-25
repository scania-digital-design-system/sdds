import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-button',
  styleUrl: 'header-launcher-button.scss',
  shadow: true,
})
export class HeaderLauncherButton {
  @Prop() isActive = false;

  render() {
    return (
      <Host>
        <sdds-header-button-v2 isActive={this.isActive}>
          <sdds-icon name="bento" size="20px"></sdds-icon>
        </sdds-header-button-v2>
      </Host>
    );
  }
}
