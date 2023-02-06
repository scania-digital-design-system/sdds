import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-radio-button',
  styleUrl: 'radio-button-component.scss',
  shadow: false,
  scoped: true,
})
export class RadioButton {

  /** Name of radio button, used for reference. */
  @Prop() name: string;

  /** Label text connected to radio button. */
  @Prop() label: string;

  /** Value of input. */
  @Prop() value: string;

  /** Label mainly used for accesibility tools. */
  @Prop() ariaLabelledBy: string;

  /** Label mainly used for accesibility tools. */
  @Prop() ariaDescribedBy: string;

  /** Unique radio button identifier. */
  @Prop() radioId: string = crypto.randomUUID();
  
  /** Decides if the radio button is checked or not. */
  @Prop({ reflect: true }) checked: boolean = false;
  
  /** Decides if the radio button is required or not. */
  @Prop() required: boolean = false;
  
  /** Decides if the radio button is disabled or not. */
  @Prop() disabled: boolean = false;

  /** Sends unique radio button identifier and status when it is checked. */
  @Event({
    eventName: 'sddsRadioButtonChangeEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsRadioButtonChangeEvent: EventEmitter<{
    radioId: string;
    value: string;
  }>;

  render() {
    return (
      <div class="sdds-radio-button">
        <input 
        class="sdds-form-input" 
        type="radio" 
        name={this.name}
        id={this.radioId} 
        checked={this.checked} 
        aria-checked={this.checked} 
        aria-labelledby={this.ariaLabelledBy} 
        aria-describedby={this.ariaDescribedBy} 
        required={this.required} 
        disabled={this.disabled}
        onChange={() => {
          this.sddsRadioButtonChangeEvent.emit({
             radioId: this.radioId,
             value: this.value,
          })
        }} />
        <label htmlFor={this.radioId}>
          {this.label}
        </label>
        </div>
    );
  }
}
