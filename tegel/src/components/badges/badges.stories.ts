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
    },
    value: {
      name: 'Value',
      description: 'Set a value to show on the badge',
      control: {
        type: 'number',
      },
      if: { arg: 'value' || 'visible', truthy: true },
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

const Template = (args) => {
  const valueString = args.value != null ? args.value.toString() : ''; // convert to string
  return formatHtmlPreview(`<sdds-badges value=${valueString} is-visible=${args.visible} size="${args.size}">
      </sdds-badges>`);
};
export const Default = Template.bind({});
Default.args = {};

const demoTemplate = (args) => {
  const valueString = args.value != null ? args.value.toString() : ''; // convert to string
  return formatHtmlPreview(`
    <div class="badges-demo-box">
      <sdds-badges class="${
        args.size === 'sm' ? 'badges-demo--small' : 'badges-demo--default'
      }" value='${valueString}' is-visible=${args.visible} size="${args.size}" >
      </sdds-badges>
    </div>`);
};
Default.parameters = {
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
};
export const WithDemoComponent = demoTemplate.bind({});
WithDemoComponent.args = {
  value: 2,
};
WithDemoComponent.parameters = {
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
};
