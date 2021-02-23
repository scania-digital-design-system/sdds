import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})

export class Tooltips {
  @Prop() text = 'Click me'

  render() {
    return (
      <div class={``}>
        <span class={``}>

        </span>
      </div>
    )
  }
}