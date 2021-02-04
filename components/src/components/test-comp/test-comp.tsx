import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-comp',
  styleUrl: 'test-comp.scss',
  shadow: true,
})
export class TestComp {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    )
  }

}