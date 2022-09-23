import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'sdds-badges',
  styleUrl: 'badges.scss',
  shadow: true,
})
export class SddsBadges {
  /** Value shown in badge */
  @Prop() value: string = '';

  /** Changes visibility of badge */
  @Prop() isVisible: boolean = true;

  /** !!Deprecated!! Use size prop instead. Changes badge from default to small size */
  @Prop() isSmall: boolean = false;

  /** Component is available in size default and small (small dot). Default size is default */
  @Prop() size: 'default' | 'sm' = 'default';

  @State() shape: string = '';

  @State() text: string = '';

  @Watch('value')
  @Watch('isVisible')
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
    if (!isNaN(valueAsNumber) && this.size !== 'sm') {
      this.shape = this.value.toString().length >= 2 ? 'pill' : '';
      this.size = 'default';
      this.text =
        valueAsNumber.toString().length >= 3 ? '99+' : valueAsNumber.toString();
    } else {
      this.value !== '' && this.size !== 'sm'
        ? console.warn(
            'The provided value is either empty or string, please provide value as number.'
          )
        : '';
    }
  }

  render() {
    return (
      <host
        class={`sdds-badges sdds-badges-${this.size} ${
          this.shape === 'pill' ? 'sdds-badges-pill' : ''
        } ${this.isVisible ? '' : 'sdds-badges-hidden'}`}
      >
        <div class="sdds-badges-text">{this.text}</div>
      </host>
    );
  }
}
