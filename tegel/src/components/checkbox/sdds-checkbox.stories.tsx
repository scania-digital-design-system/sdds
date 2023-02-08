import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Checkbox',
  parameters: {
    notes: readme,
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
    disabled: {
      name: 'Disabled',
      description: 'Disables the checkbox',
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'Checked',
      description: 'Checks the checkbox',
      control: {
        type: 'boolean',
      },
    },
    label: {
      name: 'Label text',
      description: 'The label of the component',
      type: 'string',
    },
  },
  args: {
    disabled: false,
    checked: false,
    label: 'Label',
  },
};

const Template = ({ checked, disabled, label }) =>
  formatHtmlPreview(`
    <sdds-checkbox
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
        >
        ${label}
    </sdds-checkbox>
    
    <!-- Script tag with event listener for demo purposes. -->
    <script>
        document.addEventListener('checkboxChangeEvent', (event) => {
            console.log('Checkbox with id: ', event.detail.checkboxId, ' is ', event.detail.checked)
        })
    </script>
  `);

export const WebComponent = Template.bind({});
