export default {
  title: 'Component/Link',
};

const Template = ({ disabled = false, noUnderline = false }) => {
  const disabledClass = disabled ? 'disabled' : '';
  const underlineClass = noUnderline ? 'sdds-link--no-underline' : '';
  return `
  <a class="sdds-link ${disabledClass} ${underlineClass}" href="#">a link</a>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  noUnderline: false,
};
