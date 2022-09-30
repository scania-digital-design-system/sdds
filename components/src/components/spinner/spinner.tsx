import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-spinner',
  styleUrl: 'spinner.scss',
  shadow: false,
})
export class Spinner {
  /** Size of spinner. Accepted strings are: xs,sm, md, lg.*/
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' = 'lg';

  /** Mode of spinner. Accepted strings are: standard, inverted*/
  @Prop() mode: 'standard' | 'inverted' = 'standard';

  /** ID of spinner. If no ID is passed it will be automatically generated */
  @Prop() spinnerID: string = Math.random().toString(36).substring(2, 7);

  @State() radius: number = 42;

  @State() strokeWidth: number = 8;

  componentDidLoad() {
    const circle = document.getElementById(
      `sdds-spinner-circle-${this.spinnerID}`
    );
    const circleStyle = getComputedStyle(circle);
    this.radius = parseInt(
      circleStyle.getPropertyValue('--sdds-spinner-radius')
    );
    this.strokeWidth = parseInt(
      circleStyle.getPropertyValue('--sdds-spinner-stroke-width')
    );
    console.log(this.spinnerID);
  }

  render() {
    return (
      <svg
        class="sdds-spinner-svg"
        height={this.radius * 2}
        width={this.radius * 2}
      >
        <circle
          id={`sdds-spinner-circle-${this.spinnerID}`}
          class={`sdds-spinner-circle sdds-spinner-circle-${this.size} sdds-spinner-circle-${this.mode}`}
          cx={this.radius}
          cy={this.radius}
          r={this.radius - this.strokeWidth / 2}
          stroke-width={this.strokeWidth}
          fill="none"
        />
      </svg>
    );
  }
}
