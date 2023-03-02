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

  /** Width prop, applicable to the horizontal version */
  @Prop() width?: string;

  /** Height prop, applicable to the vertical version */
  @Prop() height?: string;

  render() {
    let colorClass = '';

    if (this.light) {
      colorClass = 'sdds-theme-light';
    } else if (this.dark) {
      colorClass = 'sdds-theme-dark';
    }

    const separatorProps = {
      'role': 'separator',
      'aria-orientation': this.direction === 'vertical' ? 'vertical' : undefined,
      'class': `sdds-divider ${this.direction} ${colorClass}`,
      'style': {
        width: '1px',
        height: '1px',
      },
    };

    if (this.direction === 'horizontal' && this.width) {
      separatorProps.style.width = this.width;
    } else if (this.direction === 'vertical' && this.height) {
      separatorProps.style.height = this.height;
    }

    const labelProps = {
      'class': 'sdds-divider-label',
      'aria-hidden': true,
    };

    const labelSlot = document.querySelector('[slot="label"]');
    const label = labelSlot && labelSlot.textContent;

    return (
      <Host>
        {label && <span {...labelProps}>{label}</span>}
        {this.direction === 'horizontal' ? <hr {...separatorProps} /> : <div {...separatorProps} />}
      </Host>
    );
  }
}
