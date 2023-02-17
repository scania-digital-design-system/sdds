import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'sdds-badges',
  styleUrl: 'badges.scss',
  shadow: true,
})
export class SddsBadges {
  /** Value shown in badge */
  @Prop() value: string = '';
  // TODO: Make upper prop accepts numbers too ?

  /** Changes visibility of badge */
  @Prop() hidden: boolean = false;

  /** @deprecated Use size prop instead. Changes badge from large to small size */
  @Prop() isSmall: boolean = false;

  /** Sets component size. */
  @Prop() size: 'lg' | 'sm' = 'lg';

  @State() shape: string = '';

  @State() text: string = '';

  @Watch('value')
  @Watch('isSmall')
  @Watch('size')
  watchProps() {
    this.checkProps();
  }

  componentWillLoad() {
    this.checkProps();
    if (this.isSmall) {
      this.size = 'sm';
      console.warn('Prop isSmall is deprecated. Use size"small" instead');
    }
  }

  checkProps() {
    const valueAsNumber = parseInt(this.value);
    if (!Number.isNaN(valueAsNumber) && this.size !== 'sm') {
      this.shape = this.value.toString().length >= 2 ? 'pill' : '';
      this.size = 'lg';
      this.text = valueAsNumber.toString().length >= 3 ? '99+' : valueAsNumber.toString();
    } else {
      // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
      this.value !== '' && this.size !== 'sm'
        ? console.warn(
            'The provided value is either empty or string, please provide value as number.',
          )
        : '';
    }
  }

  render() {
    return (
      <host
        class={`sdds-badges sdds-badges-${this.size} ${
          this.shape === 'pill' ? 'sdds-badges-pill' : ''
        } ${this.hidden ? 'sdds-badges-hidden' : ''}`}
      >
        <div class="sdds-badges-text">{this.text}</div>
      </host>
    );
  }
}
