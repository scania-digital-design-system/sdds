import {
  Component,
  Host,
  Element,
  Listen,
  h,
  Prop,
  State,
} from '@stencil/core';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';

@Component({
  tag: 'sdds-popover-canvas',
  styleUrl: 'popover-canvas.scss',
  shadow: true,
})
export class PopoverCanvas {
  @Element() popoverCanvasElement!: HTMLElement;

  /** The CSS-selector that will trigger this Popover Canvas */
  @Prop() selector = '';

  /** Decides if the Popover Canvas should be visible from the start */
  @Prop() show: boolean = false;

  /** Decides the placement of the Popover Canvas */
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
    createPopper(this.target, this.popoverCanvasElement, {
      placement: _this.placement,
      modifiers: [
        {
          name: 'positionCalc',
          enabled: true,
          phase: 'main',
          fn({ state }) {
            console.log('popover fn', state);
          },
        },
        {
          name: 'offset',
          options: {
            offset: [this.offsetSkidding, this.offsetDistance],
          },
        },
      ],
    });

    const showCanvas = () => {
      this.show = true;
    };

    const hideCanvas = () => {
      this.show = false;
    };

    this.target.addEventListener('mousedown', (event) => {
      event.stopPropagation();

      if (this.show) {
        hideCanvas();
      } else {
        showCanvas();
      }
    });

    this.popoverCanvasElement.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });

    this.popoverCanvasElement.addEventListener('mousedown', (event) => {
      event.stopPropagation();
    });
  }

  render() {
    return (
      <Host
        class={`sdds-popover-canvas ${
          this.show ? 'sdds-popover-canvas-show' : ''
        }`}
      >
        <slot></slot>
      </Host>
    );
  }
}
