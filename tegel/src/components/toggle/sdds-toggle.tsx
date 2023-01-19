import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-toggle',
  styleUrl: 'sdds-toggle.scss',
  shadow: true,
})
export class SddsToggle {
  /** TODO - Better name for this */
  @Prop({ reflect: true }) checked: boolean = false;

  /** Size of the toggle */
  @Prop() size: 'sm' | 'lg' = 'lg';

  @Prop() name: string;

  /** Label for the toggle */
  @Prop() label: string;

  /** Label for the toggle */
  @Prop() headline: string;

  /** Sets the toggle in a disabled state */
  @Prop() disabled: boolean = false;

  @Prop() toggleId: string = crypto.randomUUID();

  @Element() host: HostElement;

  @Watch('checked')
  updatedCheckedState() {
    if (this.checked) {
      this.host.setAttribute('checked', `${this.checked}`);
    } else {
      this.host.removeAttribute('checked');
    }
  }

  render() {
    return (
      <Host>
        {this.headline && <div class={`toggle-headline`}>{this.headline}</div>}
        <input
          onChange={() => {
            this.checked = !this.checked;
          }}
          class={`${this.size}`}
          checked={this.checked}
          disabled={this.disabled}
          type="checkbox"
          name={this.name}
          id={this.toggleId}
        />
        {this.label && <label htmlFor={this.toggleId}>{this.label}</label>}
      </Host>
    );
  }
}
