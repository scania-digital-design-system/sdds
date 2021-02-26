import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})

export class Tooltips {
  @Prop() text = 'Hover me';
  @Prop() position = "";

  render() {
    return (
        <span class={`sdds-tooltip ${this.position}`}>
          {this.text}
        </span>
    )
  }
}