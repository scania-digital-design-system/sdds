import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: true,
})
export class AccordionItem {
  /** The header gives users the context about the additional information available inside the panel */
  @Prop() header: string = '';

  /** Changes where the expand icon is placed. */
  @Prop() expandIconPosition: 'start' | 'end' = 'end';

  /** Disabled option in `boolean`. */
  @Prop() disabled: boolean = false;

  /** Set to true to expand panel open */
  @Prop() expanded: boolean = false;

  /** When true 16px on right padding instead of 64px */
  @Prop() paddingReset: boolean = false;

  /** Fires after the accordion item is closed or opened, emitting the value (as boolean) of the current state of the accordion */
  @Event({
    eventName: 'accordionItemToggle',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  accordionItemToggle: EventEmitter<boolean>;

  openAccordion() {
    this.expanded = !this.expanded;

    this.accordionItemToggle.emit(this.expanded);
  }

  render() {
    return (
      <Host>
        <div
          class={`sdds-accordion-item 
        ${this.disabled ? 'disabled' : ''} 
        ${this.expanded ? 'expanded' : ''}
        `}
        >
          <div
            class={`sdds-accordion-header-icon-${this.expandIconPosition}`}
            onClick={() => this.openAccordion()}
          >
            <div class="sdds-accordion-title">{this.header}</div>
            <div class="sdds-accordion-icon">
              <sdds-icon name="chevron_down" size="16px"></sdds-icon>
            </div>
          </div>
          <div
            class={`sdds-accordion-panel 
            ${this.paddingReset ? 'sdds-accordion-panel--padding-reset ' : ''}         
            `}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
