import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-chip',
  styleUrl: 'sdds-chip.scss',
  shadow: false,
  scoped: true,
})
export class SddsChips {
  /** Size of the chip */
  @Prop() size: 'sm' | 'lg' = 'lg';

  /** Name of the icon to be displayed in the chip, if null no icon is displayed */
  @Prop() icon: string;

  /** Position of the icon */
  @Prop() iconPosition: 'left' | 'right' = 'left';

  /** Sets the component to an active state. */
  @Prop() active: boolean = false;

  /** Sets the type of input for the chip.
   *  To not have it as an input element,
   *  choose `none`
   */
  @Prop() type: 'button' | 'checkbox' | 'radio' | 'none' = 'none';

  /** (Radio/Checkbox): Value for input element */
  @Prop() value: string;

  /** (Radio/Checkbox): Name for input element */
  @Prop() name: string;

  /** ID for the chip input element. Randomly generated if not specified. */
  @Prop() chipId: string = crypto.randomUUID();

  /** Event for type button that sends unique chip identifier and active state when clicked. */
  @Event({
    eventName: 'sddsClick',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsClick: EventEmitter<{
    chipId: string;
  }>;

  /** Event for type radio/checkbox that sends unique chip identifier and value when selected. For checkbox the event is also broadcasted when the checkbox is unselected. */
  @Event({
    eventName: 'sddsChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsChange: EventEmitter<{
    chipId: string;
    value: string;
    active?: boolean;
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
    if (this.type === 'checkbox') {
      this.active = !this.active;
      this.sddsChange.emit({
        chipId: this.chipId,
        value: this.value,
        active: this.active,
      });
    }
    if (this.type === 'radio') {
      this.sddsChange.emit({
        chipId: this.chipId,
        value: this.value,
      });
    }
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
          name={this.name}
          class={`${this.active ? 'active' : ''}`}
          id={this.chipId}
          type={this.type}
          checked={this.active}
          onClick={() => {
            if (this.type === 'button') {
              this.handleClick();
            }
          }}
          onChange={() => {
            this.handleChange();
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
