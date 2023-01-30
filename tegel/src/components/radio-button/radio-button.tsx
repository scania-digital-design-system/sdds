import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-radio-button',
  styleUrl: 'radio-button-component.scss',
  shadow: false,
  scoped: true,
})
export class RadioButton {

  @Prop() name: string;

  @Prop() label: string;

  @Prop() value: string;

  @Prop() ariaLabelledBy: string;

  @Prop() ariaDescribedBy: string;

  @Prop() radioId: string;
  
  @Prop() checked: boolean = false;
  
  @Prop() required: boolean = false;
  
  @Prop() disabled: boolean = false;


  render() {
    return (
      <div class="sdds-radio-button">
        <input 
        class="sdds-form-input" 
        type="radio" 
        name={this.name}
        id={this.radioId} 
        value={this.value} 
        checked={this.checked} 
        aria-checked={this.checked} 
        aria-labelledby={this.ariaLabelledBy} 
        aria-describedby={this.ariaDescribedBy} 
        required={this.required} 
        disabled={this.disabled} />
        <label htmlFor={this.radioId}>
          {this.label}
        </label>
        </div>
    );
  }

  @Listen('input')
  handleChange() {
    console.log('Radio button with id ' + this.radioId + ' is selected');
  }
}
