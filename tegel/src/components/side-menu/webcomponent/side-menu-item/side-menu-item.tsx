import { Component, h, Host, Element, Listen, Prop, State } from '@stencil/core';
import { CollapseEvent } from '../side-menu';
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

  private sideMenuEl: HTMLSddsSideMenuElement;

  private slotEl: HTMLSlotElement;

  updateSlotted(
    searchPredicate: (element: HTMLElement) => boolean,
    mutationCallback: (element: HTMLElement) => void,
  ) {
    const assignedElements = this.slotEl.assignedElements({ flatten: true });
    const firstSlottedElement = assignedElements[0] as HTMLElement;
    if (firstSlottedElement) {
      const foundElement = dfs(firstSlottedElement, searchPredicate);
      if (foundElement) {
        mutationCallback(foundElement);
      }
    }
  }

  /**
   * This function is needed because we can't use CSS selectors to style something in the light dom
   */
  updateSlottedElements() {
    if (this.slotEl) {
      const isIconOrSvg = (element) =>
        element.tagName.toLowerCase() === 'sdds-icon' || element.tagName.toLowerCase() === 'svg';
      const addIconClass = (element) => {
        element.classList.add('__sdds-side-menu-item-icon');
        if (this.collapsed) {
          element.classList.add('__sdds-side-menu-item-icon-collapsed');
        } else {
          element.classList.remove('__sdds-side-menu-item-icon-collapsed');
        }
      };
      this.updateSlotted(isIconOrSvg, addIconClass);
    }
  }

  connectedCallback() {
    // closest() will return null if side-menu-item is inside a shadowRoot that
    // does not contain a side-menu. This is the case for the side-menu-dropdown.
    this.sideMenuEl = this.host.closest('sdds-side-menu');
  }

  componentDidLoad() {
    this.slotEl = this.host.shadowRoot.querySelector('slot');
    this.updateSlottedElements();
    this.slotEl.addEventListener('slotchange', this.updateSlottedElements);
  }

  @Listen('internalSddsSideMenuPropChange', { target: 'body' })
  collapseSideMenuEventHandler(event: CustomEvent<CollapseEvent>) {
    this.collapsed = event.detail.collapsed;
    this.updateSlottedElements();
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
