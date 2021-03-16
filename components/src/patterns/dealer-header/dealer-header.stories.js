import readme from './readme.md';

export default {
  title: 'Patterns/Dealer Header',
  argTypes: {
    siteName: {
      type: 'string',
      defaultValue: 'Bilmetro'
    },
    shortName: {
      type: 'string',
      defaultValue: 'Bil'
    },
    siteUrl: {
      type: 'string',
      defaultValue: 'http://digitaldesign.scania.com'
    },
  },
  parameters: {
    notes: readme,
  },
};

const Template = ({ logo, siteName, shortName, siteUrl, items }) => {
  const logoAttr = logo ? 'logo="' + logo + '"' : '';

  return `
  <sdds-theme name="scania"></sdds-theme>
  
  <c-dealer-header site-name='${siteName}' short-name='${shortName}' site-url='${siteUrl}' ${logoAttr}>
  ${items}
  </c-dealer-header>
  `
};

export const Basic = Template.bind({});
Basic.args = {
  siteName: 'My Dealer',
  shortName: 'Dealer',
  siteUrl: 'http://digitaldesign.scania.com'
}

export const WithLinks = Template.bind({});
WithLinks.args = {
  ...Basic.args,
  items: `
  <a href='global' slot='items'>User</a>
  `
};

export const CustomLogo = Template.bind({});
CustomLogo.args = {
  logo: 'https://scania.github.io/corporate-ui-docs/images/bilmetro-logo.png'
}