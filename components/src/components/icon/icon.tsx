import {
  Component, h, Prop, State, Watch
} from '@stencil/core';

@Component({
  tag: 'sdds-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  @Prop() name = 'question';

  @State() icon: any;

  @Watch('name')
  async loadIcon(){
    try {
      // dynamic import icon from @scania/icons
      this.icon = await import(`@scania/icons/dist/${this.name}`);
    } catch(err) {
      console.warn(`Icon ${this.name} does not exist in SDDS package. Make sure you have installed @scania/icons package`);
      this.name = 'truck' // If icon not found, display a truck icon
    }
   
  }

  componentWillLoad() {
    this.loadIcon();
  }

  render() {
    return [
      <svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${this.icon !== undefined ? this.icon.default.width : '0'} ${this.icon!== undefined ? this.icon.default.height : '0'}`}>
        <path fill='currentColor' d={this.icon ? this.icon.default.definition : ''} />
      </svg>,
    ];
  }
}
