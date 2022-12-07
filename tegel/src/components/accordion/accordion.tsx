import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  /** Enable or disable divider lines between items */
  @Prop() divider: boolean = true;

  @Prop() modeVariant: 'primary' | 'secondary' = 'primary';

  render() {
    return (
      <Host
        class={`sdds-accordion ${this.divider ? 'sdds-accordion-divider' : ''} ${this.modeVariant}`}
      >
        <slot></slot>
      </Host>
    );
  }
}
