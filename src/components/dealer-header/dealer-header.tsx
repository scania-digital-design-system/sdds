import {
  Component, h, Element, Prop, State, Watch,
} from '@stencil/core';
import { themeStyle } from '../../helpers/themeStyle';

@Component({
  tag: 'c-dealer-header',
  styleUrl: 'dealer-header.scss',
  shadow: true,
})
export class DealerHeader {
  /** Dealer name */
  @Prop() siteName: string;

  /** A placeholder for dealer logo image */
  @Prop() logo: string;

  /** Short name that will appear in smaller screen size */
  @Prop() shortName: string;

  /** A link that will be applied to the site-name */
  @Prop() siteUrl: string = '/';

  @Prop({ mutable: true }) theme: string;

  @Prop({ context: 'store' }) ContextStore: any;

  @State() currentTheme = { components: [] };

  @State() store: any;

  @State() tagName: string;

  @State() style: Array<CSSStyleSheet>;

  @Element() el: HTMLElement;

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.getState().theme.current;
    this.currentTheme = this.store.getState().theme.items[this.theme];
  }

  componentWillLoad() {
    this.store = this.ContextStore || (window as any).CorporateUi.store;

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

  render() {
    return [
      <c-header site-name={this.siteName} short-name={this.shortName} site-url={this.siteUrl} variation='dealer'>
        {this.logo
          ? <img src={this.logo} alt={this.siteName} slot='brand-logo'/>
          : <strong class='navbar-title' slot='brand-logo'>{ this.siteName }</strong>
        }
        <slot name='items' slot='items' />
      </c-header>,
    ];
  }
}
