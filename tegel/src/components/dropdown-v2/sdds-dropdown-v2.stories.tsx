import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown-v2',
  parameters: {
    layout: 'centered',
    notes: { Dropdown: readme },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      description: 'Mode variant of the component.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    error: {
      name: 'Error',
      control: {
        type: 'boolean',
      },
    },
    filter: {
      name: 'Filter',
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
      description: 'Size of the dropdown',
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      description: 'Placeholder text when no option is selected',
    },
    labelPosition: {
      name: 'Label position',
      control: {
        type: 'radio',
      },
      options: ['None', 'Inside', 'Outside'],
      description: 'Label text position',
      if: { arg: 'filter', neq: true },
    },
    labelText: {
      name: 'Label text',
      control: 'text',
      description: 'Label text helps to describe what the dropdown contains',
      if: { arg: 'labelPosition', neq: 'None' },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component',
      control: {
        type: 'boolean',
      },
    },

    helperText: {
      name: 'Helper text',
      description: 'Helper text assists the user with additional information about the dropdown',
      control: 'text',
    },
    openDirection: {
      name: 'Open direction',
      description: 'The direction the dropdown will open.',
      control: {
        type: 'radio',
      },
      options: ['Up', 'Down', 'Auto'],
      table: {
        summary: {
          defaultValue: 'auto',
        },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    size: 'Large',
    placeholder: 'Placeholder',
    disabled: false,
    labelPosition: 'Outside',
    labelText: 'Label text',
    helperText: 'Helper text',
    openDirection: 'Auto',
    error: false,
    filter: false,
  },
};

const sizeLookUp = {
  Large: 'lg',
  Medium: 'md',
  Small: 'sm',
};

const Template = ({
  placeholder,
  labelText,
  labelPosition,
  helperText,
  size,
  error,
  filter,
  openDirection,
}) =>
  formatHtmlPreview(`
  <style>
  /* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 300px;
    height:200px;
  }
  </style>

    <div class="demo-wrapper">
        <sdds-dropdown-v2
          label="${labelText}"
          ${
            labelPosition && labelPosition !== 'None'
              ? `label-position="${labelPosition.toLowerCase()}"`
              : ''
          }
          placeholder="${placeholder}"
          helper="${helperText}"
          size="${sizeLookUp[size]}"
          ${error ? 'error' : ''}
          ${filter ? 'filter' : ''}
          openDirection="${openDirection}"
          >
          <sdds-dropdown-option-v2 selected value="option-1">
            Option 1
          </sdds-dropdown-option-v2>
          <sdds-dropdown-option-v2 value="option-1">
            Option 1
          </sdds-dropdown-option-v2>
        </sdds-dropdown-v2>
      </div>
  `);

export const WebComponent = Template.bind({});
