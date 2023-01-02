import { Component, h, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu',
  styleUrl: 'side-menu-component.scss',
  shadow: true,
})
export class SddsSideMenu {
  /** Set the side menu as collapsed. */
  @Prop() collapsed: boolean = false;

  /** Make the side menu collapsable */
  @Prop() collapsable: boolean = false;

  /** Text for the collapser, only needed if collapsable = true; */
  @Prop() collapserText: string = 'Collapse';

  /** Icon for the collapser, only needed if collapsable = true; */
  @Prop() collapserIcon: string = 'arrow_left';

  /** Should be true if the side menu is part of a header */
  @Prop() headerSideMenu: boolean = false;

  @Element() host: HTMLElement;

  connectedCallback() {
    this.tablePropsChangedEvent.emit({
      collapsed: this.collapsed,
    });
  }

  /** Broadcasts collapsed state to child components */
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
      <aside
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
      </aside>
    );
  }
}
