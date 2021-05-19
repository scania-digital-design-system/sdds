export default {
  title: 'Component/Banner',
  argTypes: {
    state: {
      control: {
        type: 'select',
        options:['default', 'error', 'info']
      }
    },
    headline: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    state: 'default',
    headline : '<h6 class="sdds-banner-headline">This is a default banner</h6>',
    subheadline: '',
    link: '',
    prefix: '',
  }
};

const Template = ({state, prefix, headline, subheadline, link}) => {
  return `
  <style>
    .demo-bg {
      background-color: white;
      padding: var(--sdds-spacing-layout-96) 0;
    }
  </style>
  <sdds-theme></sdds-theme>

  <div class="demo-bg">
    <div class="sdds-banner sdds-banner-${state}">

      ${prefix}

      <div class="sdds-banner-body">
      ${headline}
      ${subheadline}
      ${link}
      </div>
      <div class="sdds-banner-close"></div>
    </div>
  </div>
  `
};

export const Basic = Template.bind({});

Basic.args = {
  link: ''
}

export const SubHeadline = Template.bind({});

SubHeadline.args = {
  subheadline: '<div class="sdds-banner-subheadline">short subheader</div>',
  link: ''
}

export const Link = Template.bind({});

Link.args = {
  subheadline: '<div class="sdds-banner-subheadline">short subheader</div>',
  link: '<a class="sdds-link sdds-banner-link">Link example</a>'
}

export const Prefix = Template.bind({});

Prefix.args = {
  prefix: '<c-icon class="sdds-banner-prefix" name="scania-information"></c-icon>',
  subheadline: '<div class="sdds-banner-subheadline">short subheader</div>',
  link: '<a class="sdds-link sdds-banner-link">Link example</a>'
}


