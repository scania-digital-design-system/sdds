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
  @Prop() show: boolean = false;
  @State() target: any;

  tooltip!: HTMLInputElement;
  
  componentDidLoad() {
    this.target = document.querySelector(this.selector);

    const _this = this;

    createPopper(this.target, this.tooltip, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'positionCalc',
          enabled: true,
          phase: 'main',
          fn({ state }) {

            if (state.placement === 'bottom-start') {
              _this.border = 'top-left';

            } else if (state.placement === 'bottom-end') {
              _this.border = 'top-right';
              
            } else if (state.placement === 'top-start' || state.placement === 'left') {
              _this.border = 'bottom-right';

            } else if (state.placement === 'right' || state.placement === 'top-end') {
              _this.border = 'bottom-left';

            } else if (state.placement === 'top' || state.placement === 'bottom') {
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
      //TODO fix improve performance in the future, destroy poppers when it's not visible.
      // popperInstance.setOptions({
      //   modifiers: [{ name: 'eventListeners', enabled: true }],
      // });
      // popperInstance.update();
    });

    this.target.addEventListener('mouseleave', () => {
      this.show = false;
      // popperInstance.setOptions({
      //   modifiers: [{ name: 'eventListeners', enabled: false }],
      // });
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

