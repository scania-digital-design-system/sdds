import { Component, h, State, Element } from '@stencil/core';
import { Host, HostElement, Prop } from '@stencil/core/internal';

@Component({
  tag: 'sdds-footer',
  styleUrl: 'sdds-footer.scss',
  shadow: true,
})
export class SddsFooter {
  /** Mode variant of the component, based on current mode. */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  @State() hasTopPart: boolean;

  @Element() host: HostElement;

  connectedCallback() {
    const children = Array.from(this.host.children);
    this.hasTopPart = children.some((element) => element.slot === 'top');
  }

  render() {
    return (
      <Host class={`${this.modeVariant ? `sdds-mode-variant-${this.modeVariant}` : ''}`}>
        <footer>
          {this.hasTopPart && (
            <div class="footer-top">
              <slot name="top"></slot>
            </div>
          )}
          <div class="footer-main">
            <div class="footer-main-top">
              <div class="footer-bottom-left">
                <slot name="main-left"></slot>
              </div>
              <div class="footer-bottom-right">
                <slot name="main-right"></slot>
              </div>
            </div>
            <div class="footer-main-bottom">
              <small class="copyright">Copyright © {new Date().getFullYear()} Scania</small>
              <div class="brand">
                <p>Scania</p>
              </div>
            </div>
          </div>
        </footer>
      </Host>
    );
  }
}
