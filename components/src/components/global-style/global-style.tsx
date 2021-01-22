import {
  Component, h, Prop, State, Element, Watch,
} from '@stencil/core';
import store from '../../store';

@Component({
  tag: 'c-global-style',
  styleUrl: 'global-style.scss',
})
export class GlobalStyle {
  /** Per default, this will inherit the value from c-theme name property */
  @Prop({ mutable: true }) theme: string;

  @State() store = store.state;

  @State() tagName: string;

  @State() currentTheme = { components: [] };

  @Element() el: HTMLElement;

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.theme.current;
    this.currentTheme = this.store.theme.items[this.theme];
  }

  componentWillLoad() {
    this.store.theme = store.get('theme');

    store.use({set: (function(value){
      if(value === 'theme') this.theme = store.state.theme.current;
    }).bind(this)});

    this.setTheme(this.theme);

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  render() {
    return this.currentTheme ? <style>{ this.currentTheme.components[this.tagName] }</style> : '';
  }
}
