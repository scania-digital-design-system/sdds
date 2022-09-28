import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  /** Size of spinner. Accepted strings are: xs,sm, md, lg.*/
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' = 'lg';

  /** Mode of spinner. Accepted strings are: standard, inverted*/
  @Prop() mode: 'standard' | 'inverted' = 'standard';

  @State() width: number = 84;

  @State() strokeWidth: number = 8;

  componentWillLoad() {
    switch (this.size) {
      case 'xs':
        this.width = 16;
        this.strokeWidth = 3;
        break;
      case 'sm':
        this.width = 24;
        this.strokeWidth = 4;
        break;
      case 'md':
        this.width = 52;
        this.strokeWidth = 6;
        break;
      case 'lg':
        this.width = 84;
        this.strokeWidth = 8;
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <host>
        <svg class="sdds-spinner-svg" height={this.width} width={this.width}>
          <circle
            class={`sdds-spinner-circle sdds-spinner-circle-${this.size} sdds-spinner-circle-${this.mode}`}
            cx={this.width / 2}
            cy={this.width / 2}
            r={this.width / 2 - this.strokeWidth / 2}
            stroke-width={this.strokeWidth}
            fill="none"
          />
        </svg>
      </host>
    );
  }
}
