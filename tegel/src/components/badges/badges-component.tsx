import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'sdds-badges',
  styleUrl: 'badges.scss',
  shadow: true,
})
export class SddsBadges {
  /** Value shown in badge */
  @Prop() value: string | number = 0;

  /** Changes visibility of badge */
  @Prop() isVisible: boolean = true;

  /** !!Deprecated!! Use size prop instead. Changes badge from default to small size */
  @Prop() isSmall: boolean = false;

  /** Component is available in size default and small (small dot). Default size is default */
  @Prop() size: 'default' | 'sm' = 'default';

  @State() pillShape: boolean = false;

  @State() text: string = null;

  @State() innerValue: string = null;

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
      console.warn('Prop isSmall of sdds-badge component is deprecated. Use size "small" instead');
    }
  }

  checkProps() {
    if (this.value === '' && this.size !== 'sm') {
      this.text = '0';
      console.warn('Please assign value to badge component');
    }

    if (typeof this.value === 'number') {
      this.innerValue = this.value.toString();
    } else if (typeof this.value === 'string') {
      this.innerValue = parseInt(this.value).toString();
    } else {
      console.warn('Component can only accepts string or number value');
    }

    if (this.size !== 'sm') {
      this.pillShape = this.innerValue.length >= 2;
      this.text = this.innerValue.length >= 3 ? '99+' : this.innerValue;
    }
  }

  render() {
    return (
      <host class={`sdds-badges sdds-badges-${this.size} ${this.pillShape && 'sdds-badges-pill'} ${!this.isVisible && 'sdds-badges-hidden'}`}>
        <div class="sdds-badges-text">{this.text}</div>
      </host>
    );
  }
}
