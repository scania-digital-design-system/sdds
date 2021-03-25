import {
  Component, h, Host,
} from '@stencil/core';
@Component({
  tag: 'sdds-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {

  render() {
    return (
      <Host >
        <div class="sdds-modal">
        class="sdds-modal"
        </div>
        <slot name="modal"></slot>
      </Host>
    )
  }
}
