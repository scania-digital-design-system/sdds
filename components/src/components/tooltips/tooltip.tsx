import { Component, h, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';

@Component({
  tag: 'sdds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})

export class Tooltip {
  @Prop() text = "";
  @Prop() border: string;
  @Prop() selector = "";
  @Prop() hidden: boolean = true;
  @State() target: any;

  tooltip!: HTMLInputElement;
  
  componentDidLoad() {
    this.target = document.querySelector(this.selector);
  
    this.target.addEventListener('mouseenter', () => {
      this.hidden = false;
      // createPopper.setOptions({
      //   modifiers: [{ name: 'eventListeners', enabled: true }],
      // });
    });

    this.target.addEventListener('mouseleave', () => {
      this.hidden = true;
      // createPopper.setOptions({
      //   modifiers: [{ name: 'eventListeners', enabled: false }],
      // });
    });

    const _this = this;

    createPopper(this.target, this.tooltip, {
      placement: 'auto',
      modifiers: [
        {
          name: 'positionCalc',
          enabled: true,
          phase: 'main',
          fn({ state }) {
            if (state.placement === 'top' || state.placement === 'bottom') {
              _this.border = 'default';

            } else if (state.placement === 'top-start' || state.placement === 'left') {
              _this.border = 'bottom-right';

            } else if (state.placement === 'right' || state.placement === 'top-end') {
              _this.border = 'bottom-left';

            } else if (state.placement === 'bottom-end') {
              _this.border = 'top-left';

            } else if (state.placement === 'bottom-start') {
              _this.border = 'top-right';
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
  }
  

 render() {
  return (
    <span ref={(el) => this.tooltip = el as HTMLInputElement} class={`${this.hidden ? 'sdds-tooltip-hidden' : `sdds-tooltip sdds-tooltip-${this.border}`}`}>
      {this.text}
    </span>
  )
}
}

