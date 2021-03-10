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
    // Used as a fallback if value prop is not recognized to match handleClick
    @State() innerValue:string;

    /** Value is a unique string that will be used for application logic */
    @Prop() value:string;    

    @Event({
      eventName: 'selectOption',
      composed: true,
      cancelable: true,
      bubbles: true,
    }) selectOption: EventEmitter<any>;

    componentWillLoad(){
      this.innerValue = this.value;
    }

    @Listen('click', { target: 'document' })
    handleClick(ev) {
      // To stop bubble click
      ev.stopPropagation();
      
      const target = ev.target.getAttribute('value');
      if(target !== this.innerValue) this.selected = false;
    }

    selectOptionHandler(value) {
      this.selectOption.emit(value);
      this.selected = true;
    }    
  
    render() {
      return (
        <Host 
        onClick={()=>this.selectOptionHandler({value: this.value, label: this.host.innerHTML})}
        class={{
          'selected': this.selected
        }}>
          <span class="sdds-option-label"><slot /></span>
          <span class="sdds-option-checkmark">
            <svg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 3L4 6L9 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/>
            </svg>
          </span>
        </Host>
      )
    }
  }
  