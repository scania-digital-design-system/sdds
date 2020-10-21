import {
  Component, h, Prop, State, Watch, Element,
} from '@stencil/core';
import { themeStyle } from '../../helpers/themeStyle';

@Component({
  tag: 'c-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  @Prop({ context: 'store' }) ContextStore: any;

  @Prop() name = 'question';

  @State() store: any;

  @State() icon: any;

  @State() tagName: string;

  @State() theme: string;

  @State() currentTheme = { icons: { }, components: [] };

  @State() style: Array<CSSStyleSheet>;

  @Element() el: any;

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.getState().theme.current;
    this.currentTheme = this.store.getState().theme.items[this.theme];

    // If no theme is used then we return;
    if(!name) return;
    // Only setIcons when there is a theme
    this.setIcon();
  }

  @Watch('name')
  setIcon(name = this.name) {

    if(!this.store.getState().theme.items[this.theme]) {
      console.warn('No icons in this packages');
      return;
    }
    const items = this.store.getState().theme.items[this.theme].icons;

    // TODO: We should have the default icon being a simple
    // square instead of first icon in the collection
    this.icon = items[name] || items.question || items[Object.keys(items)[0]] || { width: 0, height: 0 };
  }

  componentWillLoad() {
    this.store = this.ContextStore || (window as any).CorporateUi.store;
    this.theme = this.store.getState().theme.current;
    this.currentTheme = this.store.getState().theme[this.theme];

    this.store.subscribe(() => {
      this.theme = this.store.getState().theme.current;
      this.currentTheme = this.store.getState().theme[this.theme];

      themeStyle(this.currentTheme, this.tagName, this.style, this.el);
    });

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  componentDidLoad() {
    this.style = this.el.shadowRoot['adoptedStyleSheets'] || [];

    themeStyle(this.currentTheme, this.tagName, this.style, this.el)
  }

  render() {
    return [
      <svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${this.icon ? this.icon.width : '0'} ${this.icon ? this.icon.height : '0'}`}>
        <path fill='currentColor' d={this.icon ? this.icon.definition : ''} />
      </svg>,
    ];
  }
}
