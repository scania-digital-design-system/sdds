import { Component, Element, h, Host, Prop } from '@stencil/core';
import { inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-launcher-button',
  styleUrl: 'header-launcher-button.scss',
  shadow: true,
})
export class HeaderLauncherButton {
  @Element() host: HTMLElement;

  /** If the button should appear active. Can be used when the button is
   * triggering a dropdown, and the dropdown is open, for example. */
  @Prop() active = false;

  render() {
    const buttonProps = {
      ...inheritAriaAttributes(this.host),
      active: this.active,
    };

    return (
      <Host>
        <sdds-header-button {...buttonProps}>
          <sdds-icon slot="icon" name="bento" size="20px"></sdds-icon>
        </sdds-header-button>
      </Host>
    );
  }
}
