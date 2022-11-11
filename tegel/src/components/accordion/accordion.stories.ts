import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Accordion',
  argTypes: {
    iconPosition: {
      name: 'Icon position',
      control: {
        type: 'radio',
      },
      options: { End: 'end', Start: 'start' },
      description: 'Icon position',
    },
    disabled: {
      name: 'Disabled',
      description: 'Disabled',
    },
    paddingReset: {
      name: 'Less padding right',
      description: 'Less padding on the right in accordion items',
    },
  },
  parameters: {
    notes: readme,
  },
  args: {
    disabled: false,
    paddingReset: false,
    iconPosition: 'end',
  },
};

const Template = ({ disabled, iconPosition, paddingReset }) => {
  const affixAttr = iconPosition === 'start' ? 'affix="prefix"' : '';
  const disabledAttr = disabled ? 'disabled' : '';
  const paddingResetAttr = paddingReset ? 'padding-reset' : '';
  const tabIndexAttr = 'tabindex="0"';

  return formatHtmlPreview(`
    <sdds-accordion class="sdds-storybook-wrapper">
      <sdds-accordion-item header="First item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${paddingResetAttr}>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Second item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${paddingResetAttr} expanded>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet vestibulum fermentum. Proin ac odio sed tellus fermentum placerat. Nam sit amet orci dui. Proin commodo tellus at mauris accumsan blandit. Donec eget suscipit lorem, sit amet ultrices tellus. Cras massa ligula, rhoncus non elementum non, molestie sed nibh.
      </sdds-accordion-item>
      <sdds-accordion-item header="Third item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${paddingResetAttr}>
         This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
         Lorem ipsum doler sit amet.
       </sdds-accordion-item>
    </sdds-accordion>
  `);
};

export const Default = Template.bind({});
Default.args = {};

export const Prefix = Template.bind({});
Prefix.args = {
  iconPosition: 'start',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const PaddingReset = Template.bind({});
PaddingReset.args = {
  paddingReset: true, // Allows item text to expand past suffix icon
};
