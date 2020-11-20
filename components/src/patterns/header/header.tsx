import {
  Component, h, Prop, State, Element, Watch,
} from '@stencil/core';

import store from '../../store';
// import { themeStyle } from '../../helpers/themeStyle';

@Component({
  tag: 'c-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {
  /** Per default, this will inherit the value from c-theme name property */
  @Prop({ mutable: true }) theme: string;

  /** The site name will be displayed on the right hand side of the logotype on desktop mode */
  @Prop() siteName: string;

  /** A link that will be applied to the site-name */
  @Prop() siteUrl = '/';

  /** Header links that will be placed in the top right part of the header */
  @Prop({ mutable: true }) items: any = [];

  /** Short name will be displayed in the top-centered of the header on mobile mode */
  @Prop() shortName: string;

  /** Variation to header */
  @Prop({ reflect: true }) variation: string;

  @State() store = store.state;

  @State() navigationOpen: Boolean = false;

  @State() tagName: string;

  @State() currentTheme = { components: [] };

  @State() height = 0;

  @State() hasNav: boolean;

  @State() style: Array<CSSStyleSheet>;

  @Element() el: HTMLElement;

  @Watch('items')
  setItems(items) {
    this.items = Array.isArray(items) ? items : JSON.parse(items || '[]');
  }

  // @Watch('theme')
  // setTheme(name = undefined) {
  //   this.theme = name || this.store.theme.current;
  //   this.currentTheme = this.store.theme.items[this.theme];
  //   themeStyle(this.currentTheme, this.tagName, this.style, this.el);
  // }

  toggleNavigation(open) {
    const newValue = {
      open: open,
      expanded: this.store.navigation.expanded
    }
    
    store.set('navigation', newValue);
    
    this.navigationOpen = this.store.navigation.open;
  }

  @Watch('navigationOpen')
  addBodyClass() {
    this.navigationOpen ? document.body.classList.add('nav-show') : document.body.classList.remove('nav-show');
  }

  componentWillLoad() {
    // IE11 does not support stencil store state proxy objects, so these 2 lines are required
    // this.store.theme = store.get('theme');
    this.store.navigation = store.get('navigation');

    store.use({set: (function(value){
      // if(value === 'theme') this.theme = store.state.theme.current;
      if(value === 'navigation') this.navigationOpen = store.state.navigation.open;
    }).bind(this)});

    // this.setTheme(this.theme);
    this.setItems(this.items);

    this.navigationOpen = this.store.navigation.open;

    this.hasNav = !!document.querySelector('c-navigation');

    // To make sure navigation is always hidden from start
    this.toggleNavigation(false);

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  // componentDidLoad() {
  //   this.style = this.el.shadowRoot['adoptedStyleSheets'] || [];

  //   themeStyle(this.currentTheme, this.tagName, this.style, this.el)
  // }

  combineClasses(classes) {
    return [
      ...(classes || '').split(' '),
      ...['nav-item', 'nav-link'],
    ].join(' ');
  }

  render() {
    return [
    <nav class='navbar navbar-expand-lg navbar-default' short-name={this.shortName}>
        {
          this.hasNav
            ? <button
            class='navbar-toggler collapsed'
            type='button'
            onClick={() => this.toggleNavigation(!this.navigationOpen) }>
            <span class='navbar-toggler-icon'></span>
          </button> : ''
        }

        <a href={ this.siteUrl } class='navbar-brand collapse'>
          <slot name="brand-logo" />
        </a>

        <strong class='navbar-title'>{ this.siteName }</strong>

        <div class={`collapse navbar-collapse${this.navigationOpen ? ' show' : ''}`}>
          <nav class='navbar-nav ml-auto'>
            { this.items.map((item: any) => {
              item.class = this.combineClasses(item.class);
              return <a { ...item }></a>;
            }) }

            <slot name="items" />
          </nav>
        </div>
      </nav>,

      <a href={ this.siteUrl } class='navbar-symbol'></a>,
    ];
  }
}
