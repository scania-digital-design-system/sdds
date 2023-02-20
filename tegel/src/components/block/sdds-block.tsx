import { Component, h, Prop, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-block',
  styleUrl: 'sdds-block.scss',
  shadow: true,
})
export class SddsBlock {
  /** Mode variant of the component, based on current mode. */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  @Element() host: HostElement;

  children: Array<HTMLSddsBlockElement>;

  connectedCallback() {
    this.children = Array.from(this.host.children).filter(
      (item) => item.tagName === 'SDDS-BLOCK',
    ) as HTMLSddsBlockElement[];
    this.children.forEach((item) => {
      if (!this.modeVariant) {
        item.setAttribute('mode-variant', 'secondary');
      } else {
        item.setAttribute('mode-variant', this.modeVariant === 'primary' ? 'secondary' : 'primary');
      }
    });
  }

  render() {
    return (
      <div
        class={`sdds-block-webcomponent ${this.modeVariant !== null ? `sdds-mode-variant-${this.modeVariant}`: ''}`}
      >
        <slot></slot>
      </div>
    );
  }
}
