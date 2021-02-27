import {
  Component, h, Prop, State, Element, Listen, Host
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

  /** `default`, `multiselect`, `filter`, `nested` */
  @Prop() types:string = 'default';

  /** `large` (default), `small`, `medium` */
  @Prop() size:string = 'large';
  
  /** Set to true to make the width following the label text length */
  @Prop() inline:boolean = false;

  /** Position of label: `no-label` (default), `inside`, `outside` */
  @Prop() labelPosition:string = 'no-label';

  /** Support `error` state */
  @Prop() state:string = 'default'

  @State() items: Array<any> = [];
  
  @State() open: boolean = false;

  @Element() el;

  @State() node: HTMLElement;

  @State() selected:string='';

  @Listen('click', { target: 'window' })
  handleClick(ev) {
    // To stop bubble click
    ev.stopPropagation();
    const target = ev ? ev.composedPath()[0] : window.event.target[0];

    if(this.node === target || target.getAttribute('slot') === 'sdds-dropdown-label') {
      this.open = !this.open;
    } else {
      // Click on window, always close dropdown
      this.open = false;
    } 
  }

  @Listen('selectOption')
  selectOptionHandler(event: CustomEvent<any>) {
    this.selected = event.detail.label;
  }

  render() {
    return (
      <Host class={{
        'is-open': this.open,
        'sdds-dropdown-inline': this.inline
      }}>
      <div class={`sdds-dropdown`}>
        <button 
        class={`sdds-dropdown-toggle`} 
        type="button" 
        onClick={(ev)=>this.handleClick(ev)} 
        ref={(node) => this.node = node}>
          <span class="sdds-dropdown-label">{
            this.selected.length > 0 ? this.selected : this.label
          }</span>
        </button>
        <div class="sdds-dropdown-menu">
          <slot/>
        </div>
      </div>
    </Host>
    )
  }
}
