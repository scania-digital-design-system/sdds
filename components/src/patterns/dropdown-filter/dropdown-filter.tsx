import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-filter',
  styleUrl: 'dropdown-filter.scss',
  shadow: true,
})

export class DropdownFilter {

  /** Label for dropdown with no selected item */
  @Prop() label:string;

  /** Add the value of the option to set it as default */
  @Prop() defaultOption:string;

   /** Add the value of the option to set it as default */
   @Prop() disabled:boolean;

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

  /** Data is an array of objects that contains label and value 
   * `data = [{label:'Option 1', value:'opt-1'},{label:'Option 2', value:'opt-2'}]`
  */
  @Prop() data: string;

  @State() dataOptions = [];
  @State() filteredContent = [];
  @State() searchTerm = '';

  componentWillLoad(){
    this.parseData(this.data);
  }

  @Watch('data')
  parseData(newValue: string) {
    if (newValue) this.dataOptions = JSON.parse(newValue);
    this.filteredContent = this.dataOptions;
  }

  @Listen('inputSearch')
  updateOptionsContent(event: CustomEvent<any>) {
    this.searchTerm = event.detail;
    this.findData();
  }

  findData(){
    const searchAsRegEx = new RegExp(this.searchTerm, 'gmi');
    const newList = this.dataOptions.filter(option => {
      if(option.label) {
        const listItem = option.label.toLowerCase();
        return listItem.match(searchAsRegEx);
      }
    })
    this.filteredContent = newList;
  }

  setOptionsContent(){
    return (this.filteredContent.map((obj) =>
      <sdds-dropdown-option value={obj.value}>{obj.label}</sdds-dropdown-option>
    ))
  }

  render() {
    return (
      <sdds-dropdown 
        size={this.size}
        label={this.label}
        disabled={this.disabled}
        label-position={this.labelPosition}
        helper={this.helper}
        state={this.state}
        type="filter">
          {this.setOptionsContent()}
      </sdds-dropdown>
    )
  }
}