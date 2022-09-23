export default {
  title: 'Utilities/Colours',
  parameters: {
    layout: 'fullscreen',
  },
};

const TextColorTemplate = ({ color, text }) => `
  <h1 class="sdds-text-${color}">${text}</h1>
  <p class="sdds-text-${color}">${text}</p>
  `;

export const textColor = TextColorTemplate.bind({});
textColor.args = {
  color: 'grey-900',
  text: 'A text block',
};

const BackgroundColorTemplate = ({ height, width, backgroundColor }) => `
    <div class="sdds-background-${backgroundColor}" style="height:${height}px; width:${width}px; display:block"> <h1>background-color:${backgroundColor}</h1></div>
  `;

export const backgroundColor = BackgroundColorTemplate.bind({});

backgroundColor.argTypes = {
  height: {
    name: 'Height',
    control: {
      type: 'range',
      min: 10,
      max: 1000,
      step: 10,
    },
  },
  width: {
    name: 'Width',
    control: {
      type: 'range',
      min: 10,
      max: 1000,
      step: 10,
    },
  },
};

backgroundColor.args = {
  backgroundColor: 'blue-100',
  height: 500,
  width: 500,
};
