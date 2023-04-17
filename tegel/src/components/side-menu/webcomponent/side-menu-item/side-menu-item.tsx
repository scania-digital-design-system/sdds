import { Component, h, Host, Element, Listen, Prop, State } from '@stencil/core';
import { CollapsedEvent } from '../side-menu';
import { dfs } from '../../../../utils/utils';

@Component({
  tag: 'sdds-side-menu-item',
  styleUrl: 'side-menu-item.scss',
  shadow: true,
})
export class SddsSideMenuItem {
  @Element() host: HTMLSddsSideMenuItemElement;

  /** If the item should appear selected. */
  @Prop() selected: boolean = false;

  /** If the item should appear active. Can be used when the item is
   * triggering a dropdown, and the dropdown is open, for example. */
  @Prop() active: boolean = false;

  @State() collapsed: boolean = false;

  sideMenuEl: HTMLSddsSideMenuElement;

  slotEl: HTMLSlotElement;

  /**
   * This function is needed because we can't use CSS selectors to style something in the light dom
   */
  updateSlottedSddsIcon() {
    const assignedElements = this.slotEl.assignedElements({ flatten: true });
    const firstSlottedElement = assignedElements[0] as HTMLElement;
    if (firstSlottedElement) {
      const isIconOrSvg = (element) =>
        element.tagName.toLowerCase() === 'sdds-icon' || element.tagName.toLowerCase() === 'svg';

      const iconOrSvg = dfs(firstSlottedElement, isIconOrSvg);
      if (iconOrSvg) {
        iconOrSvg.classList.add('__sdds-side-menu-item-icon');
        if (this.collapsed) {
          iconOrSvg.classList.add('__sdds-side-menu-item-icon-collapsed');
        } else {
          iconOrSvg.classList.remove('__sdds-side-menu-item-icon-collapsed');
        }
      }
    }
  }

  updateSlotted() {
    if (this.slotEl) {
      this.updateSlottedSddsIcon();
    }
  }

  connectedCallback() {
    // closest() will return null if side-menu-item is inside a shadowRoot that
    // does not contain a side-menu. This is the case for the side-menu-dropdown.
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl?.collapsed;
  }

  componentDidLoad() {
    this.slotEl = this.host.shadowRoot.querySelector('slot');
    this.updateSlotted();
    this.slotEl.addEventListener('slotchange', this.updateSlotted);
  }

  @Listen('sddsSideMenuCollapsed', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<CollapsedEvent>) {
    this.collapsed = event.detail.collapsed;
    this.updateSlotted();
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'component': true,
            'component-selected': this.selected,
            'component-active': this.active,
            'component-collapsed': this.collapsed,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
