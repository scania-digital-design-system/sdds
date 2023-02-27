import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement, State } from '@stencil/core/internal';

@Component({
  tag: 'sdds-stepper',
  styleUrl: 'sdds-stepper.scss',
  shadow: true,
})
export class SddsStepper {
  /** The direction the children are layed out. */
  @Prop() direction: 'horizontal' | 'vertical' = 'horizontal';

  /** Text position, only available on direction:horizontal */
  @Prop() labelPosition: 'aside' | 'below' = 'below';

  /** Size of the component and it's children. */
  @Prop() size: 'sm' | 'lg' = 'lg';

  /** Hides the label for the child components if true. */
  @Prop() hideLabels: boolean = false;

  @State() width: number = 0;

  @Element() host: HostElement;

  children: Array<HTMLSddsStepperItemElement>;

  componentWillLoad() {
    this.host.children[0].classList.add('first');
    this.host.children[this.host.children.length - 1].classList.add('last');
    if (this.direction === 'vertical') {
      this.labelPosition = 'aside';
    }
  }

  componentDidLoad() {
    if (this.labelPosition === 'below') {
      this.children = Array.from(this.host.children) as Array<HTMLSddsStepperItemElement>;
      this.children.forEach((item) => {
        if (item.offsetWidth > this.width) {
          this.width = item.offsetWidth;
        }
      });
      this.children.forEach((item) => item.setWidth(this.width));
    }
  }

  render() {
    return (
      <Host>
        <ol
          role="list"
          class={`${this.direction} sdds-stepper-text-position-${this.labelPosition} ${this.size}`}
        >
          <slot></slot>
        </ol>
      </Host>
    );
  }
}
