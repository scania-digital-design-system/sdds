import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-filter',
  shadow: true,
})
export class DropdownFilter {
  @State() dataOptions = [];
  @State() filteredContent = [];
  @State() searchTerm = '';
  @State() selectedOption: any;

  /** Placeholder text for dropdown with no selected item */
  @Prop() placeholder: string = '';

  /** Label for dropdown with no selected item */
  @Prop() label: string;

  /** Add the value of the option to set it as default */
  @Prop() defaultOption: string;

  /** Add the value of the option to set it as default */
  @Prop() disabled: boolean;

  /** `large` (default), `small`, `medium` */
  @Prop() size: string = 'large';

  /** Set to true to make the width following the label text length */
  @Prop() inline: boolean = false;

  /** Position of label: `no-label` (default), `inside`, `outside` */
  @Prop() labelPosition: string = 'no-label';

  /** Support `error` state */
  @Prop() state: string = 'default';

  /** Add helper text in the bottom of dropdown */
  @Prop() helper: string = '';

  /** Data is an array of objects that contains label and value
   * `data = [{label:'Option 1', value:'opt-1'},{label:'Option 2', value:'opt-2'}]`
   */
  @Prop() data: string;

  componentWillLoad() {
    this.parseData(this.data);

    if (this.defaultOption) {
      this.selectedOption = this.defaultOption;
    }
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

  @Listen('selectOption')
  selectOptionHandler(event: CustomEvent<any>) {
    this.selectedOption = event.detail.value;

    // Reset list when search is done and user have selected one option
    // To match with animation time for option list to fadeout first
    setTimeout(() => {
      this.filteredContent = this.dataOptions;
    }, 200);
  }

  findData() {
    const searchAsRegEx = new RegExp(this.searchTerm, 'gmi');
    const newList = this.dataOptions.filter((option) => {
      if (option.label) {
        const listItem = option.label.toLowerCase();
        return listItem.match(searchAsRegEx);
      }
    });
    this.filteredContent = newList;
  }

  setOptionsContent() {
    return this.filteredContent.map((obj) => (
      <sdds-dropdown-option
        value={obj.value}
        class={`${this.selectedOption === obj.value ? 'selected' : ''}`}
      >
        {obj.label}
      </sdds-dropdown-option>
    ));
  }

  render() {
    return (
      <sdds-dropdown
        size={this.size}
        label={this.label}
        disabled={this.disabled}
        labelPosition={this.labelPosition}
        helper={this.helper}
        state={this.state}
        placeholder={this.placeholder}
        defaultOption={this.defaultOption}
        type="filter"
      >
        {this.setOptionsContent()}
      </sdds-dropdown>
    );
  }
}
