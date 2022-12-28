import { Component, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'sdds-stepper-item',
  styleUrl: 'stepper-item.scss',
  shadow: true,
})
export class SddsStepper {
  /** Label text for the stepper-item. */
  @Prop() labelText: string = '';

  /** State of the stepper-item */
  @Prop() state: 'current' | 'error' | 'success' | 'inactive' = 'current';

  /** Content of the stepper-item */
  @Prop() number: number = null;

  @State() size: string;

  @State() iconSize: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    const size = this.el.closest('sdds-stepper').getAttribute('size');
    this.size = size;
    this.iconSize = size === 'lg' ? '20px' : '16px';
  }

  render() {
    return (
      <Host>
        <li class={`sdds-stepper-item sdds-stepper-item-${this.size}`}>
          <div class={`sdds-stepper-content sdds-stepper-item-${this.state}`}>
            {this.number && (this.state === 'current' || this.state === 'inactive') && (
              <div class="stepper-item-number sdds-detail-05">{this.number}</div>
            )}
            {this.state === 'success' && <sdds-icon name="tick" size={this.iconSize}></sdds-icon>}
            {this.state === 'error' && (
              <sdds-icon name={this.state} size={this.iconSize}></sdds-icon>
            )}
          </div>
          <div class={`sdds-detail-05 sdds-stepper-item-label`}>{this.labelText}</div>
        </li>
      </Host>
    );
  }
}
