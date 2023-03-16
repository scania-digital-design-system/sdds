import { Component, Host, h, Prop, Element, State, Method } from '@stencil/core';

@Component({
  tag: 'sdds-stepper-item',
  styleUrl: 'sdds-stepper-item.scss',
  shadow: true,
})
export class SddsStepper {
  /** Label text for the stepper-item. */
  @Prop() labelText: string = '';

  /** State of the stepper-item */
  @Prop() state: 'current' | 'error' | 'success' | 'upcoming' = 'upcoming';

  @State() hideLabel: boolean;

  @State() size: string;

  @State() iconSize: string;

  @State() direction: string;

  @State() labelPosition: string;

  @Element() el: HTMLElement;

  stepperEl: HTMLSddsStepperElement;

  componentWillLoad() {
    this.stepperEl = this.el.closest('sdds-stepper');
    this.direction = this.stepperEl.direction;
    this.labelPosition = this.stepperEl.labelPosition;
    this.size = this.stepperEl.size;
    this.hideLabel = this.stepperEl.hideLabels;
  }

  /** Method to set the width if the stepper item based on its siblings widht, used by the parent element. */
  @Method()
  async setWidth(width) {
    this.el.style.width = `${width}px`;
  }

  render() {
    return (
      <Host>
        <div
          role="listItem"
          class={`${this.size} ${this.direction} text-${this.labelPosition} ${
            this.hideLabel ? 'hide-labels' : ''
          }`}
        >
          <div class={`${this.state} content-container`}>
            {this.state === 'success' || this.state === 'error' ? (
              <sdds-icon
                name={this.state === 'success' ? 'tick' : 'warning'}
                size={this.size === 'lg' ? '20px' : '16px'}
              ></sdds-icon>
            ) : (
              <div class="number sdds-detail-05">
                <slot name="number"></slot>
              </div>
            )}
          </div>
          {!this.hideLabel && (
            <div class={`label ${this.size} ${this.state}`}>{this.labelText}</div>
          )}
        </div>
      </Host>
    );
  }
}
