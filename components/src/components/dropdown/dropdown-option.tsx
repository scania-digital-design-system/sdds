import {
    Component, h, Prop, State, Element, Host,
    Event, EventEmitter, Listen
  } from '@stencil/core';
  
  @Component({
    tag: 'sdds-dropdown-option',
    styleUrl: 'dropdown.scss',
    shadow: true,
  })
  export class DropdownOption {
    
    @Element() host: HTMLElement;

    @State() selected:boolean=false;
    @State() optionLabel:string;

    /** Value is a unique string that will be used for application logic */
    @Prop() value:string;    

    @Event({
      eventName: 'selectOption',
      composed: true,
      cancelable: true,
      bubbles: true,
    }) selectOption: EventEmitter<any>;

    componentDidLoad(){
      this.optionLabel = this.host.innerHTML;
    }

    @Listen('click', { target: 'document' })
    handleClick(ev) {
      // To stop bubble click
      ev.stopPropagation();
      console.log('heello')
      const target = ev.target.getAttribute('value');

      if(target !== this.value) this.selected = false;
    }

    selectOptionHandler(value) {
      this.selectOption.emit(value);
      this.selected = true;
    }    
  
    render() {
      return (
        <Host 
        onClick={()=>this.selectOptionHandler({value: this.value, label: this.optionLabel})}
        class={{
          'selected': this.selected
        }}>
          <slot />
        </Host>
      )
    }
  }
  