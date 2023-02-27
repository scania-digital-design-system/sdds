import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Toggle',
  parameters: {
    notes: readme,
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
      options: ['Large', 'Small'],
      description: 'Size of the toggle',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    label: {
      name: 'Label',
      description: 'Label for the toggles input element.',
      control: {
        type: 'text',
      },
    },
    headline: {
      name: 'Headline',
      description: 'Headline, displayed above the toggle.',
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Sets the toggle as disabled',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      name: 'Checked',
      description: 'Sets the toggle as checked',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    size: 'Large',
    label: 'Label',
    headline: 'Headline',
    disabled: false,
    checked: false,
  },
};

const Template = ({ label, size, disabled, headline, checked }) =>
  formatHtmlPreview(`
      <sdds-toggle
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
        ${headline ? `headline="${headline}"` : ''}
        size="${size === 'Large' ? 'lg' : 'sm'}">
        ${label}
    </sdds-toggle>

    <!-- Script tag with eventlistener for demo purposes. -->
    <script>
      toggleElement = document.querySelector('sdds-toggle')

      toggleElement.addEventListener('sddsToggle', (event)=> {
        console.log('Toggle with id: ', event.detail.toggleId, ' is ', event.detail.checked)
      })
    </script>
  `);
export const WebComponent = Template.bind({});
