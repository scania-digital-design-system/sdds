import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  @Prop() size = '';
  @Prop() type = '';

  @State() cubes = 9;
  @State() rects = 5;

  renderElements(num, className) {
    let elems = [];
    for (let i = 1; i <= num; i++) {
      elems.push(<div class={className + i}></div>);
    }
    return elems;
  }

  render() {
    return (
      <div
        class={`sdds-spinner-${this.type} sdds-spinner-${this.type}-${
          this.size == 'sm' || this.size == 'md' ? this.size : ''
        } `}
      >
        {this.type === 'cube' && this.renderElements(this.cubes, 'cube')}
        {this.type === 'linear' && this.renderElements(this.rects, 'rect')}
      </div>
    );
  }
}
