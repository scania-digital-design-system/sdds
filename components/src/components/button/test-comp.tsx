import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-btn',
  styleUrl: 'button.scss',
  shadow: true,
})
export class TestComp {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`sdds-btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    )
  }
}