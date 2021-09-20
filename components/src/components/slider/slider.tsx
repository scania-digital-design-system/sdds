import { Component, h, State, Listen, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class Slider {
  @Prop() type: string;
  @Prop() min: string = '0';
  @Prop() max: string = '100';
  @Prop() value: string = '20';
  @Prop() valueTwo: string = '70';

  spantext!: HTMLInputElement;
  sliderspan!: HTMLInputElement;
  leftRangeInputEl!: HTMLInputElement;
  rightRangeInputEl!: HTMLInputElement;

  leftInputTextRef!: HTMLInputElement;
  rightInputTextRef!: HTMLInputElement;

  @State() leftRangeOldValue: string;
  @State() rightRangeOldValue: string;
  @State() minDiffValue: number = 10;
  @State() rangeStyle = {
    '--min': this.min,
    '--max': this.max,
    '--val': this.value
  };

  @State() secondRangeStyle = {
    '--min': this.min,
    '--max': this.max,
    '--val': this.valueTwo
  };
  @Watch('value')
  watchValue() {
    if (this.value > this.max || this.value < this.min) {
      //console.warn('The provided value should be between min and max');
      this.rangeStyle = { ...this.rangeStyle, '--val': this.min };
    }
  }
  @Watch('valueTwo')
  watchValueTwo() {
    if (this.valueTwo > this.max || this.valueTwo < this.value) {
      /*      console.warn(
        'The provided value should be greater than value and less than max'
      ); */
      this.secondRangeStyle = { ...this.secondRangeStyle, '--val': this.max };
    }
  }
  componentWillLoad() {
    this.watchValue();
    this.watchValueTwo();
  }
  private handleOnClickPlus = () => {
    parseInt(this.rangeStyle['--val']) < parseInt(this.rangeStyle['--max'])
      ? this.updateValue(this.leftRangeInputEl.valueAsNumber + 1)
      : '';
  };

  private handleOnClickMinus = () => {
    parseInt(this.rangeStyle['--val']) > parseInt(this.rangeStyle['--min'])
      ? this.updateValue(this.leftRangeInputEl.valueAsNumber - 1)
      : '';
  };

  private handleOnChangeLeft = (event) => {
    this.onInputTextChange(event.target.value, this.leftInputTextRef, true);
  };

  private handleOnChangeRight = (event) => {
    this.onInputTextChange(event.target.value, this.rightInputTextRef, false);
  };

  private onInputTextChange(newValue, elemnetRef, leftInput) {
    if (
      parseInt(newValue) >= parseInt(this.rangeStyle['--min']) &&
      parseInt(newValue) <= parseInt(this.rangeStyle['--max'])
    ) {
      elemnetRef.classList.remove('input-text-error');
      leftInput
        ? this.updateValue(
            newValue,
            this.rightRangeInputEl.valueAsNumber,
            elemnetRef
          )
        : this.updateValue(
            this.leftRangeInputEl.valueAsNumber,
            newValue,
            elemnetRef
          );
    } else {
      elemnetRef.classList.add('input-text-error');
    }
  }

  @Listen('input')
  handleChange() {
    this.updateValue(
      this.leftRangeInputEl.valueAsNumber,
      this.rightRangeInputEl?.valueAsNumber
    );
  }

  private updateValue(value: number, value2?: number, elemnetRef?: any) {
    if (this.type === 'basic') {
      this.leftRangeInputEl.value = value.toString();
      this.rangeStyle = { ...this.rangeStyle, '--val': value.toString() };
    } else if (this.type === 'continuousValue') {
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
    } else if (this.type === 'dualPoint') {
      if (value2 - value > this.minDiffValue) {
        elemnetRef?.classList.remove('input-text-error');
        this.leftRangeInputEl.value = value.toString(); // update the left input incase change ot not
        this.rightRangeInputEl.value = value2.toString(); // update the right input incase change ot not
        this.rangeStyle = { ...this.rangeStyle, '--val': value.toString() }; // update left range incase change ot not
        this.secondRangeStyle = {
          ...this.secondRangeStyle,
          '--val': value2.toString()
        }; // update right range incase change ot not
        this.leftRangeOldValue = value.toString(); // save old value for fallback
        this.rightRangeOldValue = value2.toString(); // save old value for fallback
      } else {
        // Keep the value as pervious
        this.leftRangeInputEl.value = this.leftRangeOldValue;
        this.rightRangeInputEl.value = this.rightRangeOldValue;
        this.rangeStyle = {
          ...this.rangeStyle,
          '--val': this.leftRangeOldValue
        };
        this.secondRangeStyle = {
          ...this.secondRangeStyle,
          '--val': this.rightRangeOldValue
        };
        elemnetRef?.classList.add('input-text-error');
      }
    }
  }

  inputBasic() {
    return (
      <div style={this.rangeStyle} class="container">
        <input
          style={{ position: 'relative' }}
          value={`${this.rangeStyle['--val']}`}
          min={`${this.rangeStyle['--min']}`}
          max={`${this.rangeStyle['--max']}`}
          ref={(el) => (this.leftRangeInputEl = el as HTMLInputElement)}
          type="range"
        ></input>
      </div>
    );
  }

  inputContinuous() {
    return (
      <div>
        <div style={this.rangeStyle} class="container">
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
        </div>
      </div>
    );
  }
  dualPoint() {
    return (
      <div class="container">
        <input
          min={`${this.rangeStyle['--min']}`}
          max={`${this.rangeStyle['--max']}`}
          value={`${this.rangeStyle['--val']}`}
          type="text"
          ref={(el) => (this.leftInputTextRef = el as HTMLInputElement)}
          class="input-text"
          onKeyUp={(ev) => this.handleOnChangeLeft(ev)}
        ></input>
        <div
          class="range-slider"
          style={{
            '--minval': `${this.rangeStyle['--val']}`,
            '--maxval': `${this.secondRangeStyle['--val']}`
          }}
        >
          <input
            min={`${this.rangeStyle['--min']}`}
            max={`${this.rangeStyle['--max']}`}
            value={`${this.rangeStyle['--val']}`}
            type="range"
            class="sliders"
            style={this.rangeStyle}
            ref={(el) => (this.leftRangeInputEl = el as HTMLInputElement)}
          ></input>
          <input
            min={`${this.secondRangeStyle['--min']}`}
            max={`${this.secondRangeStyle['--max']}`}
            value={`${this.secondRangeStyle['--val']}`}
            type="range"
            class="sliders sliders-right"
            ref={(el) => (this.rightRangeInputEl = el as HTMLInputElement)}
            style={this.secondRangeStyle}
          ></input>
        </div>
        <input
          min={`${this.secondRangeStyle['--min']}`}
          max={`${this.secondRangeStyle['--max']}`}
          type="text"
          value={`${this.secondRangeStyle['--val']}`}
          ref={(el) => (this.rightInputTextRef = el as HTMLInputElement)}
          class="input-text"
          onKeyUp={(ev) => this.handleOnChangeRight(ev)}
        ></input>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.type === 'basic' && this.inputBasic()}
        {this.type === 'continuousValue' && this.inputContinuous()}
        {this.type === 'dualPoint' && this.dualPoint()}
      </div>
    );
  }
}
