import { Component, h, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})

export class Tooltip {
  @Prop() text = "";
  @Prop() border: string;
  @Prop() selector = "";
  @Prop() show: boolean = false;
  @Prop() placement: Placement = 'bottom';
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

            if (state.placement === 'bottom-start' || state.placement === 'right-start') {
              _this.border = 'top-left';

            } else if (state.placement === 'bottom-end' || state.placement === 'left-start') {
              _this.border = 'top-right';
              
            } else if (state.placement === 'top-end' || state.placement === 'left-end') {
              _this.border = 'bottom-right';

            } else if (state.placement === 'top-start' || state.placement === 'right-end') {
              _this.border = 'bottom-left';

            } else if (state.placement === 'bottom' || state.placement === 'top') {
              _this.border = 'default';
            }
          }
        },
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    this.target.addEventListener('mouseenter', () => {
      this.show = true;
    });

    this.target.addEventListener('mouseleave', () => {
      this.show = false;
    });
  };
  
 render() {
  return (
    <span ref={(el) => this.tooltip = el as HTMLInputElement} 
    class={`sdds-tooltip sdds-tooltip-${this.border} ${this.show ? 'sdds-tooltip-show' : ''}`}>
    {this.text}
    </span>
  )
}
}

