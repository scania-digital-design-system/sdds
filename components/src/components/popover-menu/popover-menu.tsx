import { Component, Element, Host, Listen, h, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';

@Component({
  tag: 'sdds-popover-menu',
  styleUrl: 'popover-menu.scss',
  shadow: true,
})
export class PopoverMenu {
  @Element() popoverMenuElement!: HTMLElement;

  /** The CSS-selector that will trigger this Popover Menu */
  @Prop() selector: string = '';

  /** Decides if the Popover Menu should be visible from the start */
  @Prop() show: boolean = false;

  /** Decides the placement of the Popover Menu */
  @Prop() placement: Placement = 'auto';

  /** Sets the offset skidding */
  @Prop() offsetSkidding: number = 0;

  /** Sets the offset distance */
  @Prop() offsetDistance: number = 8;

  @State() target: any;

  @Listen('mousedown', { target: 'window' })
  handleOutsideClick() {
    if (this.show) {
      this.show = false;
    }
  }

  componentDidLoad() {
    this.target = document.querySelector(this.selector);
    const _this = this;
    createPopper(this.target, this.popoverMenuElement, {
      placement: _this.placement,
      strategy: 'fixed',
      modifiers: [
        {
          name: 'positionCalc',
          enabled: true,
          phase: 'main',
          fn({}) {},
        },
        {
          name: 'offset',
          options: {
            offset: [this.offsetSkidding, this.offsetDistance],
          },
        },
      ],
    });

    const showMenu = () => {
      this.show = true;
    };

    const hideMenu = () => {
      this.show = false;
    };

    this.target.addEventListener('mousedown', event => {
      event.stopPropagation();

      if (this.show) {
        hideMenu();
      } else {
        showMenu();
      }
    });

    this.popoverMenuElement.addEventListener('mousemove', event => {
      event.stopPropagation();
    });

    this.popoverMenuElement.addEventListener('mousedown', event => {
      event.stopPropagation();
    });
  }

  render() {
    return (
      <Host class={`sdds-popover-menu ${this.show ? 'sdds-popover-menu-show' : ''}`}>
        {/* TODO - Investigate whether or not this could be webcomponents (popover-menu-item) */}
        <slot></slot>
      </Host>
    );
  }
}
