import {
  Component,
  h,
  Host,
  Prop,
  Element,
  Method,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  @Element() el: HTMLElement;

  /** Disables closing modal on clicking on overlay area. */
  @Prop() prevent: boolean = false;

  /** Size of modal  */
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

  /** Sticky or Static Actions  */
  @Prop() actions: 'sticky' | 'static' = 'static';

  /** CSS selector for the element that will open the modal. */
  @Prop() selector: string;

  /** Element that will open the modal (takes priority over selector) */
  @Prop() referenceEl: HTMLElement;

  /** Controls wether the modal is shown or not. If this is set hiding and showing
   * will be decided by this prop and will need to be controlled from the outside.
   */
  @Prop() show: boolean;

  @State() isShown: boolean = false;

  /** Shows the modal.  */
  @Method()
  async openModal() {
    this.handleShow();
  }

  /** Closes the modal. */
  @Method()
  async closeModal() {
    this.handleClose();
  }

  /** Emitts when the modal is closed. */
  @Event({
    eventName: 'sddsClose',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsClose: EventEmitter<any>;

  /** Emitts when the modal is opened. */
  @Event({
    eventName: 'sddsShow',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsShow: EventEmitter<any>;

  connectedCallback() {
    if (this.show !== null) {
      this.isShown = this.show;
    }
    this.setDissmissButtons();
    this.setSelectorButton();
  }

  handleClose = (event?) => {
    const closeEvent = this.sddsClose.emit(event);
    if (!closeEvent.defaultPrevented) {
      this.isShown = false;
    }
  };

  handleShow = (event?) => {
    const showEvent = this.sddsShow.emit(event);
    if (!showEvent.defaultPrevented) {
      this.isShown = true;
    }
  };

  getSelector = (referenceEl) => {
    if (referenceEl) {
      referenceEl.addEventListener('click', (event) => {
        event.stopPropagation();
        if (this.isShown) {
          this.handleClose(event);
        } else {
          this.handleShow(event);
        }
      });
    }
  };

  setSelectorButton = () => {
    console.log('hej');
    if (this.selector || this.referenceEl) {
      const referenceEl = this.referenceEl ?? document.querySelector(this.selector);
      if (referenceEl) {
        this.getSelector(referenceEl);
      } else {
        console.error(
          `Could not initialize modal: element with selector '${this.selector}' not found.`,
        );
      }
    }
  };

  setDissmissButtons() {
    this.el.querySelectorAll('[data-dismiss-modal]').forEach((dismissButton) => {
      dismissButton.addEventListener('click', (event) => {
        this.handleClose(event);
      });
    });
  }

  handleOverlayClick(event) {
    const targetList = event.composedPath();
    const target = targetList[0];
    if (
      target.classList[0] === 'sdds-modal-close' ||
      (target.classList[0] === 'sdds-modal-backdrop' && this.prevent === false)
    ) {
      this.handleClose(event);
    }
  }

  render() {
    return (
      <Host
        onClick={(event) => {
          this.handleOverlayClick(event);
        }}
        class={`sdds-modal-backdrop ${this.isShown ? 'show' : 'hide'}`}
      >
        <div
          class={`sdds-modal ${this.actions ? `sdds-modal__actions-${this.actions}` : ''} ${
            this.size ? `sdds-modal-${this.size}` : ''
          } `}
        >
          <div class="sdds-modal-header">
            <slot name="sdds-modal-headline"></slot>
            <button class="sdds-modal-close" aria-label="close" onClick={() => this.handleClose()}>
              <sdds-icon name="cross" size="20px"></sdds-icon>
            </button>
          </div>

          <div class="sdds-modal-body">
            <slot name="sdds-modal-body"></slot>
          </div>

          <div class="sdds-modal-actions">
            <slot name="sdds-modal-actions"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
