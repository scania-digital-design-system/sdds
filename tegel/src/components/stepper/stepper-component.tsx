import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-stepper',
  styleUrl: 'stepper-component.scss',
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

  @Element() host: HostElement;

  children: HTMLSddsStepperItemElement[];

  getPosition(index: number) {
    if (index === 0) {
      return 'first';
    }
    if (index === this.children.length - 1) {
      return 'last';
    }
    return null;
  }

  componentWillLoad() {
    this.children = Array.from(this.host.children) as HTMLSddsStepperItemElement[];
    if (this.direction === 'vertical') {
      this.labelPosition = 'aside';
    }
  }

  render() {
    return (
      <Host>
        <ul
          class={`${this.direction} sdds-stepper-text-position-${this.labelPosition} ${this.size}`}
        >
          {this.children.map((child, index) => (
            <li>
              <sdds-stepper-item
                position={this.getPosition(index)}
                labelText={child.labelText}
                labelPosition={this.labelPosition}
                state={child.state}
                ariaDescribedBy={child.ariaDescribedBy}
                arialabelledBy={child.arialabelledBy}
                hideLabel={this.hideLabels}
                size={this.size}
                direction={this.direction}
                innerHTML={child.innerHTML}
              ></sdds-stepper-item>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
