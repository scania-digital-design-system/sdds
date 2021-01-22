export default {
  title: 'Component/TextField'
};

const textFieldTemplate = ({placeholderText}) => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <input class="form-control" type="text" placeholder="${placeholderText}" input">
  `
};

export const Basic = textFieldTemplate.bind({});

Basic.args = {
  placeholderText: 'Placeholder text'
}
