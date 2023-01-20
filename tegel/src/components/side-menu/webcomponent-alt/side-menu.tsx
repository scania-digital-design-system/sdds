import { Component, h, Host, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-v2',
  styleUrl: 'side-menu.scss',
  shadow: true,
})
export class SddsSideMenu {
  @Prop() open: boolean = false;

  @Prop({ reflect: true }) persistent: boolean = false;

  @State() state_isClosed: boolean = true;

  @State() state_isOpen: boolean = false;

  @State() state_isClosing: boolean = false;

  @State() state_isOpening: boolean = false;

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
            'menu': true,
            'menu--open': this.state_isOpen || this.state_isOpening,
            'menu--closed': this.state_isClosed,
          }}
        >
          <slot name="overlay"></slot>
          <aside class={`sdds-side-menu-full-width`}>
            <slot name="close-button"></slot>
            <div class="sdds-side-menu-wrapper">
              <ul class={`sdds-side-menu-list`}>
                <slot></slot>
              </ul>
              <ul class={`sdds-side-menu-list`}>
                <slot name="end"></slot>
              </ul>
            </div>
          </aside>
        </div>
      </Host>
    );
  }
}
