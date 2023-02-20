import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown',
  styleUrl: 'header-dropdown.scss',
  shadow: true,
})
export class HeaderDropdown {
  /** Opens and closes the dropdown */
  @Prop({ reflect: true }) open: boolean = false;

  @Prop() buttonLabel: string;

  @Prop() active: boolean = false;

  @Prop() noDropdownIcon: boolean = false;

  /** Placement of the dropdown menu relative to the button TODO*/
  @Prop() placement: 'start' | 'end' = 'start';

  @Element() host: HTMLElement;

  @State() buttonEl?: HTMLSddsHeaderButtonElement;

  @Listen('click', { target: 'window' })
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
            'state--open': this.open,
            'state--placement-end': this.placement === 'end',
          }}
        >
          <sdds-header-button
            class="button"
            isActive={this.open}
            onClick={() => {
              this.toggleDropdown();
            }}
            ref={(el) => {
              this.buttonEl = el;
            }}
          >
            <slot name="button-icon"></slot>
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
