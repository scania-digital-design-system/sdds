/* eslint-disable no-unused-vars */
import {
  Component, h, Prop, Element, State, Watch,
} from '@stencil/core';
/* eslint-enable no-unused-vars */

// Typescript does not support loading of resources outside of "src"
// So instead of a relative path we do this hack.
import { version } from '@stencil/../../package.json';

import store from '../../store'

@Component({
  tag: 'c-theme',
  styleUrl: 'theme.scss',
})
export class Theme {
  /** Set the brand name that will set the theme styling for the page. */
  @Prop({ mutable: true }) name: string;

  /** By setting this to true bootstrap classes will be accessable globally */
  @Prop() global = false;

  @Element() el: HTMLElement;

  @State() tagName: string;

  @State() currentTheme = { favicons: [], components: [] };

  @State() favicons: string[];

  // Proxy objects are not supported by IE11 (not even with a polyfill), 
  // so we need to use the store.get and store.set methods of the API to support IE11.
  @State() store = store.state;

  @Watch('name')
  setName(name) {
    const newValue = {
      current : name,
      global : store.state.theme.global,
      items : store.state.theme.items
    }
    
    store.set('theme', newValue);
  }
    
  @Watch('global')
  setGlobal(global) {
    const newValue = {
      current : store.state.theme.current,
      global : global,
      items : store.state.theme.items
    }
    store.set('theme', newValue);
  }

  setTheme(name = undefined) {
    this.name = name || this.store.theme.current;
    this.currentTheme = this.store.theme.items[this.name];
    this.favicons = this.currentTheme ? this.currentTheme.favicons : undefined;
  }

  renderFavicon() {
    if (document.head.querySelector('link[rel=icon]')) return;

    const container = document.createElement('div');
    container.innerHTML = this.favicons.join('');

    for (let i = 0; i < container.children.length; i += 1) {
      const node = container.children[i];
      document.head.appendChild(node.cloneNode(true));
    }
  }

  componentWillLoad() {
    this.store.theme = store.get('theme');
    this.store.navigation = store.get('navigation');

    this.setName(this.name);
    this.setGlobal(this.global);
    this.setTheme();

    (window as any).CorporateUi = { ...(window as any).CorporateUi, version };
    document.documentElement.setAttribute('corporate-ui-version', version);

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  render() {
    if(this.currentTheme!==undefined && this.currentTheme['version']!==undefined) {
      document.documentElement.setAttribute(`theme`, `${this.name}-theme v${this.currentTheme['version']}`);
    } else {
      document.documentElement.setAttribute(`theme`,'-')
    }

    if (this.favicons) {
      this.renderFavicon();
    }

    return [
      this.currentTheme ? <style>{ this.currentTheme.components[this.tagName] }</style> : '',
      this.global ? <c-global-style></c-global-style> : <style { ... { innerHTML: 'html body { visibility: visible }' } }></style>,
    ];
  }
}
