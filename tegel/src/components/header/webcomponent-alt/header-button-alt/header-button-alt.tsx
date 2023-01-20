import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-button-v2',
  styleUrl: 'header-button-alt.scss',
  shadow: true,
})
export class HeaderButtonAlt {
  @Prop({ reflect: true }) persistent: boolean;

  render() {
    return (
      <Host>
        <sdds-core-header-item>
          <button>
            <slot></slot>
          </button>
        </sdds-core-header-item>
      </Host>
    );
  }
}
