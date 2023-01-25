import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement, State } from '@stencil/core/internal';

@Component({
  tag: 'sdds-footer-link-group',
  styleUrl: 'sdds-footer-link-group.scss',
  shadow: false,
  scoped: true,
})
export class SddsFooterLinkGroup {
  @Prop() titleText: string;

  @Element() host: HostElement;

  @State() open: boolean = false;

  rightSlot: boolean = false;

  parentIsTopPart: boolean = false;

  connectedCallback() {
    this.rightSlot = this.host.parentElement.slot === 'main-right';
    this.parentIsTopPart = this.host.parentElement.slot === 'top';
  }

  render() {
    return (
      <Host>
        {this.titleText && this.parentIsTopPart && (
          <div class="footer-top-title">{this.titleText}</div>
        )}

        {this.titleText && this.parentIsTopPart && (
          <button
            onClick={() => {
              this.open = !this.open;
              console.log(this.open);
            }}
            class={`footer-top-title-button  ${this.open ? 'expanded' : 'closed'}`}
          >
            {this.titleText}
            <sdds-icon name="chevron_down" size="20px"></sdds-icon>
          </button>
        )}
        <ul
          class={`
        ${this.rightSlot ? 'right' : 'left'}
        ${this.parentIsTopPart ? 'top-part-child' : ''}
        ${this.open ? 'expanded' : 'closed'}
        `}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
