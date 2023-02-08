import { Component, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-v2',
  styleUrl: 'side-menu.scss',
  shadow: true,
})
export class SddsSideMenu {
  /** Broadcasts collapsed state to child components */
  @Event({
    eventName: 'tegelCollapsedSideMenu',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  collapsedSideMenuEventEmitter: EventEmitter<any>;

  @Prop() open: boolean = false;

  @Prop({ reflect: true }) persistent: boolean = false;

  /** If collapsed, only a persistent desktop menu can be collapsed */
  @Prop({ reflect: true }) collapsed: boolean = false;

  @State() state_isClosed: boolean = true;

  @State() state_isOpen: boolean = false;

  @State() state_isClosing: boolean = false;

  @State() state_isOpening: boolean = false;

  connectedCallback() {
    this.collapsedSideMenuEventEmitter.emit({
      collapsed: this.collapsed,
    });
  }

  componentDidLoad() {
    setTimeout(() => this.onOpenChange(this.open), 500);
  }

  @Watch('open')
  onOpenChange(newValue: boolean, oldValue?: boolean) {
    if (newValue && !oldValue) {
      this.setOpening();
    }
    if (!newValue && oldValue) {
      this.setClosing();
    }
  }

  @Watch('collapsed')
  onCollapsedChange(newValue: boolean) {
    this.collapsedSideMenuEventEmitter.emit({
      collapsed: newValue,
    });
  }

  setOpening() {
    this.state_isClosed = false;
    setTimeout(() => {
      this.state_isOpening = true;

      setTimeout(() => {
        this.state_isOpening = false;
        this.state_isOpen = true;
      }, 400);
    });
  }

  setClosing() {
    this.state_isOpen = false;
    this.state_isClosing = true;

    setTimeout(() => {
      this.state_isClosing = false;
      this.state_isClosed = true;
    }, 400);
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'wrapper': true,
            'state--open': this.state_isOpen || this.state_isOpening,
            'state--closed': this.state_isClosed,
          }}
        >
          <slot name="overlay"></slot>
          <aside class={`menu`}>
            <slot name="close-button"></slot>
            <div class="sdds-side-menu-wrapper">
              <ul class={`sdds-side-menu-list`}>
                <slot></slot>
              </ul>
              <ul class={`sdds-side-menu-list sdds-side-menu-list-end`}>
                <slot name="end"></slot>
              </ul>
            </div>
          </aside>
        </div>
      </Host>
    );
  }
}
