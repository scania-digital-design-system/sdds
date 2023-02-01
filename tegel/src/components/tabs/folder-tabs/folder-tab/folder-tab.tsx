import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-folder-tab',
  styleUrl: 'folder-tab.scss',
  shadow: true,
})
export class InlineTabsChild {
  @Prop() label: string;

  @Prop() disabled: boolean = false;

  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        <button
          class={`
        ${this.selected ? 'selected' : ''}
        ${this.disabled ? 'disabled' : ''}
        `}
        >
          {this.label}
        </button>
      </Host>
    );
  }
}
