import { Component, Host, Element, Listen, h, Prop, State, Watch } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import type { Placement, Instance } from '@popperjs/core';

@Component({
  tag: 'sdds-popover-canvas',
  styleUrl: 'popover-canvas.scss',
  shadow: true,
})
export class PopoverCanvas {
  @Element() popoverCanvasElement!: HTMLSddsPopoverCanvasElement;

  /** The CSS-selector for an element that will trigger the popover */
  @Prop() selector: string = '';

  /** Element that will trigger the popover (takes priority over selector) */
  @Prop() referenceEl: HTMLElement;

  /** Decides if the Popover Canvas should be visible from the start */
  @Prop() initialShow: boolean = false;

  /** Controls wether the popover is shown or not. If this is set hiding and showing
   * will be decided by this prop and will need to be controlled from the outside.
   */
  @Prop() show: boolean = null;

  /** Decides the placement of the Popover Canvas */
  @Prop() placement: Placement = 'auto';

  /** Sets the offset skidding */
  @Prop() offsetSkidding: number = 0;

  /** Sets the offset distance */
  @Prop() offsetDistance: number = 8;

  @Prop() modifiers: Object[] = [];

  @State() renderedShowValue: boolean = false;

  @State() popperInstance: Instance;

  @State() target: any;

  @State() isShown: boolean = false;

  connectedCallback() {
    if (this.show !== null) {
      this.isShown = this.show;
    }
  }

  @Watch('show')
  onShowChange(newValue: boolean) {
    this.isShown = newValue;
  }

  @Watch('referenceEl')
  onReferenceElChange(newValue: HTMLElement, oldValue: HTMLElement) {
    if (newValue !== oldValue) {
      this.popperInstance?.destroy();

      if (newValue) {
        this.initialize(newValue);
      }
    }
  }

  initialize = (referenceEl) => {
    this.popperInstance = createPopper(referenceEl, this.popoverCanvasElement, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [this.offsetSkidding, this.offsetDistance],
          },
        },
        ...this.modifiers,
      ],
    });

    if (this.show === null) {
      const showCanvas = () => {
        this.isShown = true;
      };

      const hideCanvas = () => {
        this.isShown = false;
      };

      referenceEl.addEventListener('click', (event) => {
        event.stopPropagation();
        if (this.isShown) {
          hideCanvas();
        } else {
          showCanvas();
        }
      });
    }
  };

  @Listen('click', { target: 'window' })
  handleOutsideClick() {
    if (this.show === null && this.isShown) {
      this.isShown = false;
    }
  }

  componentDidLoad() {
    if (this.selector || this.referenceEl) {
      const referenceEl = this.referenceEl ?? document.querySelector(this.selector);

      if (referenceEl) {
        this.initialize(referenceEl);
      } else {
        console.error(
          `Could not initialize popover-canvas: element with selector '${this.selector}' not found.`,
        );
      }
    }

    this.popoverCanvasElement.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });

    this.popoverCanvasElement.addEventListener('click', (event) => {
      if (this.show === null) {
        event.stopPropagation();
      }
    });
  }

  componentDidRender() {
    if (this.isShown && !this.renderedShowValue) {
      // Here we update the popper position since its position is wrong
      // before it is rendered.
      this.popperInstance.update();
    }
    this.renderedShowValue = this.isShown;
  }

  disconnectedCallback() {
    this.popperInstance?.destroy();
  }

  render() {
    return (
      <Host class={`sdds-popover-canvas ${this.isShown ? 'sdds-popover-canvas-show' : ''}`}>
        <slot></slot>
      </Host>
    );
  }
}
