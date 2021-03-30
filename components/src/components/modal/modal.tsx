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
  @State() target;
  @State() show: boolean = true;

  componentDidLoad() {
    this.target = document.querySelector(this.selector);
  }

  toggle() {
    // this.show =! this.show;
    // const targetList = e.composedPath()
    // console.log(text,e.composedPath())
    // const target = targetList[0];
    // console.log(target)
    // // debugger
    // e.stopPropagation();
    // console.log('parent')
    // console.log(this.show)
  }

  @Listen('click')
  handleClick(e) {
    const targetList = e.composedPath()
    const target = targetList[0];
    console.log(target);

    console.log(targetList);
    console.log(target.classList[0])
    // console.log(target.classList[0] == 'sdds-modal-btn')
    console.log('backdrop',(target.classList[0] == 'sdds-modal-backdrop' && this.prevent == true))
    console.log('btn',target.classList[0] == 'sdds-modal-btn' )

    if(target.classList[0] == 'sdds-modal-btn' ||( target.classList[0] == 'sdds-modal-backdrop' && this.prevent == false )) {
      this.show =! this.show;
    }

    e.stopPropagation();
  }

  render() {
    return (
      <Host class={`sdds-modal-backdrop ${this.show == true ? 'show' : 'hide'}`}>
        <div class="sdds-modal">
          <div class="sdds-modal-header">
            <h3>modal header</h3>
            <span class="sdds-modal-btn"></span>
          </div>
            <div slot="sdds-modal-body"></div>
            <div slot="sdds-modal-footer"> </div>
        </div>
      </Host>
    )
  }
}
