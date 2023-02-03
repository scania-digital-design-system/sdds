import { Component, Element, Fragment, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-v2',
  styleUrl: 'side-menu-dropdown.scss',
  shadow: true,
})
export class SideMenuDropdown {
  /** Opens and closes the dropdown */
  @Prop({ reflect: true }) open: boolean = false;

  @Prop() buttonLabel: string;

  @Prop() active: boolean = false;

  /** Placement of the dropdown menu relative to the button TODO*/
  @Prop() placement: 'start' | 'end' = 'start';

  @State() isCollapsed: boolean = false;

  @State() hoverState: { isHovered: boolean; updatedAt: number };

  @Element() host: HTMLElement;

  @Listen('pointerenter')
  onEventPointerEnter() {
    this.hoverState = { isHovered: true, updatedAt: Date.now() };
  }

  @Listen('pointerleave')
  onEventPointerLeave() {
    const leftAt = Date.now();
    const toleranceInMilliseconds = 200;
    setTimeout(() => {
      if (this.hoverState.isHovered && this.hoverState.updatedAt < leftAt) {
        this.hoverState = { isHovered: false, updatedAt: Date.now() };
      }
    }, toleranceInMilliseconds);
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'state--open': this.open,
            'state--collapsed': this.isCollapsed,
          }}
        >
          <sdds-side-menu-button-v2
            // isActive={this.open}
            onClick={() => {
              this.open = !this.open;
            }}
          >
            <slot name="button-icon" slot="icon"></slot>
            {!this.isCollapsed && (
              <Fragment>
                {this.buttonLabel}
                <slot name="button-label"></slot>
                <sdds-icon class="dropdown-icon" name="chevron_down" size="16px"></sdds-icon>
              </Fragment>
            )}
          </sdds-side-menu-button-v2>
          <div class="menu">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
