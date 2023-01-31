import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown-v2',
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
            'state--closed': !this.open,
            'state--placement-end': this.placement === 'end',
          }}
        >
          <sdds-header-button-v2
            isActive={this.open}
            onClick={() => {
              this.toggleDropdown();
            }}
          >
            {this.buttonLabel}
            <slot name="button-label"></slot>
            {!this.noDropdownIcon && (
              <sdds-icon class="dropdown-icon" name="chevron_down" size="16px"></sdds-icon>
            )}
          </sdds-header-button-v2>
          <div class="menu">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
