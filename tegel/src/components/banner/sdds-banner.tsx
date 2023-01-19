import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-banner',
  styleUrl: 'sdds-banner.scss',
  shadow: true,
})
export class SddsBanner {
  @Prop() icon: string;

  @Prop() header: string;

  @Prop() subheader: string;

  @Prop() linkText: string;

  @Prop() linkHref: string;

  @Prop() state: 'error' | 'information' | 'none' = 'none';

  render() {
    return (
      <Host class={this.state}>
        {console.log(this.icon)}
        {this.icon && (
          <div class={`banner-icon ${this.state}`}>
            <sdds-icon name={this.icon} size="20px"></sdds-icon>
          </div>
        )}
        <div class={`banner-content ${this.state} ${!this.icon ? 'no-icon' : ''}`}>
          {this.header && <span class={`banner-header`}>{this.header}</span>}
          {this.subheader && <span class={`banner-subheader`}>{this.subheader}</span>}
          {this.linkText && this.linkHref && (
            <a class={`banner-link`} href={this.linkHref}>
              {this.linkText}
            </a>
          )}
        </div>
        <div class={`banner-close`}>
          <button>
            <sdds-icon name="cross" size="20px"></sdds-icon>
          </button>
        </div>
      </Host>
    );
  }
}
