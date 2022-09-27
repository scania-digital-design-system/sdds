import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  @Prop() size: 'sm' | 'md' | '' = '';

  @Prop() type = '';

  render() {
    return (
      <host>
        <svg class="sdds-spinner-svg">
          <path
            class="sdds-spinner-path"
            d="M120 28.3 m0 -25 a25 25 0 1 0 0 50 a25 25 0 1 0 0 -50"
          />
        </svg>
      </host>
    );
  }
}
