import { Component, Element, Host, Listen, h, Prop, State } from '@stencil/core';
import { createPopper, Instance } from '@popperjs/core';
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

  @State() renderedShowValue: boolean = false;

  @State() popperInstance: Instance;

  @State() target: any;

  @Listen('mousedown', { target: 'window' })
  handleOutsideClick() {
    if (this.show) {
      this.show = false;
    }
  }

  componentDidLoad() {
    this.target = document.querySelector(this.selector);
    this.renderedShowValue = this.show;

    this.popperInstance = createPopper(this.target, this.popoverMenuElement, {
      strategy: 'fixed',
      placement: this.placement,
      modifiers: [
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

    this.target.addEventListener('mousedown', (event) => {
      event.stopPropagation();

      if (this.show) {
        hideMenu();
      } else {
        showMenu();
      }
    });

    this.popoverMenuElement.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });

    this.popoverMenuElement.addEventListener('mousedown', (event) => {
      event.stopPropagation();
    });
  }

  componentDidRender() {
    if (this.show && !this.renderedShowValue) {
      // Here we update the popper position since its position is wrong
      // before it is rendered.
      this.popperInstance.update();
    }
    this.renderedShowValue = this.show;
  }

  render() {
    return (
      <Host class={`sdds-popover-menu ${this.show ? 'sdds-popover-menu-show' : ''}`}>
        <slot></slot>
      </Host>
    );
  }
}
