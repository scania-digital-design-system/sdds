// TODO: Make a proper web component out of this one?
// It is not published as web component on our web site, so no stress of breaking changes etc...

import { Component, h } from '@stencil/core';

@Component({
  tag: 'sdds-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  // FIXME: WIP expand
  // @Element() el: HTMLElement;

  // Click event for the whole card
  // @Listen('click')
  // handleClick(e) {
  //   console.log(this.clickable)
  //   console.log(this.el.classList.add('sdds-card-active'),e)
  // }
  render() {
    return <slot name="sdds-card"></slot>;
  }
}
