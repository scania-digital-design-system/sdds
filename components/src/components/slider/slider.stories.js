const style = `
  <style>
    .storybook-slider-wrapper {
      width: 80%;
      top: 200px;
      position: relative;
      margin: 0 auto;
    }
  </style>
`;

export default {
  title: 'Component/Slider',
  parameters: {},
  argTypes: {},
};

const ComponentSlider = ({ ...Basic }) => `
  ${style}
  <div class="storybook-slider-wrapper">
    <sdds-slider>
    </sdds-slider>
  </div>
  `;

export const Basic = ComponentSlider.bind({});
Basic.args = {};
