import readme from './readme.md';

export default {
  title: 'Patterns/Navigation',
  parameters: {
    notes: readme,
  },
};

const Template = ({primaryItems, secondaryItems, subNavigation}) => {
  return `
  <sdds-theme name="scania"></sdds-theme>

  <c-navigation>
  ${primaryItems}
  ${secondaryItems}
  ${subNavigation}
  </c-navigation>
  `
};

export const Basic = Template.bind({});
Basic.args = {
  primaryItems: `
  <a href='/home' slot='primary-items'>home</a>
  <a href='/about' class='parent' slot='primary-items' active=''>about</a>
  `,
  secondaryItems: `
  <a href='/more' slot='secondary-items'>more</a>
  `
}

export const SubNavigation = Template.bind({});
SubNavigation.args = {
  ...Basic.args,
  subNavigation : `
  <c-navigation slot='sub' caption='About' target='/about' active=''>
    <a href='/about' slot='primary-items' active=''>About 1</a>
    <a href='/about2' slot='primary-items'>About 2</a>
    <a href='/about3' slot='secondary-items'>About 3</a>
  </c-navigation>
  `
}
