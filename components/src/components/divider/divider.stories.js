export default {
  title: 'Component/Divider',
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['light', 'dark', 'coloured'],
      },
    },
  },
};

const style = `<style>
.demo {
  margin: auto;
  margin-top: 50px;
}
</style>`;

const dividerTemplate = ({ ...Basic }) => `
  ${style}
    <div style="width: ${Basic.width}px;" class="sdds-divider-${Basic.type}"></div>
  `;

export const Basic = dividerTemplate.bind({});

Basic.args = {
  type: 'dark',
  width: 400,
};

Basic.argTypes = {
  width: {
    name: 'Width',
    control: {
      type: 'range',
      min: 100,
      max: 800,
      step: 100,
    },
  },
};

const dividerVerticalTemplate = ({ ...Vertical }) => `
  ${style}
    <div style="height:${Vertical.height}px;" class="sdds-divider-${Vertical.type}-vertical"></div>
  `;

export const Vertical = dividerVerticalTemplate.bind({});

Vertical.argTypes = {
  height: {
    name: 'Height',
    control: {
      type: 'range',
      min: 100,
      max: 800,
      step: 100,
    },
  },
};

Vertical.args = {
  type: 'dark',
  height: 200,
};

const dividerBorderTemplate = ({ ...Border }) => `
  ${style}
      <div style="width: ${Border.width}px; background-color: ${Border.bgColor}; height:${Border.height}px;" class="divider-border-demo sdds-divider-${Border.type}-border-${Border.direction}">Demo</div>
    `;

export const Border = dividerBorderTemplate.bind({});

Border.argTypes = {
  direction: {
    name: 'Direction',
    control: {
      type: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  bgColor: {
    name: 'Content background',
    control: {
      type: 'color',
    },
  },
  height: {
    name: 'Height',
    control: {
      type: 'range',
      min: 100,
      max: 800,
    },
  },
  width: {
    name: 'Width',
    control: {
      type: 'range',
      min: 100,
      max: 800,
    },
  },
};

Border.args = {
  direction: 'top',
  type: 'dark',
  bgColor: '#E5E5E5',
  width: 400,
  height: 200,
};
