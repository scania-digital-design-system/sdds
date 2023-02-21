import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-button',
  styleUrl: 'header-launcher-button.scss',
  shadow: true,
})
export class HeaderLauncherButton {
  @Prop() active = false;

  render() {
    return (
      <Host>
        <sdds-header-button active={this.active}>
          <sdds-icon name="bento" size="20px"></sdds-icon>
        </sdds-header-button>
      </Host>
    );
  }
}
