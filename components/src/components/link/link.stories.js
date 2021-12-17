export default {
  title: 'Component/Link',
};

const Template = ({ disabled = false, noUnderline = false }) => {
  const disabledClass = disabled ? 'disabled' : '';
  const underlineClass = noUnderline ? 'sdds-link--no-underline' : '';
  return `
  <sdds-theme></sdds-theme>
  <p>
  This is an example of <a class="sdds-link ${disabledClass} ${underlineClass}" href="#">a link</a> inside a paragraph.
  </p>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  noUnderline: false,
};
