import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-divider',
  styleUrl: 'divider-component.scss',
  shadow: true,
})
export class Divider {
  /** Direction of the Divider, horizontal if not specified. */
  @Prop() direction: 'horizontal' | 'vertical' = 'horizontal';

  /** Color of the Divider, light if not specified. */
  @Prop() type: 'light' | 'dark' = 'light';

  render() {
    return (
      <Host
        role="separator"
        aria-orientation={this.direction === 'vertical' ? 'vertical' : undefined}
        class={`sdds-divider sdds-divider-${this.type} ${this.direction}`}
      >
        {this.direction === 'horizontal' ? <hr /> : <div />}
      </Host>
    );
  }
}
