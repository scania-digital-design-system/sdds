import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-accordion-item',
  styleUrl: './../accordion.scss',
  shadow: true,
})
export class AccordionItem {
  /** The header gives users the context about the additional information available inside the panel */
  @Prop() header: string = '';

  /** Icon can be placed after or before accordion header. Values accepted: `prefix` or `suffix`
   *  Default value is `suffix` */
  @Prop() affix: 'prefix' | 'suffix' = 'suffix';

  /** Disabled option in `boolean`. */
  @Prop() disabled: boolean = false;

  /** Set to true to expand panel open */
  @Prop() expanded: boolean = false;

  /** When true 16px on right padding instead of 64px */
  // @Prop() paddingReset: boolean = false;

  /** Override the style of the panel. Note that it is passed as an object with css properties in camelCase. */
  @Prop() panelStyle: undefined | { [key: string]: string };

  @Watch('panelStyle')
  onPanelStyleChange(value: undefined | { [key: string]: string }) {
    if (typeof value === 'object') {
      // debugger;
      Object.entries(value).forEach(([k, v]) => {
        this.panelEl.style.setProperty(k, v);
      });
    } else {
      // debugger;
      this.panelEl.style.cssText = '';
    }
  }

  /** Fires after the accordion item is closed or opened, emitting the value (as boolean) of the current state of the accordion */
  @Event({
    eventName: 'accordionItemToggle',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  accordionItemToggle: EventEmitter<boolean>;

  panelEl: HTMLElement;

  openAccordion() {
    this.expanded = !this.expanded;

    this.accordionItemToggle.emit(this.expanded);
  }

  componentWillLoad() {
    this.onPanelStyleChange(this.panelStyle);
  }

  render() {
    // let itemStyle = '';
    // const itemStyleO: { [key: string]: string } = {};
    // if (this.padding) {
    //   const p = this.padding;
    //   if (typeof p === 'object') {
    //     itemStyle = `
    //       ${p.top ? `padding-top: ${p.top};` : ''}
    //       ${p.right ? `padding-right: ${p.right};` : ''}
    //       ${p.bottom ? `padding-bottom: ${p.bottom};` : ''}
    //       ${p.left ? `padding-left: ${p.left};` : ''}
    //     `;
    //     if (p.top) itemStyleO.paddingTop = p.top;
    //     if (p.right) itemStyleO.paddingRight = p.right;
    //     if (p.bottom) itemStyleO.paddingBottom = p.bottom;
    //     if (p.left) itemStyleO.paddingLeft = p.left;
    //   } else {
    //     itemStyle = `padding: ${this.padding}`;
    //     itemStyleO.padding = p;
    //   }
    // }

    return (
      <div
        class={`sdds-accordion-item 
        ${this.disabled ? 'disabled' : ''} 
        ${this.expanded ? 'expanded' : ''}
        `}
      >
        <div class={`sdds-accordion-header-${this.affix}`} onClick={() => this.openAccordion()}>
          <div class="sdds-accordion-title">{this.header}</div>
          <div class="sdds-accordion-icon">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* @ts-ignore ts(2322) */}
        <div
          class={`sdds-accordion-panel`}
          ref={(ref) => {
            this.panelEl = ref as HTMLElement;
          }}
        >
          <slot></slot>
        </div>
      </div>
    );
  }
}
