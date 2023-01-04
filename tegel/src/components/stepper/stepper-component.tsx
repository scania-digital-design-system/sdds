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

  /** Size of the component and it's children. */
  @Prop() size: 'sm' | 'lg' = 'lg';

  /** Hides the label for the child components if true. */
  @Prop() hideLabels: boolean = false;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.el.children[0].classList.add('sdds-stepper-item-first');
    this.el.children[this.el.children.length - 1].classList.add('sdds-stepper-item-last');
    if (this.direction === 'vertical') {
      this.textPosition = 'aside';
    }
  }

  render() {
    return (
      <Host class={'sdds-stepper'}>
        <ul
          class={`sdds-stepper sdds-stepper-${this.direction} sdds-stepper-text-position-${this.textPosition} sdds-stepper-${this.size}`}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
