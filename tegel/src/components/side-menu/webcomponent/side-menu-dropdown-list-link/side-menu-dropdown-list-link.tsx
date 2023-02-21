import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-list-link',
  styleUrl: 'side-menu-dropdown-list-link.scss',
  shadow: true,
})
export class SideMenuDropdownListLink {
  @Element() host: HTMLSddsSideMenuButtonElement;

  /** Gives the appearance of a selected button */
  @Prop() selected: boolean = false;

  @Prop() href!: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  @Prop() rel: string = 'noopener';

  @Prop() target: string;

  @State() dropdownHasIcon: boolean = false;

  @State() collapsed: boolean = false;

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
  }

  @Listen('tegelCollapsedSideMenu', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
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
    return (
      <Host role="listitem">
        <a
          part="a"
          class={{
            'state--dropdown-has-icon': this.dropdownHasIcon,
            'state--collapsed': this.collapsed,
            'state--selected': this.selected,
          }}
          href={this.href}
          rel={this.rel}
          target={this.target}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }
}
