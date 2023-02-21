import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Radio Button',
  parameters: {
    notes: readme,
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
        type: 'text',
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

  <fieldset class="demo-fieldset-reset">
  <sdds-radio-button 
    name="rb-example"
    value="option1"
    radio-id="option-1"
    aria-labelled-by="option-1"
    aria-describedby="option-1"
    required=false
    ${disabled ? 'disabled' : ''}
    checked="true" 
  >
    ${label} 1
  </sdds-radio-button>

  <sdds-radio-button
    name="rb-example"
    value="option2"
    radio-id="option-2"
    aria-labelled-by="option-2"
    aria-described-by="option-2"
    ${label ? `label="${label} 2"` : ''}
    required=false
    ${disabled ? 'disabled' : ''} 
  >
    ${label} 2
  </sdds-radio-button>
    
  </fieldset>

  <!-- Script tag with eventlistener for demo purposes. -->
  <script>
  document.addEventListener('sddsChange', (event) => {
    console.log('Radio button with id: ', event.detail.radioId, ' with value:', event.detail.value, ' was selected.')
  })
  </script>
  `);

export const WebComponent = Template.bind({});