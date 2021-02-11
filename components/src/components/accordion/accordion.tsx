import {
  Component, h, Prop, Element
} from '@stencil/core';

@Component({
  tag: 'c-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})

export class Accordion {
  @Element() el: HTMLElement;
  
  /** Enable or disable divider lines between items */
  @Prop() divider: boolean = true;

  componentWillLoad() {
    this.el.childNodes.forEach(element => {
      element["divider"] = this.divider;
    });
  }

  render() {
    return (
      <div class={`sdds-accordion ${(this.divider ? 'sdds-accordion-divider':'')}`}>
        <slot></slot>
      </div>
    )
  }

}