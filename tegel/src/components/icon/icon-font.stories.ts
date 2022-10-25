import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from './iconsArray';
import readme from './readme.md';

export default {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    icon: {
      name: 'Icon name',
      control: {
        type: 'select',
        options: iconsNames,
      },
    },
    size: {
      name: 'Size in pixels',
      control: {
        type: 'range',
        min: 16,
        max: 100,
        step: 4,
      },
    },
  },
};

const IconFontTemplate = args =>
  formatHtmlPreview(`
  <style>
    @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
    i {font-size: ${args.size}px;}
  </style>

  <i class="sdds-icon ${args.icon}"></i>
  `);

export const Native = IconFontTemplate.bind({});

Native.args = {
  icon: 'truck',
  size: 32,
};
