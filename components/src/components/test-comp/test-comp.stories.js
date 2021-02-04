export default {
    title: 'Component/ButtonTest',
  };
  
  const PrimaryBtnTemplate = () => {
    return `
    <div>
      <test-comp text="Primary" appearance="primary"></test-comp>
    </div>
    `
  };

  const SecondaryBtnTemplate = () => {
    return `
    <div>
      <test-comp text="Secondary" appearance="secondary"></test-comp>
    </div>
    `
  };

  const GhostBtnTemplate = () => {
    return `
    <div>
      <test-comp text="Spöke" appearance="ghost"></test-comp>
    </div>
    `
  };

  const DangerBtnTemplate = () => {
    return `
    <div>
      <test-comp text="Danger" appearance="danger"></test-comp>
    </div>
    `
  };
  
  export const Basic = PrimaryBtnTemplate.bind({});
  Basic.args = {}

  export const SecondaryBtn = SecondaryBtnTemplate.bind({});
  SecondaryBtn.args = {}

  export const GhostBtn = GhostBtnTemplate.bind({});
  GhostBtn.args = {}

  export const DangerBtn = DangerBtnTemplate.bind({});
  DangerBtn.args = {}