import {
  Component, h, Prop, State, Element, Watch,
} from '@stencil/core';

@Component({
  tag: 'c-global-style',
  styleUrl: 'global-style.scss',
})
export class GlobalStyle {
  @Prop({ context: 'store' }) ContextStore: any;

  /** Per default, this will inherit the value from c-theme name property */
  @Prop({ mutable: true }) theme: string;

  @State() store: any;

  @State() tagName: string;

  @State() currentTheme = { components: [] };

  @Element() el: HTMLElement;

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.getState().theme.current;
    this.currentTheme = this.store.getState().theme.items[this.theme];
  }

  async loadLibs() {
    const jquery = await import('jquery');
    window['CorporateUi'].$ = jquery.default;
    await import('bootstrap');

    const event = new CustomEvent('bsReady', { detail: { jquery: jquery.default } });
    document.dispatchEvent(event);
  }

  componentWillLoad() {
    this.loadLibs();

    this.store = this.ContextStore || (window as any).CorporateUi.store;

    this.setTheme(this.theme);

    this.store.subscribe(() => this.setTheme());

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  render() {
    return this.currentTheme ? <style>{ this.currentTheme.components[this.tagName] }</style> : '';
  }
}
