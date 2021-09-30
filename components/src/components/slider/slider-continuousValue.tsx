import { Component, h, Prop, State, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-continousvalue-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class ContinousValueSlider {
  /** Minmum value of input */
  @Prop() min: string = '0';

  /** Maximum value of input */
  @Prop() max: string = '100';

  /** value of input */
  @Prop() value: string = '20';

  @State() rangeProp = {
    '--min': this.min,
    '--max': this.max,
    '--val': this.value,
  };

  /** SpanText hold the value*/
  spantext!: HTMLInputElement;

  /** SliderSpan hold the spantext and triangle*/
  sliderspan!: HTMLInputElement;

  /** inputRange for listening the value*/
  inputRange!: HTMLInputElement;

  // Validate the max, min, value
  @Watch('value')
  watchValue() {
    if (this.value > this.max || this.value < this.min) {
      //console.warn('The provided value should be between min and max');
      this.rangeProp = { ...this.rangeProp, '--val': this.min };
    }
  }

  componentWillLoad() {
    this.watchValue();
  }
  // Handle when plus button clicked
  private onPlusClicked = () => {
    parseInt(this.rangeProp['--val']) < parseInt(this.rangeProp['--max'])
      ? this.updateSlider(this.inputRange.valueAsNumber + 1)
      : '';
  };

  // Handle when minus button clicked
  private onMinusClicked = () => {
    parseInt(this.rangeProp['--val']) > parseInt(this.rangeProp['--min'])
      ? this.updateSlider(this.inputRange.valueAsNumber - 1)
      : '';
  };
  // Update the spanText and input range
  private updateSlider(value: number) {
    // To get the slider value in px
    const newValue = Number(
      ((value - parseInt(this.rangeProp['--min'])) * 100) /
        (parseInt(this.rangeProp['--max']) - parseInt(this.rangeProp['--min']))
    );
    const newPosition = 16 - newValue * 0.47;
    this.spantext.innerHTML = value.toString();
    this.sliderspan.style.left = `calc(${newValue}% + (${newPosition}px))`;

    //Update the input range value
    this.inputRange.value = value.toString();
    this.rangeProp = { ...this.rangeProp, '--val': value.toString() };
  }

  // Listen the input change
  @Listen('input')
  handleChange() {
    this.updateSlider(this.inputRange.valueAsNumber);
  }

  render() {
    return (
      <div style={this.rangeProp} class="container">
        <div
          class="sliderspan"
          ref={(el) => (this.sliderspan = el as HTMLInputElement)}
        >
          <span
            class="spantext"
            ref={(el) => (this.spantext = el as HTMLInputElement)}
          >
            {this.rangeProp['--val']}
          </span>
          <span class="spantrianlge"></span>
        </div>
        <button onClick={this.onMinusClicked} class="minus"></button>
        <input
          min={`${this.rangeProp['--min']}`}
          max={`${this.rangeProp['--max']}`}
          value={`${this.rangeProp['--val']}`}
          ref={(el) => (this.inputRange = el as HTMLInputElement)}
          type="range"
        ></input>
        <button onClick={this.onPlusClicked} class="plus"></button>
      </div>
    );
  }
}
