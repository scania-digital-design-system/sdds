import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-button',
  styleUrl: 'header-launcher-button.scss',
  shadow: true,
})
export class HeaderLauncherButton {
  /** If the button should appear active. Can be used when the button is
   * triggering a dropdown, and the dropdown is open, for example. */
  @Prop() active = false;

  render() {
    return (
      <Host>
        <sdds-header-button active={this.active}>
          <sdds-icon slot="icon" name="bento" size="20px"></sdds-icon>
        </sdds-header-button>
      </Host>
    );
  }
}
