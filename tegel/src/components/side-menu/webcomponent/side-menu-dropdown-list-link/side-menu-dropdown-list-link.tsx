import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import { CollapsedEvent } from '../side-menu';
import { inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-side-menu-dropdown-list-link',
  styleUrl: 'side-menu-dropdown-list-link.scss',
  shadow: true,
})
export class SideMenuDropdownListLink {
  @Element() host: HTMLElement;

  /** If the button should appear selected */
  @Prop() selected: boolean = false;

  /** The link URL. */
  @Prop() href!: string;

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() hreflang: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() rel: HTMLAnchorElement['rel'] = 'noopener';

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() download: HTMLAnchorElement['download'];

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top';

  @State() dropdownHasIcon: boolean = false;

  @State() collapsed: boolean = false;

  sideMenuEl: HTMLSddsSideMenuElement;

  @Listen('sddsSideMenuCollapsed', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<CollapsedEvent>) {
    this.collapsed = event.detail.collapsed;
  }

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
  }

  componentDidLoad() {
    const dropdownEl = this.host.closest('sdds-side-menu-dropdown');
    const dropdownBtnIconSlotEl = dropdownEl.shadowRoot.querySelector(
      'slot[name="button-icon"]',
    ) as HTMLSlotElement;
    const btnIconSlottedEls = dropdownBtnIconSlotEl.assignedElements();
    const hasBtnIcon = btnIconSlottedEls?.length > 0;
    /** Special treatment for user images as per design */
    const btnIconIsUserImage =
      btnIconSlottedEls?.[0]?.tagName.toLowerCase() === 'sdds-side-menu-user-image';

    if (hasBtnIcon && !btnIconIsUserImage) {
      this.dropdownHasIcon = true;
    }
  }

  render() {
    const inheritedLinkProps = {
      ...inheritAriaAttributes(this.host),
    };
    return (
      <Host role="listitem">
        <a
          {...inheritedLinkProps}
          part="a"
          class={{
            'state-dropdown-has-icon': this.dropdownHasIcon,
            'state-collapsed': this.collapsed,
            'state-selected': this.selected,
          }}
          href={this.href}
          hreflang={this.hreflang}
          rel={this.rel}
          download={this.download}
          target={this.target}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }
}
