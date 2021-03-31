import {
  Component,
  h,
  Listen,
  Host,
  Prop,
  State,
} from '@stencil/core';
@Component({
  tag: 'sdds-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  @Prop() selector;
  @Prop() prevent = false;
  @Prop() size;
  @State() show: boolean = false;

  componentDidLoad() {
    const target = document.querySelector(this.selector);
    if(!target) {
      console.warn('No prop for modal targeted, please add selector attribute')
      return;
    }
    console.log(target);
    target.addEventListener('click', () => {this.show = true});
  }

  @Listen('click')
  handleClick(e) {
    const targetList = e.composedPath();
    const target = targetList[0];
    if(target.classList[0] == 'sdds-modal-btn' ||( target.classList[0] == 'sdds-modal-backdrop' && this.prevent == false )) {
      this.show =! this.show;
    }
    e.stopPropagation();
  }

  render() {
    return (
      <Host class={`sdds-modal-backdrop ${this.show ? 'show' : 'hide'}`}>
        <div class={`sdds-modal sdds-modal-${this.size}`}>
          <div class="sdds-modal-header">
            <slot name="sdds-modal-headline"></slot>
            <span class="sdds-modal-btn"></span>
          </div>
            <slot name="sdds-modal-body"></slot>
            <slot name="sdds-modal-actions"></slot>
        </div>
      </Host>
    )
  }
}
