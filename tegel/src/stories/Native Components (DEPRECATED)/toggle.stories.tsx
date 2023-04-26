import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Toggle',
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
      description: 'Sets the size of the toggle.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Small'],
    },
    headline: {
      name: 'Headline',
      description: 'Sets the headline, displayed above the toggle.',
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'Label text',
      description: 'Sets the label for the toggles input element.',
      control: {
        type: 'text',
      },
    },
    checked: {
      name: 'Checked',
      description: 'Sets the toggle as checked.',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the toggle.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    size: 'Large',
    headline: 'Headline',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

const Template = ({ size, headline, label, checked, disabled }) => {
  const sizeValue = size === 'Small' ? 'sdds-toggle-sm' : '';
  const headlineDiv =
    headline.length > 0 ? `<div class="sdds-toggle-headline">${headline}</div>` : '';

  return formatHtmlPreview(`
      <div class="sdds-toggle ${sizeValue} ${disabled ? 'disabled' : ''}">
        ${headlineDiv}
        <input type="checkbox" class="sdds-toggle-input" id="customSwitch1" ${
          disabled ? 'disabled' : ''
        } ${checked ? 'checked' : ''}>
        <span class="sdds-toggle-switch"></span>
        <label class="sdds-toggle-label" for="customSwitch1">${label}</label>
      </div>
  `);
};

export const Native = Template.bind({});
