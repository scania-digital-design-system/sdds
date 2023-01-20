import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-radio-button',
  styleUrl: 'radio-button-component.scss',
  shadow: false,
})
export class RadioButton {

  @Prop({ reflect: true }) label: string = '';

  @Prop() value: string = '';
  
  @Prop() checked: boolean = false;
  
  @Prop() required: boolean = false;
  
  @Prop() disabled: boolean = false;

  @Element() host: HostElement;

  render() {
    return (
      <div class="sdds-radio-button">
        <input 
        class="sdds-form-input" 
        type="radio" 
        name="rb-example" 
        id={crypto.randomUUID()} 
        value={this.value} 
        checked={this.checked} 
        required={this.required} 
        disabled={this.disabled} />
        <label class="sdds-form-label" htmlFor="rb-option-1">
          {this.label}
        </label>
        </div>
    );
  }

}
