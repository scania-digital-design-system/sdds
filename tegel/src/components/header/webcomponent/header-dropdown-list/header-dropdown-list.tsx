import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import {
  getPreviousNestedChildOfSiblingsMatching,
  isHeadingElement,
} from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-dropdown-list',
  styleUrl: 'header-dropdown-list.scss',
  shadow: true,
})
export class HeaderDropdownList {
  @Element() host: HTMLElement;

  // A Map to store the slots and their associated slotchange listeners.
  private slotListeners: Map<HTMLSlotElement, EventListener> = new Map();

  @Prop({ reflect: true }) type: 'lg' | 'md' = 'md';

  @State() headingElement: HTMLElement;

  componentWillLoad() {
    const { children } = this.host;

    // Set the type prop for each child, if they have such a property
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as any;

      if ('type' in child) {
        child.type = this.type;
      }
    }

    let listRoot = this.host;
    if (this.host.parentElement.tagName.toLowerCase() === 'sdds-header-launcher-list') {
      listRoot = this.host.parentElement;
    }

    const headingEl = getPreviousNestedChildOfSiblingsMatching(listRoot, isHeadingElement);

    if (headingEl) {
      this.headingElement = headingEl;
    } else {
      console.warn('Heading element for list not found');
    }
  }

  componentDidLoad() {
    this.host.shadowRoot.querySelectorAll('slot').forEach((slot: HTMLSlotElement) => {
      // Add the slotchange event listener.
      const onSlotChange: EventListener = (e: Event) => {
        this.processAssignedElements(e.target as HTMLSlotElement);
      };

      slot.addEventListener('slotchange', onSlotChange);

      onSlotChange({ target: slot } as unknown as Event);

      // Store the slot and its listener in the Map.
      this.slotListeners.set(slot, onSlotChange);
    });
  }

  processAssignedElements(slot: HTMLSlotElement): void {
    const nodes: Element[] = slot.assignedElements();
    nodes.forEach((node: Element) => {
      // Add a listitem role to the assigned element if needed.
      if (
        node.tagName.toLowerCase() !== 'li' &&
        node.tagName.toLowerCase() !== 'slot' &&
        node.getAttribute('role') !== 'listitem'
      ) {
        node.setAttribute('role', 'listitem');
      }

      // If the assigned element is a slot, process its assigned elements recursively.
      if (node.tagName.toLowerCase() === 'slot') {
        this.processAssignedElements(node as HTMLSlotElement);
      }
    });
  }

  disconnectedCallback() {
    this.slotListeners.forEach((listener: EventListener, slot: HTMLSlotElement) => {
      // Remove the slotchange event listener and delete the entry from the Map.
      slot.removeEventListener('slotchange', listener);
      this.slotListeners.delete(slot);
    });
  }

  render() {
    const attributes = {
      'role': 'list',
      'aria-labelledby': this.headingElement?.id,
    };

    return (
      <Host {...attributes}>
        <slot></slot>
      </Host>
    );
  }
}
