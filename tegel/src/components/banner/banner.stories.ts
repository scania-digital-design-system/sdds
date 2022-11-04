import { formatHtmlPreview } from '../../utils/utils';

// FIXME: CMS: Change state to type in Code tab of component

export default {
  title: 'Components/Banner',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    state: {
      name: 'Type',
      description: 'Changes type of component',
      options: {
        Default: 'default',
        Error: 'error',
        Info: 'info',
      },
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    header: {
      name: 'Header',
      description: 'Text to display in header section',
      control: {
        type: 'text',
      },
    },
    subheader: {
      name: 'SubHeader',
      description: 'Text to display in subheader section',
      control: {
        type: 'text',
      },
    },
    link: {
      name: 'Link',
      description: 'Text to display in link section',
      control: {
        type: 'text',
      },
    },
    prefix: {
      name: 'Show icon',
      description: 'If an icon should be displayed. For type default the truck icon is used in this example, but it should be changed to suit your needs.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
};

const Template = args =>
  formatHtmlPreview(`
    <div class="sdds-banner sdds-banner-${args.state}">
     ${args.prefix && args.state === 'error' ? '<span class="sdds-banner-prefix"><sdds-icon name="error" size="20px" /></span>' : ''}
     ${args.prefix && args.state === 'info' ? '<span class="sdds-banner-prefix"><sdds-icon name="info" size="20px" /></span>' : ''}
     ${args.prefix && !(args.state === 'info' || args.state === 'error') ? '<span class="sdds-banner-prefix"><sdds-icon name="truck" size="20px" /></span>' : ''}
      <div class="sdds-banner-body">
      ${args.header && `<h6 class="sdds-banner-header">${args.header}</h6>`}
      ${args.subheader && `<div class="sdds-banner-subheader">${args.subheader}</div>`}
      ${args.link && `<a class="sdds-link sdds-banner-link">${args.link}</a>`}
      </div>
      <div class="sdds-banner-close"></div>
    </div>
  `);

export const Default = Template.bind({});
Default.args = {
  state: 'info',
  header: 'This is a header text area',
  subheader: 'SubHeader text area',
  link: 'Learn more',
  prefix: true,
};
