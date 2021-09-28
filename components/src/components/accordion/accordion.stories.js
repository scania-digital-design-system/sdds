import readme from './readme.md';

export default {
  title: 'Component/Accordion',
  argTypes: {
    affix: {
      control: {
        type: 'select',
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
    affix: 'suffix',
  },
};

const Template = ({ disabled, affix }) => {
  return `
  <sdds-theme></sdds-theme>
  <div class="container-demo" style="width:500px; padding:var(--sdds-spacing-layout-48);">
    <sdds-accordion>
      <sdds-accordion-item header="First item" affix="${affix}" disabled="${disabled}" tabindex="1">
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Second item" affix="${affix}" disabled="${disabled}" expanded="true"  tabindex="2">
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Third item" affix="${affix}" disabled="${disabled}" tabindex="3">
         This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
       </sdds-accordion-item>
    </sdds-accordion>
  </div>
  `;
};

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
