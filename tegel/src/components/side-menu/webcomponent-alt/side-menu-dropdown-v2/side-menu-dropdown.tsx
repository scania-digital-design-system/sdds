import { Component, Element, Fragment, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-v2',
  styleUrl: 'side-menu-dropdown.scss',
  shadow: true,
})
export class SideMenuDropdown {
  @Element() host: HTMLSddsSideMenuButtonV2Element;

  /** Opens and closes the dropdown */
  @Prop({ reflect: true }) open: boolean = false;

  @Prop() buttonLabel: string;

  @Prop() active: boolean = false;

  /** Placement of the dropdown menu relative to the button TODO*/
  @Prop() placement: 'start' | 'end' = 'start';

  @State() hoverState: { isHovered: boolean; updatedAt: number };

  @State() collapsed: boolean = false;

  @Listen('tegelCollapsedSideMenu', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  @Listen('pointerenter')
  onEventPointerEnter() {
    this.hoverState = { isHovered: true, updatedAt: Date.now() };
  }

  @Listen('pointerleave')
  onEventPointerLeave() {
    const leftAt = Date.now();
    const toleranceInMilliseconds = 150;
    setTimeout(() => {
      if (this.hoverState.isHovered && this.hoverState.updatedAt < leftAt) {
        this.hoverState = { isHovered: false, updatedAt: Date.now() };
      }
    }, toleranceInMilliseconds);
  }

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'state--open': this.collapsed ? this.hoverState?.isHovered : this.open,
            'state--collapsed': this.collapsed,
          }}
        >
          <sdds-side-menu-button-v2
            // isActive={this.open}
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
          </sdds-side-menu-button-v2>
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
