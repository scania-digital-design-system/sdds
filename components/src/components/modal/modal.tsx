import {
  Component,
  h,
  Listen,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Element,
  Watch
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

  // onClick event for button inside slot
  @Event({
    composed: true,
    bubbles: true,
    cancelable: true
  }) click: EventEmitter

  @Event() todoCompleted: EventEmitter;

  todoCompletedHandler(todo) {
    this.todoCompleted.emit(todo);
  }

  // clickHandler(event) {
  //   this.click.emit(event);
  // }

  @Listen('todoCompleted', { capture: true })
  abc(ev) {
    console.log('some method ', ev);
  }

  componentDidLoad() {
    const target = document.querySelector(this.selector);
    this.dismisModal();
    this.attachOnClick();

    //If the modal doesn't have a selector to be triggered
    if(!target) {
      console.warn('No prop for modal targeted, please add selector attribute')
      return;
    }
    target.addEventListener('click', () => {this.show = true});
  }

  attachOnClick() {
    const buttons = this.el.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click',(e) => {
        console.log('sdds-modal: ', e)
        this.click.emit(e);
      });
    });
  }

  dismisModal() {
    const nodes = this.el.querySelectorAll('[modal-dismiss]');
    
    nodes.forEach(el => {
      el.addEventListener('click',() => this.show = false);
    });
  }

  @Watch('show')
  showToggled() {
    if(this.show == true) {
      document.body.classList.add('sdds-modal-overflow')
    } else {
      document.body.classList.remove('sdds-modal-overflow')
    }
  }
  //Click event on valid targets to dissmiss the modal
  @Listen('click')
  handleClick(e) {
    const targetList = e.composedPath();
    const target = targetList[0];
    if(target.classList[0] == 'sdds-modal-btn' ||( target.classList[0] == 'sdds-modal-backdrop' && this.prevent == false )) {
      this.show = false;
    }
    e.stopPropagation();
  }

  render() {
    return (
      <Host class={`sdds-modal-backdrop ${this.show ? 'show' : 'hide'}`}>
        <div class={`sdds-modal ${this.size ? `sdds-modal-${this.size}`: ''} `}>
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
    )
  }
}
