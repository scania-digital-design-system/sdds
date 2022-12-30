import { Component, h, Host, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu',
  styleUrl: 'side-menu-component.scss',
  shadow: true,
})
export class SddsSideMenu {
  @Prop() collapsed: boolean = false;

  @Prop() collapsable: boolean = false;

  @Prop() collapserText: string = 'Collapse';

  @Prop() collapserIcon: string = 'arrow_left';

  @Prop() headerSideMenu: boolean = false;

  @Element() host: HTMLElement;

  connectedCallback() {
    this.tablePropsChangedEvent.emit({
      collapsed: this.collapsed,
    });
  }

  /** Broadcasts changes to the tables props */
  @Event({
    eventName: 'collapseSideMenuEvent',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  tablePropsChangedEvent: EventEmitter<any>;

  @Watch('collapsed')
  enableMultiselectChanged() {
    this.tablePropsChangedEvent.emit({
      collapsed: this.collapsed,
    });
  }

  render() {
    return (
      <Host
        class={`sdds-side-menu-${this.collapsed ? 'collapsed' : 'full-width'} ${
          this.headerSideMenu ? 'side-menu-header' : ''
        }`}
      >
        <div class="sdds-side-menu-wrapper">
          <ul class={`sdds-side-menu-list ${this.collapsed ? 'collapsed' : 'full-width'}`}>
            <slot name="top"></slot>
          </ul>
          <ul class={`sdds-side-menu-list ${this.collapsed ? 'collapsed' : 'full-width'}`}>
            <slot name="bottom"></slot>
          </ul>
        </div>
        {this.collapsable && (
          <button
            class={`sdds-side-menu-collapser ${this.collapsed ? 'collapsed' : 'full-width'}`}
            onClick={() => {
              this.collapsed = !this.collapsed;
            }}
          >
            <sdds-icon size="24px" name="arrow_left"></sdds-icon>
            {!this.collapsed && this.collapserText}
          </button>
        )}
      </Host>
    );
  }
}
