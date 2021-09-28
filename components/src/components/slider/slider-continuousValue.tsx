import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-continousvalue-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class ContinousValueSlider {
  @Prop() rangeStyle;

  spantext!: HTMLInputElement;
  sliderspan!: HTMLInputElement;
  leftRangeInputEl!: HTMLInputElement;

  private handleOnClickPlus = () => {
    parseInt(this.rangeStyle['--val']) < parseInt(this.rangeStyle['--max'])
      ? this.updateValue(this.leftRangeInputEl.valueAsNumber + 1)
      : '';
  };

  private handleOnClickMinus = () => {
    console.log('Inside sldier');
    parseInt(this.rangeStyle['--val']) > parseInt(this.rangeStyle['--min'])
      ? this.updateValue(this.leftRangeInputEl.valueAsNumber - 1)
      : '';
  };

  private updateValue(value: number) {
    const newValue = Number(
      ((value - parseInt(this.rangeStyle['--min'])) * 100) /
        (parseInt(this.rangeStyle['--max']) -
          parseInt(this.rangeStyle['--min']))
    );
    const newPosition = 16 - newValue * 0.47;
    this.spantext.innerHTML = value.toString();
    this.sliderspan.style.left = `calc(${newValue}% + (${newPosition}px))`;
    this.leftRangeInputEl.value = value.toString();
    this.rangeStyle = { ...this.rangeStyle, '--val': value.toString() };
  }

  render() {
    <div>
      <div
        class="sliderspan"
        ref={(el) => (this.sliderspan = el as HTMLInputElement)}
      >
        <span
          class="spantext"
          ref={(el) => (this.spantext = el as HTMLInputElement)}
        >
          {this.rangeStyle['--val']}
        </span>
        <span class="spantrianlge"></span>
      </div>
      <button onClick={this.handleOnClickMinus}>
        {' '}
        <span>-</span>{' '}
      </button>
      <input
        min={`${this.rangeStyle['--min']}`}
        max={`${this.rangeStyle['--max']}`}
        value={`${this.rangeStyle['--val']}`}
        ref={(el) => (this.leftRangeInputEl = el as HTMLInputElement)}
        type="range"
      ></input>
      <button onClick={this.handleOnClickPlus}>
        {' '}
        <span>+</span>{' '}
      </button>
    </div>;
  }
}
