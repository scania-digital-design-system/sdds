import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-block',
  styleUrl: 'sdds-block.scss',
  shadow: false,
})
export class SddsBlock {
  /** Mode variant of the component, based on current mode. */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  render() {
    return (
      <div class={`sdds-block-webcomponent sdds-block-${this.modeVariant}`}>
        <slot></slot>
      </div>
    );
  }
}
