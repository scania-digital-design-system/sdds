import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-stepper-item',
  styleUrl: 'stepper-item.scss',
  shadow: true,
})
export class SddsStepper {
  /** Label text for the stepper-item. */
  @Prop() labelText: string = '';

  /** State of the stepper-item */
  @Prop() state: 'current' | 'error' | 'success' | 'upcoming' = 'upcoming';

  /** ALIGN ON THIS DESCRIPTION */
  @Prop() ariaDescribedBy: string;

  /** ALIGN ON THIS DESCRIPTION */
  @Prop() arialabelledBy: string;

  @Prop() hideLabel: boolean;

  @Prop() size: string;

  @Prop() direction: string;

  @Prop() labelPosition: string;

  @Prop() position: string;

  render() {
    return (
      <Host
        aria-describedby={this.ariaDescribedBy}
        aria-labelledby={this.arialabelledBy}
        class={this.position}
      >
        <div
          class={`stepper-item-wrapper ${this.size} ${this.direction} text-${this.labelPosition} ${
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
                <slot></slot>
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
