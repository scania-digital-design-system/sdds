import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class SddsButton {
  @Prop() text: string;
  @Prop() type: string;
  @Prop() size = "";
  @Prop() disabled: string;
  @Prop() fullbleed: boolean;

  render() {
    return (
      <button class={`sdds-btn sdds-btn-${this.type} sdds-btn-${this.size} ${this.disabled} ${this.fullbleed ? 'sdds-btn-fullbleed' : ''}`}>
          {this.text}
            <slot />
      </button>
    )
  }
}