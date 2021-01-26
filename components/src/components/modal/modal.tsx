import {
  Component, h, Prop, State, Host, Element, Watch
} from '@stencil/core';

import BsModal from 'bootstrap/js/src/modal';
import { themeStyle } from '../../helpers/themeStyle';
import store from '../../store';

@Component({
  tag: 'c-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  /** Per default, this will inherit the value from c-theme name property */
  @Prop({ mutable: true }) theme: string;

  /** Bootstrap modal config */
  @Prop() config;

  @Prop() event;

  /** Set to true to open modal */
  @Prop() open: boolean;

  /** Add close icon in modal */
  @Prop() close: boolean = true;

  @State() store = store.state;

  @State() tagName: string;

  @State() currentTheme = { components: [] };

  @State() style: Array<CSSStyleSheet>;

  @State() items: Array<any> = [];

  @State() modal;

  @State() dialog;

  @State() setScrollbar;

  @State() all = false;

  @Element() el;

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.theme.current;
    this.currentTheme = this.store.theme.items[this.theme];
    themeStyle(this.currentTheme, this.tagName, this.style, this.el);
  }

  @Watch('open')
  openDialog(state) {
    if(state) {
      this.modal.show(this.dialog);
    } else {
      this.modal.hide();
    }

    // We need to manually do this here because of no access to 'transitionComplete()'
    this.modal._isTransitioning = false;
  }

  @Watch('config')
  configureModal(config) {
    this.modal = new BsModal(this.el, config);

    this.setScrollbar = this.setScrollbar || this.modal._setScrollbar;

    // We should not set this based on config.backdrop but instead use inline value
    this.modal._setScrollbar = this.config.backdrop ? this.setScrollbar : () => {};
    // this.modal._setScrollbar = this.el.classList.contains('inline') ? () => {} : this.setScrollbar;
  }

  appendStyle() {

    const css = `
      .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
        width: 100vw;
        height: 100vh;
        background-color: #000;
      }
      .modal-backdrop.fade { opacity: 0; }
      .modal-backdrop.show { opacity: 0.5; }`;
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
  }

  componentWillLoad() {
    this.store.theme = store.get('theme');

    store.use({set: (function(value){
      if(value === 'theme') this.theme = store.state.theme.current;
    }).bind(this)});

    this.setTheme(this.theme);

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();

    this.configureModal(this.config);

    this.appendStyle();
  }

  componentDidLoad() {

    this.style = this.el.shadowRoot.adoptedStyleSheets || [];
    
    themeStyle(this.currentTheme, this.tagName, this.style, this.el);

    this.openDialog(this.open);
  }

  render() {
    return (
      <Host class="fade" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document" ref={el => this.dialog = el}>
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header" />
              { this.close ?
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              : '' }
            </div>
            <div class="modal-body">
              <slot />
            </div>
            <div class="modal-footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
