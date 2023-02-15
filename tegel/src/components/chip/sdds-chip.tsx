import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-chip',
  styleUrl: 'sdds-chip.scss',
  shadow: false,
})
export class SddsChips {
  @Prop() size: 'sm' | 'lg' = 'lg';

  @Prop() icon: string;

  @Prop() iconPosition: 'left' | 'right' = 'left';

  @Prop() active: boolean = false;

  @Prop() type: 'button' | 'checkbox' | 'radio' | 'none' = 'none';

  @Prop() value: string;

  @Prop() name: string;

  @Prop() chipId: string = crypto.randomUUID();

  inputElement;

  /** Event that sends unique table identifier and enable/disable status for sorting functionality */
  @Event({
    eventName: 'sddsClick',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsClick: EventEmitter<{
    chipId: string;
  }>;

  handleClick = () => {
    const sddsClickEvent = this.sddsClick.emit({
      chipId: this.chipId,
    });
    if (!sddsClickEvent.defaultPrevented) {
      this.active = !this.active;
    }
  };

  handleChange = () => {
    this.active = !this.active;
    console.log('Checked:', this.inputElement.checked);
  };

  render() {
    return this.type === 'none' ? (
      <div
        class={`
            sdds-chip-wrapper
            ${this.size}
            ${this.active ? 'active' : ''}
            ${this.icon ? 'icon' : 'no-icon'}
            ${this.iconPosition ? `icon-${this.iconPosition}` : ''}
          `}
      >
        {this.icon && this.iconPosition === 'left' && (
          <sdds-icon size="16px" name={this.icon}></sdds-icon>
        )}
        <slot></slot>
        {this.icon && this.iconPosition === 'right' && (
          <sdds-icon size="16px" name={this.icon}></sdds-icon>
        )}
      </div>
    ) : (
      <div class="sdds-chip-input">
        <input
          class={`${this.active ? 'active' : ''}`}
          ref={(element) => (this.inputElement = element)}
          id={this.chipId}
          type={this.type}
          checked={this.active}
          onChange={() => {
            this.handleChange();
          }}
          onClick={() => {
            if (this.type === 'button') {
              this.handleClick();
            }
          }}
        />
        <label
          class={`
          sdds-chip-checkbox
          ${this.size}
          ${this.active ? 'active' : ''}
          ${this.icon ? 'icon' : 'no-icon'}
          ${this.iconPosition ? `icon-${this.iconPosition}` : ''}
        `}
          htmlFor={this.chipId}
        >
          {this.icon && this.iconPosition === 'left' && (
            <sdds-icon size="16px" name={this.icon}></sdds-icon>
          )}
          <slot></slot>
          {this.icon && this.iconPosition === 'right' && (
            <sdds-icon size="16px" name={this.icon}></sdds-icon>
          )}
        </label>
      </div>
    );
  }
}
