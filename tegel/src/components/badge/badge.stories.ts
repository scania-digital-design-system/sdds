import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Badge',
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    visible: {
      name: 'Visible',
      description: 'Toggle visibility of badge',
      control: {
        type: 'boolean',
      },
    },
    value: {
      name: 'Value',
      description: 'Set a value to show on the badge',
      control: {
        type: 'number',
      },
      if: { arg: 'size', neq: 'sm' },
    },
    size: {
      name: 'Size',
      description: 'Size of the component',
      options: {
        Default: 'default',
        Small: 'sm',
      },
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    visible: true,
    value: 1,
    size: 'default',
  },
};

const Template = ({ value, size, visible }) =>
  formatHtmlPreview(`<sdds-badges
    ${value ? `value="${value}"` : ''}
    is-visible=${visible}
    size="${size}">
  </sdds-badges>`);

export const Default = Template.bind({});

const WithDemoTemplate = ({ value, size, visible }) =>
  formatHtmlPreview(
    `
    <style>
    .badges-demo-box {
      margin:5px;
      height: 32px;
      width: 32px;
      position: relative;
      background-color: #C4C4C4;
    }

    .badges-demo-box sdds-badges[size="default"]{
      position: absolute;
      left: 16px;
      top: -5px;
    }

    .badges-demo-box sdds-badges[size="sm"]{
      position: absolute;
      left: 26px;
      top: -2px;
    }
    </style>
    <div class="badges-demo-box">
      <sdds-badges
        ${value ? `value="${value}"` : ''}
        is-visible=${visible}
        size="${size}">
      </sdds-badges>
    </div>`,
  );

export const WithDemoComponent = WithDemoTemplate.bind({});
