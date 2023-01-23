import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-inline-tab',
  styleUrl: 'inline-tab.scss',
  shadow: true,
})
export class InlineTabsChild {
  @Prop() label: string;

  @Prop() disabled: boolean = false;

  @Prop() default: boolean = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
