import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  /** Enable or disable divider lines between items */
  @Prop() divider: boolean = true;

  render() {
    return (
      <div
        class={`sdds-accordion ${this.divider ? 'sdds-accordion-divider' : ''}`}
      >
        <slot></slot>
      </div>
    );
  }
}
