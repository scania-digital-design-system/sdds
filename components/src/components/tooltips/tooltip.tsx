import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})

export class Tooltips {
  @Prop() text = 'Hover me'

  render() {
    return (
      <span class={`target`}> hi
        <span class={`tooltips`}>
          {this.text}
        </span>
      </span>
    )
  }
}