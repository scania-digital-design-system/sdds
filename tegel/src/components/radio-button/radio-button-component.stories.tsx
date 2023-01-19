import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Radio Button',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9266%3A17335&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9266%3A17335&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    label: {
      name: 'Label',
      description: 'The label for the radio button.',
      controls: {
        type: 'text',
      },
    },
    checked: {
      name: 'Checked',
      description: 'Checks the radio button.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    required: {
      name: 'Required',
      description: 'Sets if the radio button option is required or not.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the radio button.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    label: 'Label text',
    checked: true,
    required: false,
    disabled: false,
  },
};

const Template = ({label, disabled, checked, required}) =>
  formatHtmlPreview(`
  <fieldset class="demo-fieldset-reset">
  <sdds-radio-button ${label ? `label="${label}"` : ''}
    value="option1"
    ${checked ? 'checked' : ''}
    ${required ? 'required' : ''}
    ${disabled ? 'disabled' : ''} >
  </sdds-radio-button>
  <sdds-radio-button ${label ? `label="${label}"` : ''}
    value="option2"
    ${checked ? 'checked' : ''}
    ${required ? 'required' : ''}
    ${disabled ? 'disabled' : ''} >
  </sdds-radio-button>
    
  </fieldset>
  `);

export const WebComponent = Template.bind({});
WebComponent.args = {};
