import readme from './readme.md';

export default {
  title: 'Patterns/Footer',
  argTypes: {
    text: {
      type: 'string',
      defaultValue: 'Copyright © Scania 2020'
    }
  },
  parameters: {
    notes: readme,
  },
};

const Template = ({text, socialItems, items}) => {
  return `
  <sdds-theme name="scania"></sdds-theme>

  <c-footer text='${text}'>
  ${socialItems}
  ${items}
  </c-footer>
  `
};

export const Basic = Template.bind({});

export const WithLinks = Template.bind({});
WithLinks.args = {
  items: `
  <a href='/cookies' slot='items'>Cookies</a>
  <a href='/contact-us' target='_blank' slot='items'>Contact us</a>
  `
}

export const WithSocialLinks = Template.bind({});
WithSocialLinks.args = {
  socialItems: `
  <a href='/' slot='social-items'>
    <c-icon name='scania-youtube'></c-icon>
  </a>
  <a href='/' slot='social-items'>
    <c-icon name='scania-twitter'></c-icon>
  </a>
  <a href='/' target='_blank' slot='social-items'>
    <c-icon name='scania-linkedin'></c-icon>
  </a>
  `
}