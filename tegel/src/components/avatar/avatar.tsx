import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sdds-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class SddsAvatar {
  @Prop() src: string;

  @Prop() alt: string;

  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  get sizeClass() {
    switch (this.size) {
      case 'small':
        return 'sdds-avatar--small';
      case 'medium':
        return 'sdds-avatar--medium';
      case 'large':
        return 'sdds-avatar--large';
      default:
        return 'sdds-avatar--medium';
    }
  }

  render() {
    const fallbackColor = '#7F9CF5';
    const altText = this.alt ? this.alt : 'User avatar';

    return (
      <div class={`sdds-avatar ${this.sizeClass}`}>
        {this.src ? (
          <img class="sdds-avatar-image" src={this.src} alt={altText} />
        ) : (
          <div
            class="sdds-avatar__initial"
            style={{ backgroundColor: fallbackColor }}
            aria-label={altText}
          >
            {this.alt[0]}
          </div>
        )}
      </div>
    );
  }
}
