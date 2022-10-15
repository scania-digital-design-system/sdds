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
      description: 'Icon to display in link section',
      control: {
        type: 'boolean',
      },
    },
  },
};
// FIXME: Replace svg code with svg icon component instead after merging icon changes?
// TODO: After rebase, check icons sizes, Martin was updating these ones
// TODO: Check link component after Link is migrated over

const Template = args =>
  formatHtmlPreview(`
    <div class="sdds-banner sdds-banner-${args.state}">
     ${
       args.prefix && args.state === 'error'
         ? '<span class="sdds-banner-prefix"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n' +
           '  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C9.37 4 3.996 9.374 3.996 16.004S9.371 28.007 16 28.007c6.63 0 12.004-5.374 12.004-12.003C28.004 9.374 22.629 4 16 4ZM2 16.004c0-7.732 6.268-14 14-14s14 6.268 14 14-6.268 14-14 14-14-6.268-14-14Z" fill="currentColor"/>\n' +
           '  <path d="M14.803 14.47V10h2.376v4.47l-.352 4.295h-1.672l-.352-4.295Zm-.053 5.632h2.5v2.394h-2.5v-2.394Z" fill="currentColor"/>\n' +
           '</svg> </span>'
         : ''
     }
     ${
       args.prefix && args.state === 'info'
         ? '<span class="sdds-banner-prefix"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.013 4.004c-6.642 0-12.026 5.384-12.026 12.025 0 6.642 5.384 12.026 12.026 12.026 6.641 0 12.025-5.384 12.025-12.026 0-6.641-5.384-12.025-12.025-12.025ZM1.987 16.029c0-7.746 6.28-14.025 14.026-14.025 7.746 0 14.025 6.28 14.025 14.025 0 7.746-6.28 14.026-14.025 14.026-7.746 0-14.026-6.28-14.026-14.026Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.025 14.126a1 1 0 0 1 1 1v5.616a1 1 0 0 1-2 0v-5.616a1 1 0 0 1 1-1ZM16.025 10.317a1 1 0 0 1 1 1v.217a1 1 0 1 1-2 0v-.217a1 1 0 0 1 1-1Z" fill="currentColor"/></svg></span>'
         : ''
     }
     ${
       args.prefix && !(args.state === 'info' || args.state === 'error')
         ? '<span class="sdds-banner-prefix"><svg width="20" height="20" viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="16" height="16"/> </svg></span>'
         : ''
     }
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
