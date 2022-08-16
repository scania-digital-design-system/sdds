import { Component, Listen, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class Slider {
  wrapperElement: HTMLElement = null;
  scrubberElement: HTMLElement = null;
  trackElement: HTMLElement = null;
  scrubberGrabPos: Object = {};
  scrubberGrabbed: boolean = false;

  @Listen('mouseup', { target: 'window' })
  handleMouseUp() {
    this.scrubberGrabbed = false;
  }

  @Listen('mousemove', { target: 'window' })
  handleMouseMove(event) {
    if (!this.scrubberGrabbed) {
      return;
    }

    const wrapperRect = this.wrapperElement.getBoundingClientRect();
    // console.log(wrapperRect.left | 0);

    const localLeft = event.clientX - wrapperRect.left;
    let scrubberLeft = this.constrainScrubber(localLeft);

    this.scrubberElement.style.left = `${scrubberLeft}px`;

    console.log(scrubberLeft);
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

  componentDidLoad() {
    const resizeObserver = new ResizeObserver((entries) => {
      console.log('resize', entries);
    });

    resizeObserver.observe(this.wrapperElement);

    this.scrubberElement.addEventListener('mousedown', (event) => {
      event.preventDefault();

      this.scrubberGrabPos = {
        x: event.offsetX,
        y: event.offsetY,
      };

      this.scrubberGrabbed = true;
    });
  }

  updateTrack() {}

  render() {
    return (
      <Host>
        <div
          class="sdds-slider"
          ref={(el) => (this.wrapperElement = el as HTMLElement)}
        >
          <div
            class="sdds-slider__scrubber"
            ref={(el) => (this.scrubberElement = el as HTMLElement)}
          ></div>
          <div
            class="sdds-slider__track"
            ref={(el) => (this.trackElement = el as HTMLElement)}
          >
            <div class="sdds-slider__track-fill"></div>
          </div>
        </div>
      </Host>
    );
  }
}
