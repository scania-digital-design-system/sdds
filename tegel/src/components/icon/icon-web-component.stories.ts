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
      },
      options: iconsNames,
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
  args: {
    size: 32,
    icon: 'truck',
  },
};

const IconTemplate = args =>
  formatHtmlPreview(`
  <sdds-icon name="${args.icon}" size="${`${args.size.toString()}px`}" />
  `);

export const WebComponent = IconTemplate.bind({});

WebComponent.args = {};
