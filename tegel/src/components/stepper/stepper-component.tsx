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
    this.el.children[0].classList.add('first');
    this.el.children[this.el.children.length - 1].classList.add('last');
    if (this.direction === 'vertical') {
      this.textPosition = 'aside';
    }
  }

  render() {
    return (
      <Host>
        <ol
          class={`${this.direction} sdds-stepper-text-position-${this.textPosition} ${this.size}`}
        >
          <slot></slot>
        </ol>
      </Host>
    );
  }
}
