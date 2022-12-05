import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';
import readmeItem from './accordion-item/readme.md';

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
    equalPaddingX: {
      name: 'Equal panel left and right padding',
      description: 'Use equal padding on the left and right sides inside accordion panels',
    },
  },
  parameters: {
    notes: { 'Accordion': readme, 'Accordion item': readmeItem },
  },
  args: {
    disabled: false,
    equalPaddingX: false,
    iconPosition: 'end',
  },
};

const Template = ({ disabled, iconPosition, equalPaddingX }) => {
  const affixAttr = iconPosition === 'start' ? 'affix="prefix"' : '';
  const disabledAttr = disabled ? 'disabled' : '';
  const tabIndexAttr = 'tabindex="0"';
  const equalPaddingXAttr = equalPaddingX ? `equal-padding` : '';

  return formatHtmlPreview(`
    <sdds-accordion>
      <sdds-accordion-item header="First item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${equalPaddingXAttr}>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Second item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${equalPaddingXAttr} expanded>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet vestibulum fermentum. Proin ac odio sed tellus fermentum placerat. Nam sit amet orci dui. Proin commodo tellus at mauris accumsan blandit. Donec eget suscipit lorem, sit amet ultrices tellus. Cras massa ligula, rhoncus non elementum non, molestie sed nibh.
      </sdds-accordion-item>
      <sdds-accordion-item header="Third item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${equalPaddingXAttr}>
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

export const EqualPadding = Template.bind({});
EqualPadding.args = {
  equalPaddingX: true, // Allows item text to expand past suffix icon
};
