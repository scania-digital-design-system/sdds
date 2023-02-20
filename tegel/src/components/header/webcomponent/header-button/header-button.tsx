import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-button',
  styleUrl: 'header-button.scss',
  shadow: true,
})
export class HeaderButtonAlt {
  @Prop() isActive = false;

  render() {
    return (
      <Host>
        <sdds-core-header-item
          class={{
            'state--active': this.isActive,
          }}
        >
          <button>
            <slot></slot>
          </button>
        </sdds-core-header-item>
      </Host>
    );
  }
}
