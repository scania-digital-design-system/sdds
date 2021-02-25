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
      <span class={`tooltip`}> Hello, hover me!
        <span class={`tooltiptext`}>
          {this.text}
        </span>
      </span>
    )
  }
}