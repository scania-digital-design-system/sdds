import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})

export class Tooltip {
  @Prop() text = "";
  @Prop() border: string;

  render() {
    return (

      <span class={`sdds-tooltip sdds-tooltip-${this.border}`}  >
        {this.text}
      </span>  
  
    )
  }
}