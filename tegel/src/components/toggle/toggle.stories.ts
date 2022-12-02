import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Toggle',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2479%3A108951&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2479%3A108951&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Small'],
      description: 'Size of the toggle',
    },
    headline: {
      name: 'Headline',
      description: 'Optional value to be used to clarify what the toggle is switching on / off',
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Should it be disabled?',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    size: 'Default',
    headline: '',
    disabled: false,
  },
};

const Template = ({ size, disabled = false, headline = '' }) => {
  let sizeValue = size === 'Small' ? 'sdds-toggle-sm' : '';
  const headlineDiv = headline.length > 0 ? `<div class="sdds-toggle-headline">${headline}</div>` : '';

  return formatHtmlPreview(`
      <div class="sdds-toggle ${sizeValue} ${disabled ? 'disabled' : ''}" tabindex="0">
        ${headlineDiv}
        <input type="checkbox" class="sdds-toggle-input" id="customSwitch1">
        <span class="sdds-toggle-switch"></span>
        <label class="sdds-toggle-label" for="customSwitch1">Toggle this switch element</label>
      </div>
  `);
};

export const Default = Template.bind({});
Default.args = {};
