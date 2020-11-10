import readme from './readme.md';

export default {
  title: 'Patterns/Header',
  argTypes: {
    siteName: { 
      type: 'string',
      defaultValue: 'Application'
    },
    shortName: { 
      type: 'string',
      defaultValue: 'Application'
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

const Template = ({siteName, shortName, siteUrl, items}) => {
  return `
  <c-theme name="scania"></c-theme>
  
  <c-header site-name='${siteName}' short-name='${shortName}' site-url='${siteUrl}'>
  ${items}
  </c-header>
  `
};

export const Basic = Template.bind({});
Basic.args = {
  siteName: 'My Application',
  shortName: 'My App',
  siteUrl: 'http://digitaldesign.scania.com'
}

export const WithLinks = Template.bind({});
WithLinks.args = {
  ...Basic.args,
  items: `
  <a href='global' slot='items'>global</a>
  `
};