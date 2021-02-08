export default {
  title: 'Component/Divider'
};

const style =`<style>

</style>`;

const dividerTemplate = ({...Basic}) => {
  return `
  ${style}
    <c-theme name="scania" global="true"></c-theme>
    <div class="sdds-divider"></div>
  `
};

export const Basic = dividerTemplate.bind({});

Basic.args = {}




