import { Component, h, Host, Prop, Element, Method } from '@stencil/core';

@Component({
  tag: 'sdds-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  /** Disables closing modal on clicking on overlay area. */
  @Prop() prevent: boolean = false;

  /** Size of modal  */
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

  /** Sticky or Static Actions  */
  @Prop() actions: 'sticky' | 'static' = 'static';

  /* Opens or closes the modal. */
  @Prop() open: boolean = false;

  @Element() el: HTMLElement;

  /** Shows the modal  */
  @Method()
  async openModal() {
    this.open = true;
  }

  setDissmissButtons() {
    const nodes = this.el.querySelectorAll('[data-dismiss-modal]');
    nodes.forEach((el) => {
      el.addEventListener('click', () => {
        this.open = false;
      });
    });
  }

  handleClick(e) {
    const targetList = e.composedPath();
    const target = targetList[0];
    if (
      target.classList[0] === 'sdds-modal-close' ||
      (target.classList[0] === 'sdds-modal-backdrop' && this.prevent === false)
    ) {
      this.open = false;
    }
  }

  componentDidRender() {
    this.setDissmissButtons();
  }

  render() {
    return (
      <Host
        onClick={(event) => {
          this.handleClick(event);
        }}
        class={`sdds-modal-backdrop ${this.open ? 'show' : 'hide'}`}
      >
        <div
          class={`sdds-modal ${this.actions ? `sdds-modal__actions-${this.actions}` : ''} ${
            this.size ? `sdds-modal-${this.size}` : ''
          } `}
        >
          <div class="sdds-modal-header">
            <slot name="sdds-modal-headline"></slot>
            <button class="sdds-modal-close-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.40338 2.34308C3.11048 2.05019 2.63561 2.05019 2.34272 2.34308C2.04982 2.63598 2.04982 3.11085 2.34272 3.40374L6.93897 8L2.34283 12.5961C2.04994 12.889 2.04994 13.3639 2.34283 13.6568C2.63572 13.9497 3.1106 13.9497 3.40349 13.6568L7.99963 9.06066L12.5958 13.6568C12.8887 13.9497 13.3635 13.9497 13.6564 13.6568C13.9493 13.3639 13.9493 12.889 13.6564 12.5961L9.06029 8L13.6565 3.40376C13.9494 3.11086 13.9494 2.63599 13.6565 2.3431C13.3636 2.0502 12.8888 2.0502 12.5959 2.3431L7.99963 6.93934L3.40338 2.34308Z"    
                />
              </svg>
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
