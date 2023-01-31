import { Component, Host, h, Prop, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-v2',
  styleUrl: 'header-launcher.scss',
  shadow: true,
})
export class HeaderLauncher {
  @Element() host: HTMLElement;

  /** Opens and closes the launcher */
  @Prop({ reflect: true }) open: boolean = false;

  @State() hasListTypeMenu = false;

  @Listen('click', { target: 'window' })
  onAnyClick(event: MouseEvent) {
    // Source: https://lamplightdev.com/blog/2021/04/10/how-to-detect-clicks-outside-of-a-web-component/
    const isClickOutside = !event.composedPath().includes(this.host as any);
    if (isClickOutside) {
      this.open = false;
    }
  }

  componentDidLoad() {
    const slotElement = this.host.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    const slottedElements = slotElement.assignedElements();
    const hasListTypeMenu = slottedElements.some(
      (element) => element.tagName.toLowerCase() === 'sdds-header-launcher-list',
    );

    if (hasListTypeMenu) {
      this.hasListTypeMenu = true;
    }
  }

  toggleLauncher() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'wrapper': true,
            'state--open': this.open,
            'state--list-type-menu': this.hasListTypeMenu,
          }}
        >
          <sdds-header-launcher-button
            isActive={this.open}
            onClick={() => {
              this.toggleLauncher();
            }}
          ></sdds-header-launcher-button>

          <div class="menu">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
