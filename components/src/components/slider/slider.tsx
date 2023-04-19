import { Component, h, Prop, Listen, EventEmitter, Event, Method } from '@stencil/core';

@Component({
  tag: 'sdds-slider',
  styleUrl: 'slider.scss',
  shadow: false,
})
export class Slider {
  private wrapperElement: HTMLElement = null;

  private scrubberElement: HTMLElement = null;

  private scrubberInnerElement: HTMLElement = null;

  private trackElement: HTMLElement = null;

  private trackFillElement: HTMLElement = null;

  private minusElement: HTMLElement = null;

  private plusElement: HTMLElement = null;

  private inputElement: HTMLInputElement = null;

  private scrubberGrabbed: boolean = false;

  private scrubberLeft: number = 0;

  private tickValues: Array<number> = [];

  private disabledState: boolean = false;

  private readonlyState: boolean = false;

  private useControls: boolean = false;

  private useInput: boolean = false;

  private useSmall: boolean = false;

  private useSnapping: boolean = false;

  private supposedValueSlot: number = -1;

  private resizeObserverLoaded: boolean = false;

  private eventListenersAdded: boolean = false;

  /** Change event for the textfield */
  @Event({
    eventName: 'sliderChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sliderChangeEmitter: EventEmitter<any>;

  /** Text for label */
  @Prop() label: string = '';

  /** Initial value */
  @Prop() value: string = '0';

  /** Minimum value */
  @Prop() min: string = '0';

  /** Maximum value */
  @Prop() max: string = '100';

  /** Number of tick markers (tick for min- and max-value will be added automatically) */
  @Prop() ticks: string = '0';

  /** Decide to show numbers above the tick markers or not  */
  @Prop() showTickNumbers: boolean = false;

  /** Decide to show the tooltip or not */
  @Prop() tooltip: boolean = null;

  /** Sets the disabled state for the whole component  */
  @Prop() disabled: boolean = null;

  /** Sets the read only state for the whole component  */
  @Prop() readonly: boolean = null;

  /** Decide to show the controls or not */
  @Prop() controls: boolean = null;

  /** Decide to show the input field or not */
  @Prop() input: boolean = null;

  /** Defines how much to increment/decrement the value when using controls */
  @Prop() step: string = '1';

  /** Name property (will be inherited by the native slider component) */
  @Prop() name: string = '';

  /** @DEPRECATED Decide to use the small variant or not */
  @Prop() small: boolean = null;

  /** Sets the size of the scrubber */
  @Prop() size: 'sm' | '' = '';

  /** Snap to the ticks grid */
  @Prop() snap: boolean = null;

  /** Public method to re-initialise the slider if some configuration props are changed */
  @Method()
  async reset() {
    // @TODO: Maybe use watch-decorator (and a refactor) in the future
    this.componentWillLoad();
    this.componentDidLoad();
  }

  @Listen('keydown')
  handleKeydown(event) {
    switch (event.key) {
      case 'ArrowLeft':
        this.stepLeft();
        break;

      case 'ArrowRight':
        this.stepRight();
        break;

      default:
        break;
    }
  }

  @Listen('mouseup', { target: 'window' })
  handleMouseUp() {
    if (!this.scrubberGrabbed) {
      return;
    }

    this.scrubberGrabbed = false;
    this.scrubberInnerElement.classList.remove('pressed');
    this.updateValue();

    this.trackElement.focus();
  }

  @Listen('touchend', { target: 'window' })
  handleTouchEnd() {
    if (!this.scrubberGrabbed) {
      return;
    }

    this.scrubberGrabbed = false;
    this.scrubberInnerElement.classList.remove('pressed');
    this.updateValue();

    this.trackElement.focus();
  }

  @Listen('mousemove', { target: 'window' })
  handleMouseMove(event) {
    if (!this.scrubberGrabbed) {
      return;
    }

    this.scrubberCore(event);
  }

  @Listen('touchmove', { target: 'window' })
  handleTouchMove(event) {
    event.preventDefault();

    if (!this.scrubberGrabbed) {
      return;
    }

    this.scrubberCore(event);
  }

  scrubberCore(event) {
    const numTicks = parseInt(this.ticks);
    const trackRect = this.trackElement.getBoundingClientRect();
    let localLeft = 0;
    if (event.type === 'mousemove') {
      localLeft = event.clientX - trackRect.left;
    } else if (event.type === 'touchmove') {
      localLeft = event.touches[0].clientX - trackRect.left;
    } else {
      console.warn('Slider component: Unsupported event!');
    }

    this.supposedValueSlot = -1;

    if (this.useSnapping && numTicks > 0) {
      const trackWidth = this.getTrackWidth();
      const distanceBetweenTicks = Math.round(trackWidth / (numTicks + 1));
      localLeft = Math.round(localLeft / distanceBetweenTicks) * distanceBetweenTicks;

      let scrubberPositionPX = 0;
      if (localLeft >= 0 && localLeft <= trackWidth) {
        scrubberPositionPX = localLeft;
      } else if (localLeft > trackWidth) {
        scrubberPositionPX = trackWidth;
      } else if (localLeft < 0) {
        scrubberPositionPX = 0;
      }
      this.supposedValueSlot = Math.round(scrubberPositionPX / distanceBetweenTicks);
    }

    this.scrubberLeft = this.constrainScrubber(localLeft);
    this.scrubberElement.style.left = `${this.scrubberLeft}px`;

    this.updateValue();
    this.updateTrack();
  }

  updateTrack() {
    const trackWidth = this.getTrackWidth();
    const percentageFilled = (this.scrubberLeft / trackWidth) * 100;

    this.trackFillElement.style.width = `${percentageFilled}%`;
  }

  dispatchChangeEvent() {
    this.sliderChangeEmitter.emit({ value: this.value });
  }

  updateValue() {
    const trackWidth = this.getTrackWidth();

    /* if snapping (supposedValueSlot > 0) is enabled, make sure we display the supposed value (instead of maybe getting a -1/+1 depending on rounding)  */
    if (this.supposedValueSlot > 0) {
      const supposedValue = this.tickValues[this.supposedValueSlot];
      this.value = `${supposedValue}`;
    } else {
      const percentage = this.scrubberLeft / trackWidth;
      this.value = `${Math.trunc(this.getMin() + percentage * (this.getMax() - this.getMin()))}`;
    }

    this.dispatchChangeEvent();
  }

  updateValueForced(value) {
    this.value = value;
    this.dispatchChangeEvent();
  }

  getMin() {
    return parseFloat(this.min);
  }

  getMax() {
    return parseFloat(this.max);
  }

  constrainScrubber(x) {
    const width = this.getTrackWidth();

    if (x < 0) {
      return 0;
    }

    if (x > width) {
      return width;
    }

    return x;
  }

  getTrackWidth() {
    const trackRect = this.trackElement.getBoundingClientRect();
    return trackRect.right - trackRect.left;
  }

  calculateScrubberLeftFromValue(value) {
    const initValue = value;
    const trackWidth = this.getTrackWidth();

    const normalizedValue = initValue - this.getMin();
    const normalizedMax = this.getMax() - this.getMin();

    const calculatedLeft = (normalizedValue / normalizedMax) * trackWidth;

    this.scrubberLeft = calculatedLeft;

    this.scrubberElement.style.left = `${this.scrubberLeft}px`;
  }

  componentDidLoad() {
    if (!this.resizeObserverLoaded) {
      this.resizeObserverLoaded = true;

      const resizeObserver = new ResizeObserver((/* entries */) => {
        this.calculateScrubberLeftFromValue(this.value);
        this.updateTrack();
      });

      resizeObserver.observe(this.wrapperElement);
    }

    if (!this.eventListenersAdded) {
      this.eventListenersAdded = true;

      this.scrubberElement.addEventListener('mousedown', (event) => {
        event.preventDefault();
        this.grabScrubber();
      });

      this.scrubberElement.addEventListener('touchstart', () => {
        this.grabScrubber();
      });

      if (this.useControls) {
        this.minusElement.addEventListener('click', () => {
          this.stepLeft();
        });

        this.plusElement.addEventListener('click', () => {
          this.stepRight();
        });
      }

      if (this.inputElement) {
        this.inputElement.addEventListener('keydown', (event) => {
          event.stopPropagation();

          if (event.key === 'Enter') {
            let newValue = parseInt(this.inputElement.value);

            if (newValue < this.getMin()) {
              newValue = this.getMin();
            } else if (newValue > this.getMax()) {
              newValue = this.getMax();
            }

            this.calculateScrubberLeftFromValue(newValue);
            this.updateValueForced(newValue);
            this.updateTrack();

            this.inputElement.blur();
            this.wrapperElement.focus();
          }
        });
      }
    }

    this.calculateScrubberLeftFromValue(this.value);
    this.updateTrack();
  }

  grabScrubber() {
    if (this.readonlyState) {
      return;
    }

    this.scrubberGrabbed = true;
    this.scrubberInnerElement.classList.add('pressed');
  }

  calculateInputSizeFromMax() {
    return this.max.length;
  }

  controlsStep(delta) {
    if (this.readonlyState) {
      return;
    }

    const trackWidth = this.getTrackWidth();
    const percentage = this.scrubberLeft / trackWidth;
    const numTicks = parseInt(this.ticks);

    let currentValue = this.getMin() + percentage * (this.getMax() - this.getMin());

    currentValue += delta;

    if (currentValue < this.getMin()) {
      currentValue = this.getMin();
    } else if (currentValue > this.getMax()) {
      currentValue = this.getMax();
    }

    this.value = `${currentValue}`;

    /* if snapping is enabled, instead just increment or decrement the current "fixed" value from our ticknumber array */
    if (this.useSnapping && numTicks > 0) {
      const stepDir = delta > 0 ? 1 : -1;
      this.supposedValueSlot += stepDir;

      if (this.supposedValueSlot < 0) {
        this.supposedValueSlot = 0;
      } else if (this.supposedValueSlot > numTicks + 1) {
        this.supposedValueSlot = numTicks + 1;
      }
    }

    this.calculateScrubberLeftFromValue(currentValue);
    this.updateTrack();
    this.updateValue();
  }

  stepLeft() {
    this.controlsStep(-parseInt(this.step));
  }

  stepRight() {
    this.controlsStep(parseInt(this.step));
  }

  componentWillLoad() {
    const numTicks = parseInt(this.ticks);

    if (numTicks > 0) {
      this.tickValues = [this.getMin()];

      const step = (this.getMax() - this.getMin()) / (numTicks + 1);

      for (let i = 1; i < numTicks + 1; i++) {
        this.tickValues.push(this.getMin() + Math.round(step * i));
      }

      this.tickValues.push(this.getMax());
    }

    if (this.disabled !== null) {
      this.disabledState = true;
    } else {
      this.disabledState = false;
    }

    if (this.readonly !== null) {
      this.readonlyState = true;
    } else {
      this.readonlyState = false;
    }

    this.useInput = false;
    this.useControls = false;

    if (this.controls !== null) {
      this.useControls = true;
    } else if (this.input !== null) {
      this.useInput = true;
    }

    this.useSmall = false;

    if (this.small !== null || this.size === 'sm') {
      this.useSmall = true;
    }

    this.useSnapping = false;

    if (this.snap !== null) {
      this.useSnapping = true;
    }

    const min = this.getMin();
    const max = this.getMax();

    if (min > max) {
      console.warn(
        'min-prop must have a higher value than max-prop for the component to work correctly.',
      );
      this.disabledState = true;
    }
  }

  render() {
    return (
      <div class="sdds-slider-wrapper">
        <input
          class="sdds-slider-native-element"
          type="range"
          value={this.value}
          name={this.name}
          min={this.min}
          max={this.max}
        ></input>

        <div
          class={`sdds-slider ${this.disabledState ? 'disabled' : ''} ${
            this.useSmall ? 'sdds-slider-small' : ''
          }`}
          ref={(el) => (this.wrapperElement = el as HTMLElement)}
        >
          {this.useInput && (
            <div class="sdds-slider__input-values">
              <div
                ref={(el) => (this.minusElement = el as HTMLElement)}
                class="sdds-slider__input-value"
              >
                {this.min}
              </div>
            </div>
          )}

          {this.useControls && (
            <div class="sdds-slider__controls">
              <div
                ref={(el) => (this.minusElement = el as HTMLElement)}
                class="sdds-slider__control sdds-slider__control-minus"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.98975 8.00005C1.98975 8.27619 2.2136 8.50005 2.48975 8.50005H13.5104C13.7866 8.50005 14.0104 8.27619 14.0104 8.00005C14.0104 7.72391 13.7866 7.50005 13.5104 7.50005L2.48975 7.50005C2.2136 7.50005 1.98975 7.72391 1.98975 8.00005Z"
                    fill="#0D0F13"
                  />
                </svg>
              </div>
            </div>
          )}

          <div class="sdds-slider-inner">
            <label class={this.tickValues.length > 0 && 'offset'}>{this.label}</label>

            {this.tickValues.length > 0 && (
              <div class="sdds-slider__value-dividers-wrapper">
                <div class="sdds-slider__value-dividers">
                  {this.tickValues.map((value) => (
                    <div class="sdds-slider__value-divider">
                      {this.showTickNumbers && <span>{value}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div
              class="sdds-slider__track"
              ref={(el) => (this.trackElement = el as HTMLElement)}
              tabindex="1"
            >
              <div
                class="sdds-slider__track-fill"
                ref={(el) => (this.trackFillElement = el as HTMLElement)}
              ></div>

              <div
                class="sdds-slider__scrubber"
                ref={(el) => (this.scrubberElement = el as HTMLElement)}
              >
                {this.tooltip !== null && (
                  <div class="sdds-slider__value">
                    {this.value}
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.15882 12.6915L0.990487 1.54076C0.562658 0.875246 1.0405 0 1.83167 0H16.1683C16.9595 0 17.4373 0.875246 17.0095 1.54076L9.84118 12.6915C9.44754 13.3038 8.55246 13.3038 8.15882 12.6915Z"
                        fill="#37414F"
                      />
                    </svg>
                  </div>
                )}

                <div
                  class="sdds-slider__scrubber-inner"
                  ref={(el) => (this.scrubberInnerElement = el as HTMLElement)}
                ></div>
              </div>
            </div>
          </div>

          {this.useInput && (
            <div class="sdds-slider__input-values">
              <div
                ref={(el) => (this.minusElement = el as HTMLElement)}
                class="sdds-slider__input-value"
                tabindex="2"
              >
                {this.max}
              </div>
              <div class="sdds-slider__input-field-wrapper">
                <input
                  onFocus={(e) => {
                    if (this.readonlyState) {
                      e.preventDefault();
                      this.inputElement.blur();
                    }
                  }}
                  size={this.calculateInputSizeFromMax()}
                  class="sdds-slider__input-field"
                  value={this.value}
                  ref={(el) => (this.inputElement = el as HTMLInputElement)}
                />
              </div>
            </div>
          )}

          {this.useControls && (
            <div class="sdds-slider__controls">
              <div
                ref={(el) => (this.plusElement = el as HTMLElement)}
                class="sdds-slider__control sdds-slider__control-plus"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.50005 13.5104C8.50005 13.7865 8.27619 14.0104 8.00005 14.0104C7.7239 14.0104 7.50005 13.7865 7.50005 13.5104V8.5H2.48975C2.2136 8.5 1.98975 8.27614 1.98975 8C1.98975 7.72386 2.2136 7.5 2.48975 7.5H7.50005V2.48965C7.50005 2.21351 7.7239 1.98965 8.00005 1.98965C8.27619 1.98965 8.50005 2.21351 8.50005 2.48965V7.5H13.5104C13.7866 7.5 14.0104 7.72386 14.0104 8C14.0104 8.27614 13.7866 8.5 13.5104 8.5H8.50005V13.5104Z"
                    fill="#0D0F13"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
