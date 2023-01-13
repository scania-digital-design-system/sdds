import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown-v2',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
      description: 'Size of the dropdown',
    },
    data: {
      name: 'Type of data',
      control: {
        type: 'radio',
      },
      options: ['children', 'json'],
    },
    labelPosition: {
      name: 'Position of the label',
      control: {
        type: 'radio',
      },
      options: ['outside', 'inside', 'no-label'],
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text',
      },
    },
    openDirection: {
      name: 'Open direction',
      control: {
        type: 'radio',
      },
      options: ['up', 'down', 'auto'],
    },
  },
  args: {
    size: 'Large',
    data: 'children',
    labelPosition: 'outside',
    placeholder: '',
    openDirection: 'auto',
  },
};

const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };

const Template = ({ data, size, labelPosition, placeholder, openDirection }) =>
  formatHtmlPreview(`
    <style>
      .demo-wrapper {
        width: 200px;
      }
    </style>
    <div class="demo-wrapper">
      <sdds-dropdown-v2 open-direction="${openDirection}" label="Label" placeholder="${placeholder}" label-position="${labelPosition}" size="${
    sizeLookup[size]
  }" ${
    data === 'json'
      ? `data='[
        {
          "value": "option-1",
          "label":"Jakarta",
          "disabled":"true"
        },
        {
          "value":"option-2"
          ,"label":"Stockholm"
        },
        {
          "value":"option-3",
          "label":"Barcelona"
        }
      ]'`
      : ''
  }>
      ${
        data === 'children'
          ? `
      <sdds-dropdown-option-v2 value="value-1" disabled label="test 1">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 value="value-2" label="test 2">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 value="value-3" label="test 3">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 value="value-4" label="test 4">
      </sdds-dropdown-option-v2>
      `
          : ''
      }
      </sdds-dropdown-v2>
    </div>
    `);
export const WebComponentDefault = Template.bind({});
