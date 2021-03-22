import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'sdds-card',
  styleUrl: 'card.scss',
  shadow: true
})

export class SddsCard {
  // @Element() el: HTMLElement;
  @Prop() clickable: boolean = false;


  //FIXME: WIP expand
  // Click event for the whole card
  // @Listen('click')
  // handleClick(e) {
  //   console.log(this.clickable)
  //   console.log(this.el.classList.add('sdds-card-active'),e)
  // }
  render() {
    return (
      <slot name="sdds-card">

      </slot>
    )
  }
}