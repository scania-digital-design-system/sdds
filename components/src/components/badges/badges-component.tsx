import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'sdds-badges',
  styleUrl: 'badges.scss',
  shadow: true,
})
export class SddsBadges {
  @Prop() value: string = '';

  @State() shape: string = '';
  @State() size: string = 'sm';
  @State() text: string = '';

  @Watch('value')
  watchValue() {
    // parse the value to number
    let valueAsNumber = parseInt(this.value);
    if (!isNaN(valueAsNumber)) {
      this.shape = valueAsNumber.toString().length >= 2 ? 'pill' : '';
      this.size = '';
      this.text =
        valueAsNumber.toString().length >= 3 ? '99+' : valueAsNumber.toString();
    } else {
      this.value !== ''
        ? console.warn(
            'The provided value is either empty or string, please provide value as number.'
          )
        : '';
    }
  }
  componentWillLoad() {
    this.watchValue();
  }
  render() {
    return (
      <div
        class={`sdds-badges sdds-badges-${this.size} sdds-badges-${this.shape}`}
      >
        <div class="sdds-badges-text">{this.text}</div>
      </div>
    );
  }
}
