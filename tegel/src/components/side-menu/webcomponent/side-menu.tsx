import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { dfs, isFocusable } from '../../../utils/utils';

export type CollapseEvent = {
  collapsed: boolean;
};

type Props = {
  collapsed: boolean;
};

export type InternalSddsSideMenuPropChange = {
  changed: Array<keyof Props>;
} & Partial<Props>;

const GRID_LG_BREAKPOINT = '992px';
const OPENING_ANIMATION_DURATION = 400;
const INITIALIZE_ANIMATION_DELAY = 500;

@Component({
  tag: 'sdds-side-menu',
  styleUrl: 'side-menu.scss',
  shadow: true,
})
export class SddsSideMenu {
  @Element() host: HTMLSddsSideMenuElement;

  /** Applicable only for mobile. If the side menu is open or not. */
  @Prop({ reflect: true }) open: boolean = false;

  /** Applicable only for desktop. If the side menu should always be shown. */
  @Prop({ reflect: true }) persistent: boolean = false;

  /** If the side menu is collapsed. Only a persistent desktop menu can be collapsed.
   * NOTE: Only use this if you have prevented the automatic collapsing with preventDefault on the sddsCollapse event. */
  @Prop({ reflect: true }) collapsed: boolean = false;

  @State() isUpperSlotEmpty: boolean = false;

  @State() isClosed: boolean = true;

  @State() isOpen: boolean = false;

  @State() isClosing: boolean = false;

  @State() isCollapsed: boolean = false;

  @State() isOpening: boolean = false;

  private matchesLgBreakpointMq: MediaQueryList;

  handleMatchesLgBreakpointChange: (e: MediaQueryListEvent) => void = (e) => {
    const isBelowLg = !e.matches;
    if (isBelowLg) {
      this.collapsed = false;
    }
  };

  connectedCallback() {
    this.matchesLgBreakpointMq = window.matchMedia(`(min-width: ${GRID_LG_BREAKPOINT})`);
    this.matchesLgBreakpointMq.addEventListener('change', this.handleMatchesLgBreakpointChange);
    this.isCollapsed = this.collapsed;
  }

  componentDidLoad() {
    setTimeout(() => this.onOpenChange(this.open), INITIALIZE_ANIMATION_DELAY);

    const upperSlot = this.host.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    const upperSlotElements = upperSlot.assignedElements();
    const hasUpperSlotElements = upperSlotElements?.length > 0;

    if (!hasUpperSlotElements) {
      this.isUpperSlotEmpty = true;
    }
  }

  disconnectedCallback() {
    this.matchesLgBreakpointMq.removeEventListener('change', this.handleMatchesLgBreakpointChange);
  }

  @Watch('open')
  onOpenChange(newVal: boolean, oldVal?: boolean) {
    if (newVal && !oldVal) {
      this.setOpening();
    }
    if (!newVal && oldVal) {
      this.setClosing();
    }
  }

  @Watch('collapsed')
  onCollapsedChange(newVal: boolean) {
    /** Emits the internal collapse event when the prop has changed. */
    this.internalSddsSideMenuPropChange.emit({
      changed: ['collapsed'],
      collapsed: newVal,
    });

    this.isCollapsed = newVal;
  }

  @Watch('isOpening')
  onIsOpenChange(newVal: boolean) {
    if (newVal) {
      const firstFocusableElement = dfs(this.host, isFocusable, true);
      firstFocusableElement.focus();
    }
  }

  /** Event that is emitted when the side menu is collapsed. */
  @Event({
    eventName: 'sddsCollapse',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  sddsCollapse: EventEmitter<CollapseEvent>;

  /** @internal Broadcasts collapsed state to child components. */
  @Event({
    eventName: 'internalSddsCollapse',
    bubbles: true,
    cancelable: false,
    composed: true,
  })
  internalSddsCollapse: EventEmitter<CollapseEvent>;

  /** @internal Broadcasts collapsed state to child components. */
  @Event({
    eventName: 'internalSddsSideMenuPropChange',
    bubbles: true,
    cancelable: false,
    composed: true,
  })
  internalSddsSideMenuPropChange: EventEmitter<InternalSddsSideMenuPropChange>;

  @Listen('internalSddsCollapse', { target: 'body' })
  collapsedSideMenuEventHandler(event: CustomEvent<CollapseEvent>) {
    this.collapsed = event.detail.collapsed;
  }

  async setOpening() {
    this.isClosed = false;

    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
    this.isOpening = true;

    await new Promise((resolve) => {
      setTimeout(resolve, OPENING_ANIMATION_DURATION);
    });
    this.isOpening = false;
    this.isOpen = true;
  }

  async setClosing() {
    this.isOpen = false;
    this.isClosing = true;

    await new Promise((resolve) => {
      setTimeout(resolve, OPENING_ANIMATION_DURATION);
    });
    this.isClosing = false;
    this.isClosed = true;
  }

  render() {
    return (
      <Host role="navigation">
        <div
          class={{
            'wrapper': true,
            'state-upper-slot-empty': this.isUpperSlotEmpty,
            'state-open': this.isOpen || this.isOpening,
            'state-closed': this.isClosed,
          }}
        >
          <slot name="overlay"></slot>
          <aside class={`menu`}>
            <slot name="close-button"></slot>
            <div class="sdds-side-menu-wrapper">
              <ul class={`sdds-side-menu-list sdds-side-menu-list-upper`}>
                <slot></slot>
              </ul>
              <ul class={`sdds-side-menu-list sdds-side-menu-list-end`}>
                <slot name="end"></slot>
              </ul>
            </div>
            <slot name="sticky-end"></slot>
          </aside>
        </div>
      </Host>
    );
  }
}
