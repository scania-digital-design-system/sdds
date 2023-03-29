import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown',
  styleUrl: 'header-dropdown.scss',
  shadow: true,
})
export class HeaderDropdown {
  @Element() host: HTMLElement;

  /** The label of the button that opens the dropdown.
   * This is an alternative to the button-label slot. */
  @Prop() buttonLabel: string;

  /** If the dropdown icon (downwards chevron) should be hidden. */
  @Prop() noDropdownIcon: boolean = false;

  /** If the button that opens the dropdown should appear selected. */
  @Prop() selected: boolean = false;

  @State() open: boolean = false;

  @State() buttonEl?: HTMLSddsHeaderButtonElement;

  @Listen('click', { target: 'document' })
  onAnyClick(event: MouseEvent) {
    // Source: https://lamplightdev.com/blog/2021/04/10/how-to-detect-clicks-outside-of-a-web-component/
    const isClickOutside = !event.composedPath().includes(this.host as any);
    if (isClickOutside) {
      this.open = false;
    }
  }

  toggleDropdown() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'state-open': this.open,
          }}
        >
          <sdds-header-button
            class="button"
            active={this.open}
            onClick={() => {
              this.toggleDropdown();
            }}
            ref={(el) => {
              this.buttonEl = el;
            }}
            selected={this.selected}
          >
            <slot name="button-icon" slot="icon"></slot>
            {this.buttonLabel}
            <slot name="button-label"></slot>
            {!this.noDropdownIcon && (
              <sdds-icon class="dropdown-icon" name="chevron_down" size="16px"></sdds-icon>
            )}
          </sdds-header-button>
          {this.buttonEl && (
            <sdds-popover-canvas
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
