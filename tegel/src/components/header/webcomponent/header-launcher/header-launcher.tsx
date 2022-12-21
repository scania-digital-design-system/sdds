import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher',
  styleUrl: 'header-launcher.scss',
  shadow: true,
})
export class SddsHeaderLauncher {
  @Prop() open: boolean = false;

  @Element() el: HTMLElement;

  headerEl: HTMLSddsHeaderElement;

  connectedCallback() {
    this.headerEl = this.el.closest('sdds-header');
  }

  handleClick = () => {
    if (this.open) {
      this.headerEl.showOverlay = false;
    } else {
      this.headerEl.showOverlay = true;
    }
    this.open = !this.open;
  };

  render() {
    return (
      <Host>
        <button class={this.open && 'sdds-launcher-open'} onClick={() => this.handleClick()}>
          <sdds-icon name="bento" size="20px"></sdds-icon>
        </button>
        {this.open && (
          <ul>
            <slot></slot>
          </ul>
        )}
      </Host>
    );
  }
}
