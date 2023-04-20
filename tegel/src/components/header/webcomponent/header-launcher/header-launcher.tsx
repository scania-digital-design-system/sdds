import { Component, Host, h, Element, Listen, State } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-launcher',
  styleUrl: 'header-launcher.scss',
  shadow: true,
})
export class HeaderLauncher {
  @Element() host: HTMLElement;

  @State() open: boolean = false;

  @State() buttonEl?: HTMLSddsHeaderLauncherButtonElement;

  @State() hasListTypeMenu = false;

  private uuid: string = crypto.randomUUID();

  private ariaAttributes: Attributes;

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
    this.ariaAttributes = { ...this.ariaAttributes, ...inheritAriaAttributes(this.host, ['role']) };

    const buttonAttributes = {
      ...this.ariaAttributes,
      'aria-expanded': `${this.open}`,
      'aria-controls': `launcher-${this.uuid}`,
      'class': 'button',
      'active': this.open,
      'onClick': () => {
        this.toggleLauncher();
      },
      'ref': (el: HTMLSddsHeaderLauncherButtonElement) => {
        this.buttonEl = el;
      },
    };

    return (
      <Host>
        <div
          class={{
            'wrapper': true,
            'state-open': this.open,
            'state-list-type-menu': this.hasListTypeMenu,
          }}
        >
          <sdds-header-launcher-button {...buttonAttributes}></sdds-header-launcher-button>

          {this.buttonEl && (
            <sdds-popover-canvas
              id={`sdds-launcher-${this.uuid}`}
              class="menu"
              referenceEl={this.buttonEl}
              placement="bottom-start"
              show={this.open}
              offsetDistance={0}
              modifiers={[
                {
                  name: 'flip',
                  options: {
                    fallbackPlacements: [],
                  },
                },
              ]}
            >
              <slot></slot>
            </sdds-popover-canvas>
          )}
        </div>
      </Host>
    );
  }
}
