import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Checkbox',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9266%3A17409&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9266%3A17409&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    label: {
      name: 'Label text',
      description: 'Sets the label of the component.',
      type: 'string',
    },
    checked: {
      name: 'Checked',
      description: 'Checks the checkbox.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the checkbox.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    }, 
  },
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

const Template = ({ checked, disabled, label }) =>
  formatHtmlPreview(`
    <div class="sdds-checkbox-item">
      <input class="sdds-form-input" type="checkbox" id="unique-id" ${
        checked ? 'checked="checked"' : ''
      }  ${disabled ? 'disabled' : ''}>
      ${
        label
          ? `<label class="sdds-form-label" for="unique-id" ${
              disabled ? 'disabled' : ''
            }>  ${label} </label>`
          : ''
      }
    </div>
  `);

export const Native = Template.bind({});
