import { Component, h, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {
  @Prop() text = '';

  @Prop() border: string;

  @Prop() selector = '';

  @Prop() mouseOverTooltip: boolean = false;

  @Prop() show: boolean = false;

  @Prop() placement: Placement = 'bottom';

  @Prop() offsetSkidding: number = 0;

  @Prop() offsetDistance: number = 8;

  @State() target: any;

  tooltip!: HTMLInputElement;

  componentDidLoad() {
    this.target = document.querySelector(this.selector);
    const _this = this;
    createPopper(this.target, this.tooltip, {
      placement: _this.placement,
      modifiers: [
        {
          name: 'positionCalc',
          enabled: true,
          phase: 'main',
          fn({ state }) {
            if (
              state.placement === 'bottom-start' ||
              state.placement === 'right-start'
            ) {
              _this.border = 'top-left';
            } else if (
              state.placement === 'bottom-end' ||
              state.placement === 'left-start'
            ) {
              _this.border = 'top-right';
            } else if (
              state.placement === 'top-end' ||
              state.placement === 'left-end'
            ) {
              _this.border = 'bottom-right';
            } else if (
              state.placement === 'top-start' ||
              state.placement === 'right-end'
            ) {
              _this.border = 'bottom-left';
            } else if (
              state.placement === 'bottom' ||
              state.placement === 'top'
            ) {
              _this.border = 'default';
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
        class={`sdds-tooltip sdds-tooltip-${this.border} ${
          this.show ? 'sdds-tooltip-show' : ''
        }`}
      >
        {this.text}
        <slot />
      </span>
    );
  }
}
