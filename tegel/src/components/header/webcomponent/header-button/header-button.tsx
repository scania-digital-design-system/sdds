import { Component, Element, h, Host, Prop } from '@stencil/core';
import { inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-button',
  styleUrl: 'header-button.scss',
  shadow: true,
})
export class HeaderButton {
  @Element() host: HTMLElement;

  /** If the button should appear active. Can be used when the button is
   * triggering a dropdown, and the dropdown is open, for example. */
  @Prop() active: boolean = false;

  /** If the button should appear selected. */
  @Prop() selected: boolean = false;

  render() {
    const inheritedButtonProps = {
      ...inheritAriaAttributes(this.host),
    };

    return (
      <Host>
        <sdds-core-header-item
          class={{
            'state-active': this.active,
            'state-selected': this.selected,
          }}
        >
          <button {...inheritedButtonProps}>
            <slot name="icon"></slot>
            <slot></slot>
          </button>
        </sdds-core-header-item>
      </Host>
    );
  }
}
