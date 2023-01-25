import { Component, h, State, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-footer',
  styleUrl: 'sdds-footer.scss',
  shadow: true,
})
export class SddsFooter {
  @State() hasTopPart: boolean;

  @Element() host: HostElement;

  connectedCallback() {
    const children = Array.from(this.host.children);
    this.hasTopPart = children.some((element) => element.slot === 'top');
  }

  render() {
    return (
      <footer>
        {this.hasTopPart && (
          <nav>
            <div class="footer-top">
              <slot name="top"></slot>
            </div>
          </nav>
        )}
        <div class="footer-main">
          <nav class="footer-main-top">
            <div class="footer-bottom-left">
              <slot name="main-left"></slot>
            </div>
            <div class="footer-bottom-right">
              <slot name="main-right"></slot>
            </div>
          </nav>
          <div class="footer-main-bottom">
            <p class="copyright">Copyright © {new Date().getFullYear()} Scania</p>
            <div class="brand">
              <p>Scania</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
