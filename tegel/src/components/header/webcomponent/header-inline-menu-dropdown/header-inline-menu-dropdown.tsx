import { Component, h, Host, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu-dropdown',
  styleUrl: 'header-inline-menu-dropdown.scss',
  shadow: true,
})
export class SddsHeaderInlineMenuDropdown {
  @Prop() text: string = '';

  @State() open: boolean = false;

  @Element() el: HTMLElement;

  handleClick = () => {
    this.open = !this.open;
  };

  componenetWillRender() {
    console.log(this.el.querySelector('button'));
    /* const buttonWidth = this.el.querySelector('button').clientWidth;
    console.log(buttonWidth)
    this.el.querySelector('li').style.width = buttonWidth.toString(); */
  }

  render() {
    return (
      <Host>
        <li class={this.open && 'open'}>
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            {this.text}
            <sdds-icon name="chevron_down" size="16px"></sdds-icon>
          </button>
        </li>
        <ul class={`sdds-header-dropdown-menu ${this.open ? 'open' : 'closed'}`}>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
