import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-radio-button',
  styleUrl: 'radio-button-component.scss',
  shadow: true,
})
export class RadioButton {

  @Prop({ reflect: true }) label: string = '';

  @Prop() value: string = '';
  
  @Prop() checked: boolean = false;
  
  @Prop() required: boolean = false;
  
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <input 
        class="sdds-form-input" 
        type="radio" 
        name="rb-example" 
        id="rb-option-1" 
        value={this.value} 
        checked={this.checked} 
        required={this.required} 
        disabled={this.disabled} />
        <label class="sdds-form-label" htmlFor="rb-option-1">
          {this.label}
        </label>
      </Host>
    );
  }

}
