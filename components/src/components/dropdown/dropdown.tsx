import {
  Component, h, Prop, State, Element, Listen, Host, Event, EventEmitter
} from '@stencil/core';

@Component({
  tag: 'sdds-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {
  /** Label for dropdown with no selected item */
  @Prop() label:string;

  /** Add the value of the option to set it as default */
  @Prop() defaultOption:string;

   /** Add the value of the option to set it as default */
   @Prop() disabled:boolean;

  /** `default`, `multiselect`, `filter`, `nested` */
  @Prop() type:string = 'default';

  /** `large` (default), `small`, `medium` */
  @Prop() size:string = 'large';
  
  /** Set to true to make the width following the label text length */
  @Prop() inline:boolean = false;

  /** Position of label: `no-label` (default), `inside`, `outside` */
  @Prop() labelPosition:string = 'no-label';

  /** Support `error` state */
  @Prop() state:string = 'default';

  /** Add helper text in the bottom of dropdown */
  @Prop() helper:string = '';

  @State() items: Array<any> = [];
  
  @State() open: boolean = false;

  @State() node: HTMLElement;

  @State() selected:string='';

  @Element() host: HTMLElement;

  @Listen('click', { target: 'document' })
  handleClick(ev) {
    // To stop bubble click
    ev.stopPropagation();
    
    const target = ev ? ev.composedPath()[0] : window.event.target[0];

    if(this.node.contains(target)) {
      this.open = !this.open;
    } else {
      this.open = false;
    }
  }

  @Listen('selectOption')
  selectOptionHandler(event: CustomEvent<any>) {
    console.log(event.detail)
    this.selected = event.detail.label;
    this.open = false;
  }

  @Event({
    eventName: 'inputSearch',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) inputSearch: EventEmitter<any>;

  handleSearch(ev){
    const searchTerm = ev.target.value;
    this.inputSearch.emit(searchTerm);
  }

  render() {
    return (
      <Host class={{
        'is-open': this.open,
        'sdds-dropdown-inline': this.inline,
        'is-selected': this.selected.length > 0,
        'is-error': this.state === 'error'
      }}>
      <div class={`sdds-dropdown sdds-dropdown-${this.size}`}>
        {
          this.labelPosition==='outside' && this.selected.length > 0 ?
          <span class='sdds-dropdown-label-outside'>{this.label}</span> 
          : ''
        }
        <button 
        class={`sdds-dropdown-toggle ${this.type==='filter' ? 'is-filter' : ''}`} 
        type="button" 
        onClick={(ev)=>this.handleClick(ev)} 
        ref={(node) => this.node = node}>
          <div class='sdds-dropdown-label'>
            {
              this.labelPosition==='inside' && this.selected.length > 0 ?
              <span class='sdds-dropdown-label-inside'>{this.label}</span> 
              : ''
            }
            {
              this.type==='filter' ?
              <input class="sdds-dropdown-filter" type="text" placeholder={this.label} value={this.selected} onInput={(event) => this.handleSearch(event)}/>
              :
              <span class="sdds-dropdown-label-main">{
                this.selected.length > 0 ? this.selected : this.label
              }</span>
            }
            
          </div>
          <svg class="sdds-dropdown-arrow" width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </button>
        <div class="sdds-dropdown-menu">
          <slot/>
        </div>
      </div>
      <span class='sdds-dropdown-helper'>{this.helper}</span>
    </Host>
    )
  }
}
