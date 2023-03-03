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
      description: 'Sets the label for the radio button.',
      controls: {
        type: 'string',
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
    disabled: false,
  },
};

const Template = ({label, disabled}) =>
  formatHtmlPreview(`
  <style>
    .demo-fieldset-reset { 
      border: 0;
      margin: 0;
      min-width: 0;
      padding: 0; 
    }
  </style>
  <fieldset class="demo-fieldset-reset" ${disabled ? 'disabled' : ''}>
    <div class="sdds-radio-button-group">
      <div class="sdds-radio-item">
        <input class="sdds-form-input" type="radio" name="rb-example" id="rb-option-1" checked>
        <label class="sdds-form-label" for="rb-option-1">
          ${label} 1
        </label>
      </div>
    </div>
    <div class="sdds-radio-button-group">
      <div class="sdds-radio-item">
        <input class="sdds-form-input" type="radio" name="rb-example" id="rb-option-2">
        <label class="sdds-form-label" for="rb-option-2">
          ${label} 2
        </label>
      </div>
    </div>
  </fieldset>
  `);

  export const Native = Template.bind({});
