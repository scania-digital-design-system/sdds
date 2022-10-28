import { Component, h, Prop, State, Element } from '@stencil/core';

// import hljs from 'highlight.js';
// Highlight JS is not supported in IE 11, fallback provided in the code-sample.scss

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import hljs from 'https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/highlight.min.js';

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { js, xml, css } from 'https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/go.min.js';

@Component({
  tag: 'c-code-sample',
  styleUrl: 'code-sample.scss',
  shadow: true,
})
export class Field {
  @Prop() type = 'html';

  @State() code;

  @Element() el: HTMLElement;

  componentWillLoad() {
    // FIXME: Would be better to make the code-sample component not initiating
    // the component but only render the html as text

    const parsed = this.el.innerHTML
      .replace(/"/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/<!---->/g, '');

    if (!document.head.attachShadow) {
      hljs.configure({
        classPrefix: 'sc-c-code-sample hljs-',
        useBR: true,
      });
    }

    hljs.registerLanguage('js', js);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('css', css);

    this.code = hljs.highlight(this.type, parsed, false).value;
  }

  render() {
    return [
      <slot />,
      <pre>
        <code class={this.type} {...{ innerHTML: this.code }}></code>
      </pre>,
    ];
  }
}
