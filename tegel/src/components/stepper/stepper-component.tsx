import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-stepper',
  styleUrl: 'stepper-component.scss',
  shadow: true,
})
export class SddsStepper {
  /** The direction the children are layed out. */
  @Prop() direction: 'horizontal' | 'vertical' = 'horizontal';

  /** Text position, only available on direction:horizontal */
  @Prop() textPosition: 'aside' | 'below' = 'below';

  /** */
  @Prop() size: 'sm' | 'lg' = 'lg';

  @Element() el: HTMLElement;

  componentWillLoad() {
    for (let i = 0; i < this.el.children.length; i++) {
      this.el.children[i].classList.add(`sdds-stepper-item-${this.direction}`);
      this.el.children[i].classList.add(`sdds-stepper-item-text-position-${this.textPosition}`);
      this.el.children[i].classList.add(`sdds-stepper-item-${this.size}`);
    }
    this.el.children[0].classList.add('sdds-stepper-item-first');
    this.el.children[this.el.children.length - 1].classList.add('sdds-stepper-item-last');
  }

  render() {
    return (
      <Host class={'sdds-stepper'}>
        <div
          class={`sdds-stepper sdds-stepper-${this.direction} sdds-stepper-text-position-${this.textPosition} sdds-stepper-${this.size}`}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
