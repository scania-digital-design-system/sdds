import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  @Prop() name = 'scania-truck';

  @State() icon: any;

  @Watch('name')
  async loadIcon() {
    try {
      // dynamic import icon from @scania/icons
      this.icon = await import(`@scania/icons/dist/${this.name}.js`);
    } catch (err) {
      this.name = 'scania-truck'; // If icon not found, display a truck icon
    }
  }

  componentWillLoad() {
    this.loadIcon();
  }

  generateViewBox() {
    // viewbox = minX minY width height
    let viewbox = '0 0 0 0';
    if (this.icon !== undefined) {
      // If icons has transform: translate attributes, add it to the viewbox.
      viewbox = `${
        this.icon.default.hasOwnProperty('transform')
          ? this.getTransformViewBox()
          : '0 0'
      } ${this.icon.default.width} ${this.icon.default.height}`;
    }
    return viewbox;
  }

  getTransformViewBox() {
    const minX = parseFloat(this.icon.default.transform[0]) * -1;
    const minY = parseFloat(this.icon.default.transform[1]) * -1;
    return `${minX} ${minY}`;
  }

  render() {
    return [
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={this.generateViewBox()}>
        <path
          fill="currentColor"
          d={this.icon ? this.icon.default.definition : ''}
        />
      </svg>,
    ];
  }
}
