import { Component, h, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {
  /** In case tooltip contains only text, no HTML, text can be passed by this prop */
  @Prop() text: string = '';

  /** CSS selector of element on which tooltip is used on.  */
  @Prop() selector: string = '';

  /** Allow mouse over tooltip. Useful when tooltip contains clickable elements like link or button. */
  @Prop() mouseOverTooltip: boolean = false;

  /** Prop in control of showing and hiding prop */
  @Prop({ mutable: true }) show: boolean = false;

  /** Placement of tooltip. Possible values: auto, auto-start, auto-end, top, top-start, top-end, bottom, bottom-start, bottom-end, right, right-start, right-end, left, left-start, left-end. */
  @Prop() placement: Placement = 'bottom';

  @State() target: any;

  border: string;

  offsetSkidding: number = 0;

  offsetDistance: number = 8;

  tooltip!: HTMLInputElement;

  componentDidLoad() {
    this.target = document.querySelector(this.selector);
    const thisValue = this;
    createPopper(this.target, this.tooltip, {
      placement: thisValue.placement,
      modifiers: [
        {
          name: 'positionCalc',
          enabled: true,
          phase: 'main',
          fn({ state }) {
            if (state.placement === 'bottom-start' || state.placement === 'right-start') {
              thisValue.border = 'top-left';
            } else if (state.placement === 'bottom-end' || state.placement === 'left-start') {
              thisValue.border = 'top-right';
            } else if (state.placement === 'top-end' || state.placement === 'left-end') {
              thisValue.border = 'bottom-right';
            } else if (state.placement === 'top-start' || state.placement === 'right-end') {
              thisValue.border = 'bottom-left';
            } else if (state.placement === 'bottom' || state.placement === 'top') {
              thisValue.border = 'default';
            }
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

    const showTooltip = () => {
      this.show = true;
    };

    const hideTooltip = () => {
      this.show = false;
    };

    // For tabbing over element
    this.target.addEventListener('focusin', () => {
      showTooltip();
    });

    this.target.addEventListener('focusout', () => {
      hideTooltip();
    });

    // For hovering over element with selector
    this.target.addEventListener('mouseenter', () => {
      showTooltip();
    });

    this.target.addEventListener('mouseleave', () => {
      hideTooltip();
    });

    // For hovering over tooltip itself:
    if (this.mouseOverTooltip === true) {
      this.tooltip.addEventListener('mouseenter', () => {
        showTooltip();
      });

      this.tooltip.addEventListener('mouseleave', () => {
        hideTooltip();
      });
    }
  }

  /* Slot on line 118 is added to support adding HTML elements to component */
  render() {
    return (
      <span
        ref={(el) => (this.tooltip = el as HTMLInputElement)}
        class={`sdds-tooltip sdds-tooltip-${this.border} ${this.show ? 'sdds-tooltip-show' : ''}`}
      >
        {this.text}
        <slot />
      </span>
    );
  }
}
