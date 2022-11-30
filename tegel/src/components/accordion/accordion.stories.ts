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
    lessPaddingRight: {
      name: 'Less padding right',
      description: 'Less padding on the right in accordion items',
    },
  },
  parameters: {
    notes: { 'Accordion': readme, 'Accordion item': readmeItem },
  },
  args: {
    disabled: false,
    lessPaddingRight: false,
    iconPosition: 'end',
  },
};

const Template = ({ disabled, iconPosition, lessPaddingRight }) => {
  const affixAttr = iconPosition === 'start' ? 'affix="prefix"' : '';
  const disabledAttr = disabled ? 'disabled' : '';
  const tabIndexAttr = 'tabindex="0"';
  const paddingResetJs = lessPaddingRight
    ? `
    // Note: If you are using a framework these should likely be set like properties instead,
    // see: https://gilfink.medium.com/using-complex-objects-arrays-as-props-in-stencil-components-f2d54b093e85
    console.log('test')
    document.querySelectorAll('sdds-accordion-item').forEach((accordionItemEl) => {
      accordionItemEl.panelStyle = {
        'padding-right': '16px';
      }
    })
  `
    : '';
  const scriptTag = paddingResetJs ? `<script>${paddingResetJs}</script>` : '';
  if (lessPaddingRight) {
    document.querySelectorAll('sdds-accordion-item').forEach((accordionItemEl) => {
      // eslint-disable-next-line no-param-reassign
      accordionItemEl.panelStyle = {
        'padding-right': '16px',
      };
      console.log('test');
      // debugger;
    });
  } else {
    document.querySelectorAll('sdds-accordion-item').forEach((accordionItemEl) => {
      // eslint-disable-next-line no-param-reassign
      delete accordionItemEl.panelStyle;
      // debugger;
    });
  }

  return formatHtmlPreview(`
    <sdds-accordion class="sdds-storybook-wrapper">
      <sdds-accordion-item header="First item" ${tabIndexAttr} ${affixAttr} ${disabledAttr}>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Second item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} expanded>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet vestibulum fermentum. Proin ac odio sed tellus fermentum placerat. Nam sit amet orci dui. Proin commodo tellus at mauris accumsan blandit. Donec eget suscipit lorem, sit amet ultrices tellus. Cras massa ligula, rhoncus non elementum non, molestie sed nibh.
      </sdds-accordion-item>
      <sdds-accordion-item header="Third item" ${tabIndexAttr} ${affixAttr} ${disabledAttr}>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. 
        Lorem ipsum doler sit amet.
      </sdds-accordion-item>
    </sdds-accordion>
    ${scriptTag}
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
