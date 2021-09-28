import {
  Component,
  h,
  Listen,
  Host,
  Prop,
  State,
  Element,
  Watch,
} from '@stencil/core';
@Component({
  tag: 'sdds-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  //Target selector to show modal
  @Prop() selector;
  //Disable click event on backdrop
  @Prop() prevent = false;
  //Size of the modal
  @Prop() size = 'md';

  @Element() el: HTMLElement;

  //State when modal should be shown
  @State() show: boolean = false;

  componentDidLoad() {
    const target = document.querySelector(this.selector);
    this.dismisModal();

    //If the modal doesn't have a selector to be triggered
    if (!target) {
      console.warn('No prop for modal targeted, please add selector attribute');
      return;
    }
    target.addEventListener('click', () => {
      this.show = true;
    });
  }

  dismisModal() {
    const nodes = this.el.querySelectorAll('[modal-dismiss]');

    nodes.forEach((el) => {
      el.addEventListener('click', () => (this.show = false));
    });
  }

  @Watch('show')
  showToggled() {
    if (this.show == true) {
      document.body.classList.add('sdds-modal-overflow');
    } else {
      document.body.classList.remove('sdds-modal-overflow');
    }
  }
  //Click event on valid targets to dissmiss the modal
  @Listen('click')
  handleClick(e) {
    const targetList = e.composedPath();
    const target = targetList[0];
    if (
      target.classList[0] == 'sdds-modal-btn' ||
      (target.classList[0] == 'sdds-modal-backdrop' && this.prevent == false)
    ) {
      this.show = false;
    }
    e.stopPropagation();
  }

  render() {
    return (
      <Host class={`sdds-modal-backdrop ${this.show ? 'show' : 'hide'}`}>
        <div
          class={`sdds-modal ${this.size ? `sdds-modal-${this.size}` : ''} `}
        >
          <div class="sdds-modal-header">
            <slot name="sdds-modal-headline"></slot>
            <span class="sdds-modal-btn"></span>
          </div>
          <slot name="sdds-modal-body"></slot>
          <div class="sdds-modal-actions">
            <slot name="sdds-modal-actions"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
