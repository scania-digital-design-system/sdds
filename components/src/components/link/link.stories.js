export default {
  title: 'Component/Link',
};

const Template = ({ disabled = false }) => {
  const disabledClass = disabled ? 'disabled' : '';
  return `
  <sdds-theme></sdds-theme>
  <p>
  This is an example of <a class="${disabledClass}" href="#">a link</a> inside a paragraph.
  </p>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
};
