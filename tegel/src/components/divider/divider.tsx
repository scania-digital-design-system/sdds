import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-divider',
  styleUrl: 'divider-component.scss',
  shadow: true,
})
export class Divider {
  /** Direction of the Divider, horizontal if not specified. */
  @Prop() direction: 'horizontal' | 'vertical' = 'horizontal';

  /** Sets the divider to light version */
  @Prop() light: boolean = false;

  /** Sets the divider to dark version */
  @Prop() dark: boolean = false;

  render() {
    let colorClass = '';

    if (this.light) {
      colorClass = 'sdds-theme-light';
    } else if (this.dark) {
      colorClass = 'sdds-theme-dark';
    }

    return (
      <Host
        role="separator"
        aria-orientation={this.direction === 'vertical' ? 'vertical' : undefined}
        class={`sdds-divider ${this.direction} ${colorClass}`}
      >
        {this.direction === 'horizontal' ? <hr /> : <div />}
      </Host>
    );
  }
}
