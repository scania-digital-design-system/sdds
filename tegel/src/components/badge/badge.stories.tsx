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
    size: {
      name: 'Size',
      description: 'Sets the size of the component.',
      control: {
        type: 'radio',
      },
      options: {
        Large: 'lg',
        Small: 'sm',
      },
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    value: {
      name: 'Value',
      description: 'Sets a value to show on the badge.',
      control: {
        type: 'number',
      },
      if: { arg: 'size', neq: 'sm' },
    },
    hidden: {
      name: 'Hidden',
      description: 'Toggles visibility of the badge.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    size: 'lg',
    value: 1,
    hidden: false,
  },
};

const Template = ({ value, size, hidden }) =>
  formatHtmlPreview(`
    <sdds-badges
      ${value ? `value="${value}"` : ''}
      ${hidden ? 'hidden' : ''}
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
