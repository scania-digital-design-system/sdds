import readme from './readme.md';

export default {
  title: 'Component/Accordion',
  argTypes: {
    affix: {
      control: {
        type: 'radio',
        options: ['suffix', 'prefix'],
      },
      description: 'Icon position',
      table: {
        type: { summary: 'suffix | prefix' },
        defaultValue: { summary: 'suffix' },
      },
    },
    disabled: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    paddingReset: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    notes: readme,
  },
  args: {
    disabled: false,
    paddingReset: false,
    affix: 'suffix',
  },
};

const Template = ({ disabled, affix, paddingReset }) => `
    <sdds-accordion class="sdds-storybook-wrapper">
      <sdds-accordion-item header="First item" affix="${affix}" disabled="${disabled}" tabindex="1" padding-reset="${paddingReset}">
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Second item" affix="${affix}" disabled="${disabled}" tabindex="2" padding-reset="${paddingReset}" expanded="true">
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet vestibulum fermentum. Proin ac odio sed tellus fermentum placerat. Nam sit amet orci dui. Proin commodo tellus at mauris accumsan blandit. Donec eget suscipit lorem, sit amet ultrices tellus. Cras massa ligula, rhoncus non elementum non, molestie sed nibh.
      </sdds-accordion-item>
      <sdds-accordion-item header="Third item" affix="${affix}" disabled="${disabled}" tabindex="3" padding-reset="${paddingReset}">
         This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
         Lorem ipsum doler sit amet.
       </sdds-accordion-item>
    </sdds-accordion>
  `;

export const Suffix = Template.bind({});
Suffix.args = {
  affix: 'suffix',
};

export const Prefix = Template.bind({});
Prefix.args = {
  affix: 'prefix',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const PaddingReset = Template.bind({});
PaddingReset.args = {
  paddingReset: true, // Allows item text to expand past suffix icon
};
