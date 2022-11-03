import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Badges',
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
      table: {
        defaultValue: { summary: true },
      },
    },
    value: {
      name: 'Value',
      description: 'Set a value to show on the badge',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    size: {
      name: 'Size',
      description: 'Size of the component',
      options: ['default', 'sm'],
      control: {
        type: 'radio',
        labels: {
          default: 'Default',
          sm: 'Small',
        },
      },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
};

const Template = args =>
  formatHtmlPreview(`<sdds-badges value=${args.value} is-visible=${args.visible} size="${args.size}">
      </sdds-badges>`);
export const Default = Template.bind({});
Default.args = {
  visible: true,
  value: '8',
  size: 'default',
};

const demoTemplate = args =>
  formatHtmlPreview(`
      <style>
        .badges-demo-box {
          margin:5px;
          height: 32px;
          width: 32px;
          position: relative;
          background-color: var(--sdds-grey-500);
        }
        .badges-demo--default {
          position: absolute;
          left: 16px;
          top: -5px;
        }
        .badges-demo--small {
          position: absolute;
          left: 26px;
          top: -2px;
        }
      </style>
      <div class="badges-demo-box">
      <sdds-badges class="${args.size === 'sm' ? 'badges-demo--small' : 'badges-demo--default'}" value=${args.value} is-visible=${args.visible} size="${args.size}" >
      </sdds-badges>
      </div>`);

export const WithDemoComponent = demoTemplate.bind({});
WithDemoComponent.args = {
  visible: true,
  value: 2,
  size: 'default',
};
