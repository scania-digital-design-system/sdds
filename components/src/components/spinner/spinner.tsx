import { Component, h, Prop } from '@stencil/core';

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

  render() {
    return (
      <div aria-live="assertive" role="status" aria-label="loading">
        <svg
          class={`sdds-spinner-svg sdds-spinner-svg-${this.size}`}
          aria-hidden="true"
        >
          <circle
            class={`sdds-spinner-circle sdds-spinner-circle-${this.mode}`}
          />
        </svg>
      </div>
    );
  }
}
