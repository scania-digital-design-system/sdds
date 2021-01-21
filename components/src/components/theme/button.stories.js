export default {
  title: 'Component/Button'
};

const ButtonTemplate = () => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <button class="btn btn-primary">Button</button>
  `
};

export const Basic = ButtonTemplate.bind({});

Basic.args = {}

// const ButtonDangerTemplate = () => {
//   return `
//   <c-theme name="scania"></c-theme>
//   <button class="btn btn-danger">Button</button>
//   `
// };

// export const Danger = ButtonDangerTemplate.bind({});

// Danger.args = {}