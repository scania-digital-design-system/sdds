import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-toggle',
  styleUrl: 'sdds-toggle.scss',
  shadow: false,
  scoped: true,
})
export class SddsToggle {
  /** Sets the toggle as checked */
  @Prop() checked: boolean = false;

  /** Make the toggle required */
  @Prop() required: boolean = false;

  /** Aria-describedby for the toggles input element. */
  @Prop() ariaDescribedby: string;

  /** Size of the toggle */
  @Prop() size: 'sm' | 'lg' = 'lg';

  /** Name of the toggles input element */
  @Prop() name: string;

  /** Label for the toggle */
  @Prop() label: string;

  /** Headline for the toggle */
  @Prop() headline: string;

  /** Sets the toggle in a disabled state */
  @Prop() disabled: boolean = false;

  /** ID of the toggles input element, if not specifed it's randomly generated */
  @Prop() toggleId: string = crypto.randomUUID();

  @Element() host: HostElement;

  /** Sends unique toggle identifier and status when it is toggled. */
  @Event({
    eventName: 'sddsToggleChangeEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsToggleChangeEvent: EventEmitter<{
    toggleId: string;
    checked: boolean;
  }>;

  render() {
    return (
      <div class="sdds-toggle-webcomponent">
        {this.headline && <div class={`toggle-headline`}>{this.headline}</div>}
        <input
          aria-describedby={this.ariaDescribedby}
          onChange={() => {
            this.checked = !this.checked;
            this.sddsToggleChangeEvent.emit({
              toggleId: this.toggleId,
              checked: this.checked,
            });
          }}
          class={`${this.size}`}
          checked={this.checked}
          disabled={this.disabled}
          required={this.required}
          type="checkbox"
          name={this.name}
          id={this.toggleId}
        />
        <label htmlFor={this.toggleId}>
          <slot></slot>
        </label>
      </div>
    );
  }
}
