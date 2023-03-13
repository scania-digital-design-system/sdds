import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-divider',
  styleUrl: 'divider-component.scss',
  shadow: true,
})
export class Divider {
  /** Type of the Divider, horizontal if not specified. */
  @Prop() type: 'horizontal' | 'vertical' = 'horizontal';

  render() {
    return (
      <Host role="separator" aria-orientation={this.type === 'vertical' ? 'vertical' : undefined}>
        <div class={`divider ${this.type}`} />
      </Host>
    );
  }
}
