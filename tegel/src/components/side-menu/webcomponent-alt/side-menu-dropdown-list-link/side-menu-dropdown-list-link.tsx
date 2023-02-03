import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-list-link',
  styleUrl: 'side-menu-dropdown-list-link.scss',
  shadow: true,
})
export class SideMenuDropdownListLink {
  @Element() host: HTMLSddsHeaderDropdownV2Element;

  @Prop() href!: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  @Prop() rel: string = 'noopener';

  @Prop() target: string;

  @State() dropdownHasButtonIcon: boolean = false;

  componentDidLoad() {
    const dropdownEl = this.host.closest('sdds-side-menu-dropdown-v2');
    const dropdownBtnIconSlotEl = dropdownEl.shadowRoot.querySelector(
      'slot[name="button-icon"]',
    ) as HTMLSlotElement;
    const btnIconSlottedEls = dropdownBtnIconSlotEl.assignedElements();
    const hasBtnIcon = btnIconSlottedEls?.length > 0;

    if (hasBtnIcon) {
      this.dropdownHasButtonIcon = true;
    }
  }

  render() {
    return (
      <Host role="listitem">
        <a
          part="a"
          class={{ 'state--dropdown-has-button-icon': this.dropdownHasButtonIcon }}
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
