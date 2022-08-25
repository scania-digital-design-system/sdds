import { Component, Listen, h, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';

@Component({
  tag: 'sdds-popover-canvas',
  styleUrl: 'popovercanvas.scss',
  shadow: true,
})
export class PopoverCanvas {
  popoverCanvasElement!: HTMLInputElement;

  @Prop() selector = '';

  @Prop() show: boolean = false;

  @Prop() placement: Placement = 'right-end';

  @Prop() offsetSkidding: number = 0;

  @Prop() offsetDistance: number = 8;

  @State() target: any;

  @Listen('mousedown', { target: 'window' })
  handleScroll() {
    if (this.show) {
      console.log('hiding canvas because clicked outside');
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

    // For hovering over element with selector
    this.target.addEventListener('mousedown', (event) => {
      event.stopPropagation();

      if (this.show) {
        console.log('hiding canvas because clicking on trigger');
        hideCanvas();
      } else {
        console.log('showing canvas because clicking on trigger');
        showCanvas();
      }
    });

    /*this.target.addEventListener('mouseleave', () => {
      hideCanvas();
    });*/

    this.popoverCanvasElement.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });

    this.popoverCanvasElement.addEventListener('mousedown', (event) => {
      event.stopPropagation();
    });
  }

  render() {
    return (
      <div
        ref={(el) => (this.popoverCanvasElement = el as HTMLInputElement)}
        class={`sdds-popover-canvas ${
          this.show ? 'sdds-popover-canvas-show' : ''
        }`}
      >
        <slot></slot>
      </div>
    );
  }
}
