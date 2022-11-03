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
  }
</style>
  <div class="demo-wrapper" style="background-color: var(--sdds-black)">
    <span>black</span>
  </div>
  <div class="demo-wrapper" style="background-color: var(--sdds-white)">
    <span>white</span>
  </div>
  <div class="demo-wrapper" style="background-color: var(--sdds-blue)">
    <span>blue</span>
  </div>
  `;

export const Brand = Template.bind({});
