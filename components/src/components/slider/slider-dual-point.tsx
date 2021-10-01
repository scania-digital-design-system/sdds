import { Component, h, Prop, State, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-dual-point-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class DualPointSlider {
  /** Minmum value of input */
  @Prop() min: string = '0';

  /** Maximum value of input */
  @Prop() max: string = '100';

  /** value of range one */
  @Prop() value: string = '20';

  /** value of range two*/
  @Prop() value2: string = '70';

  inputTextLeft!: HTMLInputElement;
  inputTextRight!: HTMLInputElement;

  inputRangeLeft!: HTMLInputElement;
  inputRangeRight!: HTMLInputElement;

  @State() rangeProp = {
    '--min': this.min,
    '--max': this.max,
    '--val': this.value,
  };

  @State() rangeProp2 = {
    '--min': this.min,
    '--max': this.max,
    '--val': this.value2,
  };
  // Minmum difference bewtten the thumb of two slider
  @State() minDiffValue: number = 0;

  @State() leftRangeOldValue: string;

  @State() rightRangeOldValue: string;

  @Watch('value')
  watchValue() {
    if (this.value > this.max || this.value < this.min) {
      //console.warn('The provided value should be between min and max');
      this.rangeProp = { ...this.rangeProp, '--val': this.min };
    }
  }

  @Watch('value2')
  watchValue2() {
    if (this.value2 > this.max || this.value2 < this.value) {
      /*      console.warn(
        'The provided value should be greater than value and less than max'
      ); */
      this.rangeProp2 = { ...this.rangeProp2, '--val': this.max };
    }
  }
  componentWillLoad() {
    this.watchValue();
    this.watchValue2();
  }

  private onInputTextChange(newValue, elemnetRef, leftInput) {
    if (
      parseInt(newValue) >= parseInt(this.rangeProp['--min']) &&
      parseInt(newValue) <= parseInt(this.rangeProp['--max'])
    ) {
      elemnetRef.classList.remove('input-text-error');
      leftInput
        ? this.updateSlider(
            newValue,
            this.inputRangeRight?.valueAsNumber,
            elemnetRef
          )
        : this.updateSlider(
            this.inputRangeLeft?.valueAsNumber,
            newValue,
            elemnetRef
          );
    } else {
      elemnetRef.classList.add('input-text-error');
    }
  }

  private OnLeftTextChange = (event) => {
    this.onInputTextChange(event.target.value, this.inputTextLeft, true);
  };

  private OnRightTextChange = (event) => {
    this.onInputTextChange(event.target.value, this.inputTextRight, false);
  };

  private updateSlider(value: number, value2?: number, elemnetRef?: any) {
    elemnetRef?.classList.remove('input-text-error');

    if (value2 - value >= this.minDiffValue) {
      elemnetRef?.classList.remove('input-text-error');
      this.inputRangeLeft.value = value.toString(); // update the left input incase change or not
      this.inputRangeRight.value = value2.toString(); // update the right input incase change or not
      this.rangeProp = { ...this.rangeProp, '--val': value.toString() }; // update left range incase change or not
      this.rangeProp2 = {
        ...this.rangeProp2,
        '--val': value2.toString(),
      }; // update right range incase change or not
      this.leftRangeOldValue = value.toString(); // save old value for fallback
      this.rightRangeOldValue = value2.toString(); // save old value for fallback
    } else {
      // Keep the value as pervious
      this.inputRangeLeft.value = this.leftRangeOldValue;
      this.inputRangeRight.value = this.rightRangeOldValue;
      this.rangeProp = {
        ...this.rangeProp,
        '--val': this.leftRangeOldValue,
      };
      this.rangeProp2 = {
        ...this.rangeProp2,
        '--val': this.rightRangeOldValue,
      };
      elemnetRef?.classList.add('input-text-error');
    }
  }

  @Listen('input')
  handleChange() {
    this.updateSlider(
      this.inputRangeLeft?.valueAsNumber,
      this.inputRangeRight?.valueAsNumber
    );
  }
  render() {
    console.log('Here');
    return (
      <div class="container">
        <input
          min={`${this.rangeProp['--min']}`}
          max={`${this.rangeProp['--max']}`}
          value={`${this.rangeProp['--val']}`}
          type="text"
          ref={(el) => (this.inputTextLeft = el as HTMLInputElement)}
          class="input-text"
          onKeyUp={(ev) => this.OnLeftTextChange(ev)}
        ></input>
        <div
          class="range-slider"
          style={{
            '--minval': `${this.rangeProp['--val']}`,
            '--maxval': `${this.rangeProp2['--val']}`,
          }}
        >
          <input
            min={`${this.rangeProp['--min']}`}
            max={`${this.rangeProp['--max']}`}
            value={`${this.rangeProp['--val']}`}
            type="range"
            class="sliders"
            style={this.rangeProp}
            ref={(el) => (this.inputRangeLeft = el as HTMLInputElement)}
          ></input>
          <input
            min={`${this.rangeProp2['--min']}`}
            max={`${this.rangeProp2['--max']}`}
            value={`${this.rangeProp2['--val']}`}
            type="range"
            class="sliders sliders-right"
            ref={(el) => (this.inputRangeRight = el as HTMLInputElement)}
            style={this.rangeProp2}
          ></input>
        </div>
        <input
          min={`${this.rangeProp2['--min']}`}
          max={`${this.rangeProp2['--max']}`}
          type="text"
          value={`${this.rangeProp2['--val']}`}
          ref={(el) => (this.inputTextRight = el as HTMLInputElement)}
          class="input-text"
          onKeyUp={(ev) => this.OnRightTextChange(ev)}
        ></input>
      </div>
    );
  }
}
