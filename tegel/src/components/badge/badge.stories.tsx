import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Badge',
  parameters: {
    layout: 'centered',
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=7477%3A297479&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=7477%3A297479&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    visible: {
      name: 'Visible',
      description: 'Toggle visibility of badge',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'Value',
      description: 'Set a value to show on the badge',
      control: {
        type: 'number',
      },
      if: { arg: 'size', neq: 'sm' },
      table: {
        defaultValue: { summary: null },
      },
    },
    size: {
      name: 'Size',
      description: 'Size of the component',
      options: {
        Large: 'lg',
        Small: 'sm',
      },
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
  },
  args: {
    visible: true,
    size: 'lg',
    value: 1,
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
    /* Note: Demo classes used here are just for demo purposes in Storybook */
    .badges-demo-box {
      margin:5px;
      height: 32px;
      width: 32px;
      position: relative;
      background-color: #C4C4C4;
    }

    .badges-demo-box sdds-badges[size="lg"]{
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
