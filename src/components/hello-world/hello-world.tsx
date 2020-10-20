import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'c-hello-world',
  styleUrl: 'hello-world.scss',
  shadow: true,
})
export class HelloWorld {
  @Prop() text: string = 'Hello World';

  render() {
    return (
      <div>
        <h2>{this.text} component</h2>
      </div>
    );
  }
}
