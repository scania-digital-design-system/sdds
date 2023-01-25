import {
  Component,
  Host,
  h,
  Prop,
  Method,
  Element,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-v2',
  styleUrl: 'header-launcher.scss',
  shadow: true,
})
export class HeaderLauncher {
  /** Opens and closes the launcher */
  @Prop() open: boolean = false;

  @Prop() variant: 'list' | 'grid' = 'list';

  parentSlot: string;

  @Element() host: HTMLElement;

  @Method()
  async toggleLauncher() {
    if (!this.open) {
      this.childOpenedEvent.emit();
    }
    this.open = !this.open;
  }

  @Listen('click', { target: 'window' })
  onAnyClick(event: MouseEvent) {
    // Source: https://lamplightdev.com/blog/2021/04/10/how-to-detect-clicks-outside-of-a-web-component/
    const isClickOutside = !event.composedPath().includes(this.host as any);
    if (isClickOutside) {
      this.open = false;
    }
  }

  connectedCallback() {
    this.parentSlot = this.host.parentElement.slot;
  }

  @Listen('closeAllEvent', { target: 'body' })
  handleCloseAllEvent() {
    this.open = false;
  }

  @Event({
    eventName: 'childOpenedEvent',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  childOpenedEvent: EventEmitter;

  // TODO for tomorrow -- Use this component as a base,
  // add clickoutside listener, refactor css, and event names
  // use own component for button ☑️
  render() {
    return (
      <Host>
        <div
          class={{
            'wrapper': true,
            'state--open': this.open,
          }}
        >
          <button
            class={`${this.open ? 'open' : 'closed'}`}
            onClick={() => {
              this.toggleLauncher();
            }}
          >
            <sdds-icon name="bento" size="20px"></sdds-icon>
          </button>

          <div class="menu">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
