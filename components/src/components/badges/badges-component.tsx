import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'sdds-badges',
  styleUrl: 'badges.scss',
  shadow: true,
})
export class SddsBadges {
  /**Value shown in badge*/
  @Prop() value: string = '';

  /**Changes visibility of badge*/
  @Prop() isVisible: boolean = true;

  /**Changes badge from default to small size*/
  @Prop() isSmall: boolean = false;

  @State() shape: string = '';

  @State() size: string = 'sm';

  @State() text: string = '';

  @State() smallVariation: boolean = false;

  @State() defaultVariation: boolean = true;

  @Watch('value')
  @Watch('isVisible')
  @Watch('isSmall')
  watchProps() {
    this.checkProps();
  }
  componentWillLoad() {
    this.checkProps();
  }

  checkProps() {
    // parse the value to number
    const valueAsNumber = parseInt(this.value);
    if (!isNaN(valueAsNumber) && !this.isSmall) {
      this.shape = valueAsNumber.toString().length >= 2 ? 'pill' : '';

      if (!isNaN(valueAsNumber) && !this.isSmall) {
        this.shape = this.value.toString().length >= 2 ? 'pill' : '';
        this.size = '';
        this.text =
          valueAsNumber.toString().length >= 3
            ? '99+'
            : valueAsNumber.toString();
      } else {
        this.value !== ''
          ? console.warn(
              'The provided value is either empty or string, please provide value as number.'
            )
          : '';
      }
    }
    if (this.isVisible) {
      if (!this.isSmall) {
        this.defaultVariation = true;
        this.smallVariation = false;
      }
      if (this.isSmall) {
        this.defaultVariation = false;
        this.smallVariation = true;
      }
    } else {
      this.defaultVariation = false;
      this.smallVariation = false;
    }
  }

  render() {
    return (
      <host>
        {this.defaultVariation && (
          <div
            class={`sdds-badges sdds-badges-${this.size} sdds-badges-${this.shape}`}
          >
            <div class="sdds-badges-text">{this.text}</div>
          </div>
        )}
        {this.smallVariation && (
          <div class={`sdds-badges sdds-badges-sm`}></div>
        )}
      </host>
    );
  }
}
