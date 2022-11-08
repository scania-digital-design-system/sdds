import { Component, h, Listen, Host, Prop, State, Element, Watch, Method } from '@stencil/core';

@Component({
  tag: 'sdds-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  /** Target selector that triggers opening of modal, for example button with id="btn1", then selector is "#btn1" */
  @Prop() selector: string = '';

  /** Disables closing modal on clicking on overlay area. */
  @Prop() prevent: boolean = false;

  /** Size of modal. Accepted strings are: xs, sm, md, lg.  */
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

  /** Sticky or Static Actions  */
  @Prop() actions: 'sticky' | 'static' = 'static';

  @Element() el: HTMLElement;

  //** State when modal should be shown */
  @State() show: boolean = false;

  @Method()
  async openModal() {
    this.show = true;
  }

  componentDidLoad() {
    const targets = document.querySelectorAll(this.selector);
    this.dismissModal();

    // If the modal doesn't have a selector to be triggered
    if (!targets) {
      console.warn('No prop for modal targeted, please add selector attribute');
      return;
    }
    // Find all buttons with selector (id/class) and add onclick event on it
    targets.forEach(el => {
      el.addEventListener('click', () => {
        this.show = true;
      });
    });
  }

  dismissModal() {
    const nodes = this.el.querySelectorAll('[data-dismiss-modal]');

    nodes.forEach(el => {
      el.addEventListener('click', () => {
        this.show = false;
      });
    });
  }

  @Watch('show')
  showToggled() {
    const root = document.querySelector('html');
    if (this.show === true) {
      root.classList.add('sdds-modal-overflow');
    } else {
      root.classList.remove('sdds-modal-overflow');
    }
  }

  // Click event on valid targets to dismiss the modal
  @Listen('click')
  handleClick(e) {
    const targetList = e.composedPath();
    const target = targetList[0];
    if (target.classList[0] === 'sdds-modal-btn' || (target.classList[0] === 'sdds-modal-backdrop' && this.prevent === false)) {
      this.show = false;
    }
    e.stopPropagation();
  }

  render() {
    return (
      <Host class={`sdds-modal-backdrop ${this.show ? 'show' : 'hide'}`}>
        <div class={`sdds-modal ${this.actions ? `sdds-modal__actions-${this.actions}` : ''} ${this.size ? `sdds-modal-${this.size}` : ''} `}>
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
