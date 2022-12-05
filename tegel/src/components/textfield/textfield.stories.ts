import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Textfield',
  parameters: {
    notes: readme,
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1675%3A76544&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1675%3A76544&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
    },
    type: {
      name: 'Type',
      description: 'Which type of textfield',
      control: {
        type: 'radio',
        options: ['password', 'text'],
      },
    },
    size: {
      name: 'Size',
      description: 'Switch between different sizes',
      control: {
        type: 'radio',
        options: ['Large', 'Medium', 'Small'],
      },
    },
    minWidth: {
      name: 'Min width',
      description: 'Toggle min width',
      control: {
        type: 'radio',
        options: ['Default', 'No min width'],
      },
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      description: 'Set textfield to read only',
      name: 'Read Only',
      control: {
        type: 'boolean',
      },
    },
    label: {
      description: 'Label text for specific textfield',
      name: 'Label text',
      control: {
        type: 'text',
      },
    },
    labelplacement: {
      description: 'Label can be placed inside the textfield',
      name: 'Label inside',
      control: {
        type: 'boolean',
      },
      if: { arg: 'label', neq: '' },
    },
    prefix: {
      name: 'Prefix',
      description: 'Add prefix symbol/text before the textfield',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    prefixType: {
      name: 'Prefix type',
      description: 'Choose icon or text for prefix.',
      control: {
        type: 'radio',
      },
      options: ['Icon', 'Text'],
      if: { arg: 'prefix', eq: true },
    },
    suffix: {
      name: 'Suffix',
      description: 'Add suffix symbol/text after the textfield',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    suffixType: {
      name: 'Suffix type',
      description: 'Choose icon or text for suffix.',
      control: {
        type: 'radio',
      },
      options: ['Icon', 'Text'],
      if: { arg: 'suffix', eq: true },
    },
    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
      },
    },
    maxLength: {
      name: 'Max length',
      description: 'Set a maximum value of how long the text can be.',
      control: {
        type: 'number',
      },
    },
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
        options: ['None', 'Success', 'Error'],
      },
    },
    variant: {
      name: 'Variant',
      description: 'The variant of the textarea',
      control: {
        type: 'radio',
        options: ['Default', 'Variant'],
      },
    },
  },
  args: {
    placeholderText: 'Placeholder',
    disabled: false,
    readonly: false,
    label: '',
    labelPosition: 'No label',
    helper: '',
    maxLength: 0,
    state: 'None',
    variant: 'Default',
    suffix: false,
    suffixType: 'Icon',
    prefix: false,
    prefixType: 'Icon',
    labelplacement: false,
    minWidth: 'Default',
    size: 'Large',
    type: 'text',
  },
};

const Template = ({
  type,
  placeholderText,
  size,
  minWidth,
  disabled,
  readonly,
  label,
  labelplacement,
  state,
  variant,
  helper,
  prefix,
  prefixType,
  suffix,
  suffixType,
  maxLength,
}) => {
  const maxlength = maxLength > 0 ? `max-length="${maxLength}"` : '';
  const variantValue = variant === 'Variant' ? 'variant' : 'default';
  const stateValue = state.toLowerCase();
  const sizeLookUp = {
    Large: 'lg',
    Medium: 'md',
    Small: 'sm',
  };

  return formatHtmlPreview(
    `
  <div style="width: 208px">
    <sdds-textfield
      type="${type}"
      size="${sizeLookUp[size]}"
      state="${stateValue}"
      variant="${variantValue}"
      ${maxlength}
      ${label && labelplacement ? `label-inside="${label}"` : ''}
      ${disabled ? 'disabled' : ''}
      ${readonly ? 'readonly' : ''}
      ${minWidth === 'No min width' ? 'noMinWidth' : ''}
      placeholder="${placeholderText}" >
        ${
          prefix
            ? `
        <span slot="sdds-prefix">
          ${prefixType === 'Text' ? '$' : '<sdds-icon name="truck" size="20px"/>'}
        </span>`
            : ''
        }
        ${label && !labelplacement ? `<label slot='sdds-label'>${label}</label>` : ''}
        ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
        ${
          suffix
            ? `
        <span slot="sdds-suffix">
          ${suffixType === 'Text' ? '$' : '<sdds-icon name="truck" size="20px"/>'}
        </span>`
            : ''
        }
        </sdds-textfield>
  </div>
  `,
  );
};

// ${true ? '<sdds-icon name="cross" slot="sdds-prefix"></sdds-icon>' : ''}

export const Default = Template.bind({});

Default.args = {};
