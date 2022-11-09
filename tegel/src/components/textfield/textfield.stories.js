import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Textfield',
  parameters: {
    notes: readme,
    layout: 'centered',
  },
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
      defaultValue: 'Placeholder',
    },
    type: {
      name: 'Type',
      description: 'Which type of textfield',
      control: {
        type: 'radio',
        options: ['password', 'text'],
      },
      defaultValue: 'text',
    },
    size: {
      name: 'Size',
      description: 'Switch between different sizes',
      control: {
        type: 'radio',
        options: ['Large', 'Medium', 'Small'],
      },
      defaultValue: 'Large',
    },
    minWidth: {
      name: 'Min width',
      description: 'Toggle min width',
      control: {
        type: 'radio',
        options: ['Default', 'No min width'],
      },
      defaultValue: 'Default',
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    readonly: {
      description: 'Set textfield to read only',
      name: 'Read Only',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    label: {
      description: 'Label text for specific textfield',
      name: 'Label text',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    labelplacement: {
      description: 'Label can be placed inside the textfield',
      name: 'Label inside',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      if: { arg: 'label', neq: '' },
    },
    prefix: {
      name: 'Prefix',
      description: 'Add prefix symbol/text before the textfield',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      if: { arg: 'icon', eq: false },
    },
    suffix: {
      name: 'Suffix',
      description: 'Add suffix symbol/text after the textfield',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    icon: {
      name: 'Icon',
      description: 'Add icon before or after the textfield',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      if: { arg: 'prefix', eq: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    textcounter: {
      name: 'Text counter',
      description: 'Set a maximum value how long the text can be',
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
        options: ['None', 'Success', 'Error'],
      },
      defaultValue: 'none',
    },
    variant: {
      name: 'Variant',
      description: 'The variant of the textarea',
      control: {
        type: 'radio',
        options: ['Default', 'Variant'],
      },
      defaultValue: 'Default',
    },
  },
};

const Template = ({ type, placeholderText, size, minWidth, disabled, readonly, label, labelplacement, state, variant, helper, prefix, suffix, icon, textcounter }) => {
  const maxlength = textcounter > 0 ? `maxlength="${textcounter}"` : '';
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
        ${prefix ? '<span slot="sdds-prefix">$</span>' : ''}
        ${label && !labelplacement ? `<label slot='sdds-label'>${label}</label>` : ''}
        ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
        ${suffix ? '<span slot="sdds-suffix">$</span>' : ''}
        ${icon ? '<sdds-icon name="cross" slot="sdds-prefix"></sdds-icon>' : ''}
    </sdds-textfield>
  </div>
  `,
  );
};

export const Default = Template.bind({});

Default.args = {};
