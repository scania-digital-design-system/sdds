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
      target.classList[0] === 'sdds-modal-btn' ||
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
            <button class="sdds-modal-btn"></button>
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
