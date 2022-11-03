export default {
  title: 'Foundations/Colour',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => `
  <style>
  .demo-wrapper {
    height: 90px;
  }
  .demo-wrapper span {
    color: white;
    background-color: black;
    border: 1px solid white;
    padding: 4px;
    position: absolute;
  }
</style>
  <div class="demo-wrapper" style="background-color: var(--sdds-positive)">
    <span>--sdds-positive</span>
  </div>
  <div class="demo-wrapper" style="background-color: var(--sdds-warning)">
    <span>warning</span>
  </div>
  <div class="demo-wrapper" style="background-color: var(--sdds-negative)">
    <span>negative</span>
  </div>
  <div class="demo-wrapper" style="background-color: var(--sdds-information)">
    <span>information</span>
  </div>`;

export const Sematic = Template.bind({});
