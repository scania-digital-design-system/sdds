export default {
  title: 'Component/Banner',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    state: {
      control: {
        type: 'radio',
        options: ['default', 'error', 'info'],
      },
    },
    header: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    state: 'default',
    header: '<h6 class="sdds-banner-header">This is a default banner</h6>',
    subheader: '',
    link: '',
    prefix: '',
  },
};

const Template = ({ state, prefix, header, subheader, link }) => `
    <div class="sdds-banner sdds-banner-${state}">
      ${prefix}
      <div class="sdds-banner-body">
      ${header}
      ${subheader}
      ${link}
      </div>
      <div class="sdds-banner-close"></div>
    </div>
  `;

export const Basic = Template.bind({});

Basic.args = {
  link: '',
};

export const Subheader = Template.bind({});

Subheader.args = {
  subheader: '<div class="sdds-banner-subheader">Short subheader</div>',
  link: '',
};

export const Link = Template.bind({});

Link.args = {
  subheader: '<div class="sdds-banner-subheader">Short subheader</div>',
  link: '<a class="sdds-link sdds-banner-link">Link example</a>',
};

export const Prefix = Template.bind({});

Prefix.args = {
  prefix:
    '<span class="sdds-banner-prefix"><svg width="16" height="17" viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="16" height="16"/> </svg></span>',
  subheader: '<div class="sdds-banner-subheader">Short subheader</div>',
  link: '<a class="sdds-link sdds-banner-link">Link example</a>',
};
