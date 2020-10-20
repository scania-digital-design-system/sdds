import { Component, Prop, h, State, Watch, Event, EventEmitter, Element } from '@stencil/core';
import { Header } from './table.model';
import { themeStyle } from '../../helpers/themeStyle';

@Component({
  tag: 'c-table',
  styleUrl: 'table.scss',
  shadow: true
})
export class TableComponent {
  /* Array that is responsible to set which data will show on the table */
  @Prop() header = new Array<Header>();

  /* Array with the content to show on tbody */
  @Prop() content = [];

  /* Sets the class for the table */
  @Prop() tblClass = "";
  
  /* Events to set edit and delete callbacks */
  @Prop() hasEdit: Boolean;
  @Event() optEdit: EventEmitter;
  @Prop() hasDelete: Boolean;
  @Event() optDelete: EventEmitter;

  @State() data = [];
  @State() filteredData = [];
  @State() isArray = true;

  @Prop({ context: 'store' }) ContextStore: any;
  @State() store: any;
  @State() tagName: string;
  @State() theme: string;
  @State() currentTheme = { icons: { }, components: [] };
  @State() style: Array<CSSStyleSheet>;
  @Element() el: any;

  @Watch('content')
  onChangeContent() {
    this.filterContent();
  }

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.getState().theme.current;
    this.currentTheme = this.store.getState().theme.items[this.theme];
  }

  componentWillLoad() {
    if(!Array.isArray(this.content) || !Array.isArray(this.header)) {
        this.isArray = false;
        return;
    }

    this.filterContent();

    this.store = this.ContextStore || (window as any).CorporateUi.store;
    this.theme = this.store.getState().theme.current;
    this.currentTheme = this.store.getState().theme[this.theme];
    this.setTheme(this.theme);

    this.store.subscribe(() => {
      this.setTheme();

      themeStyle(this.currentTheme, this.tagName, this.style, this.el);
    });

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  componentDidLoad() {
    this.style = this.el.shadowRoot['adoptedStyleSheets'] || [];
    
    themeStyle(this.currentTheme, this.tagName, this.style, this.el)
  }

  /* Filter the content that will show on the table */
  private filterContent(): any {
    var props = this.header.map(a => a.key);
    var keys = Object.keys({...this.content[0]});

    /* needs clone the array this way to no mutate the content Prop */
    this.data = this.content.map((item) => Object.assign({}, this.flattenObject(item)));
    
    keys = keys.filter(function(val) {
      return props.indexOf(val) == -1;
    });

    for (const key of keys) { 
      this.data.forEach(function(v){ delete v[key] });
    }
    
    let i = 0;

    this.data.map(function(o){ o.rowIndex = i++; return o; });
    this.filteredData = this.data;
  }

  //

  /* Sort filteredData */
  private sortData(key: string, direction: string) {
    
    /* Needs to reset the Prop to make the changes */
    this.filteredData = [...this.filteredData];

    const input = (this.el.shadowRoot || this.el).getElementById(direction + key);

    /* If clicks on an active button, just remove the active */
    if(input.classList.contains("sort-active")) {
      this.filteredData.sort();
      input.classList.remove("sort-active");
      return;
    }

    if(direction == "asc") {
      this.filteredData.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
    }
    else {
      this.filteredData.sort((a, b) => (a[key] < b[key]) ? 1 : -1);
    }
    
    /* Disable other sort-active class and set the active the current selected */
    let actives = (this.el.shadowRoot || this.el).querySelectorAll(".sort-active");
    [].forEach.call(actives, function(active) {
      active.classList.remove("sort-active");
    });

      input.classList.add("sort-active");
  }

  /* Searches content by column */
  private searchColumn() {
    /* Needs to reset the Prop to make the changes */
    this.filteredData = [...this.data];
        
    const keys = this.header.map(cl => cl.key);
    let items = this.filteredData;
    

    for (const key of keys) {
      const inputId = "search" + key;
      let inputValue = ((this.el.shadowRoot || this.el).getElementById(inputId) as HTMLInputElement).value;
      
      if(inputValue)
      {
        /* Gets all values from column */
        const column = items.map(cl => cl[key])

        /* Filter the values */
        const columnFiltered = column.filter((cl) => this.matchValue(cl, inputValue))
        
        /* Values that should return */
        const arrayFiltered = items.filter(el => columnFiltered.includes(el[key]))
        
        items = []
        
        for (const item of arrayFiltered) {
          items.push(item);
        }
      }
    }

    this.filteredData = items;
  }

  /* Method used to filter content on searchColumn() */
  private matchValue(data, value) {
    if (data) {
      return Object.keys(data).map(() => {
        return new RegExp(value, 'gi').test(data);
      }).some(result => result);
    }
  }


  /* Sets the header of the table */
  private setHeader(): any {
    return <tr>
      { (this.header.map((a) =>
        <th>
          <div class="table-title">
            <div>{a.description}</div>
            <div>
              <div onClick={() => this.sortData(a.key, "desc")}>
                <c-icon class="sort-desc" id={"desc" + a.key} name="scania-angle-down"></c-icon>
              </div>
              <div onClick={() => this.sortData(a.key, "asc")}>
                <c-icon class="sort-asc" id={"asc" + a.key} name="scania-angle-down"></c-icon>
              </div>
            </div>
          </div>
          <div class="input-field">
            <input id={"search" + a.key} onKeyUp={() => this.searchColumn()} type="text" class="form-control" />
            <div id={"icon" + a.key} class="input-icon-filter"></div>
          </div>
        </th>
    ))}
      { this.hasEdit || this.hasDelete
        ? <th></th>
        : null
      }
    </tr>
  }
  
  /* Sets the boby of the table */
  private setbody(): any {
    const keys = this.header.map(a => a.key);

    return (this.filteredData.map((obj) =>
        <tr>
          { keys.map(key => <td>{obj[key]}</td>) }
          { this.setDropDown(obj.rowIndex) }
        </tr>
    ));
  }

  /* Sets the dropdown options - current just exists edit and delete options */
  /* TODO: Create a third option to add custom dropdown items */
  private setDropDown(rowIndex: number): HTMLElement {
    if(this.hasEdit || this.hasDelete)
      return <td class="text-right">
        <c-dropdown buttonType="primary" menuAlignment="dropdown-menu-right">
          <span slot="dropdown-title">Action</span>          
          { this.hasEdit && <a slot="dropdown-item" class="dropdown-item" onClick={ () => this.callbackDropdown("edit", rowIndex) }>Edit</a> }
          { this.hasDelete && <a slot="dropdown-item" class="dropdown-item text-danger" onClick={ () => this.callbackDropdown("delete", rowIndex) }>Delete</a> }
        </c-dropdown>
      </td>
  }
  
  /* Makes the callback for the developer */
  private callbackDropdown(event: string, rowIndex: number)
  {
    let obj = this.content[rowIndex];

    if(event === "edit")
      this.optEdit.emit(obj);

    if(event === "delete")
      this.optDelete.emit(obj);
  }

  /* Flatten objects in order to match it's keys by path */
  /* Eg: { "address": { "city": "Sydney" } } becomes { "address.city": "Sydney" }*/
  private flattenObject(obj) {
    let toReturn = {};

    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;

      if ((typeof obj[i]) == 'object' && obj[i] !== null) {
        var flatObject = this.flattenObject(obj[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = obj[i];
      }
    }
    return toReturn;
  }

  
  //

  render() {
      if(!this.isArray) {
        return <div>
            <h1>Wrong header/content format. Please check documentation on https://digitaldesign.scania.com/components</h1>
        </div>
      }

      return <table class={"table " + this.tblClass }>
          <thead>
            { this.setHeader() }
          </thead>
          <tbody>
            { this.setbody() }
          </tbody>
        </table>
  }
}
