import {
  Component, h, Element, Prop, State,
} from '@stencil/core';

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

  @State() currentTheme = { components: [] };

  @State() tagName: string;

  @State() style: Array<CSSStyleSheet>;

  @Element() el: HTMLElement;

  componentWillLoad() {
    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
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
