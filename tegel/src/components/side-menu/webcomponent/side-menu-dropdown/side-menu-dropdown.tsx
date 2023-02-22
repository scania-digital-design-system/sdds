import { Component, Element, Fragment, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown',
  styleUrl: 'side-menu-dropdown.scss',
  shadow: true,
})
export class SideMenuDropdown {
  @Element() host: HTMLSddsSideMenuButtonElement;

  /** If the dropdown should be open from the start */
  @Prop() initialOpen: boolean = false;

  @Prop() buttonLabel: string;

  @Prop() selected: boolean = false;

  /** Placement of the dropdown menu relative to the button TODO*/
  @Prop() placement: 'start' | 'end' = 'start';

  @State() open: boolean = false;

  @State() hoverState: { isHovered: boolean; updatedAt: number };

  @State() collapsed: boolean = false;

  @Listen('tegelCollapsedSideMenu', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  @Listen('pointerenter')
  onEventPointerEnter() {
    this.setHoverStateOpen();
  }

  @Listen('focusin')
  onEventFocus() {
    this.setHoverStateOpen();
  }

  @Listen('pointerleave')
  onEventPointerLeave() {
    this.setHoverStateClosed();
  }

  @Listen('focusout')
  onEventBlur() {
    this.setHoverStateClosed();
  }

  setHoverStateOpen() {
    this.hoverState = { isHovered: true, updatedAt: Date.now() };
  }

  setHoverStateClosed() {
    const leftAt = Date.now();
    const toleranceInMilliseconds = 150;
    setTimeout(() => {
      if (this.hoverState.isHovered && this.hoverState.updatedAt < leftAt) {
        this.hoverState = { isHovered: false, updatedAt: Date.now() };
      }
    }, toleranceInMilliseconds);
  }

  getIsOpenState() {
    return this.collapsed ? this.hoverState?.isHovered : this.open;
  }

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
    this.open = this.initialOpen;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'wrapper': true,
            'state--open': this.getIsOpenState(),
            'state--collapsed': this.collapsed,
          }}
        >
          <sdds-side-menu-button
            class="button"
            active={this.getIsOpenState()}
            selected={this.selected}
            onClick={() => {
              this.open = !this.open;
            }}
          >
            <slot name="button-icon" slot="icon"></slot>
            {!this.collapsed && (
              <Fragment>
                {this.buttonLabel}
                <slot name="button-label"></slot>
                <sdds-icon class="dropdown-icon" name="chevron_down" size="16px"></sdds-icon>
              </Fragment>
            )}
          </sdds-side-menu-button>
          <div class="menu">
            {this.collapsed && (
              <h3 class="heading-collapsed">
                {this.buttonLabel}
                <slot name="button-label"></slot>
              </h3>
            )}
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
