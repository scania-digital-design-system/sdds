import {
  Component, h, Prop, State, Element, Watch,
} from '@stencil/core';

import store from '../../store';

@Component({
  tag: 'c-content',
  styleUrl: 'content.scss',
  shadow: true,
})
export class Content {
  /** Per default, this will inherit the value from c-theme name property */
  @Prop({ mutable: true }) theme: string;

  /** This property is in experimental state */
  @Prop() router: boolean;

  @State() store = store.state;

  @State() tagName: string;

  @State() currentTheme = { components: [] };

  @Element() el: HTMLElement;

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.theme.current;
    this.currentTheme = this.store.theme.items[this.theme];
  }

  componentWillLoad() {
    this.store.theme = store.get('theme');

    store.use({set: (function(value){
      if(value === 'theme') this.theme = store.state.theme.current;
    }).bind(this)});

    this.setTheme(this.theme);

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  render() {
    return [
      this.currentTheme ? <style>{this.currentTheme.components[this.tagName]}</style> : '',

      // Move the router related things a router component
      // if (this.router) {
      //   return (
      //     <stencil-router>
      //       <stencil-route-switch scrollTopOffset={0}>
      //         <stencil-route url='/' component='app-home' exact={true} />
      //         <stencil-route url='/profile/:name' component='app-profile' />
      //       </stencil-route-switch>
      //     </stencil-router>
      //   );
      // } else {
      <slot />,
      // }
    ];
  }
}
