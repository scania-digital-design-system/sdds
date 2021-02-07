export default {
  title: 'Component/Divider',
  argTypes: {
    type: {
      name: 'Type',
      control: {
      type: 'select',
      options: [
        'light',
        'dark',
        'coloured'
      ],
     },
    },
    width: {
      name: 'Width',
      control: {
      type: 'range',
      min: 100,
      max: 800
     },
    },
    height: {
      name: 'Height',
      control: {
        type: 'range',
        min: 100,
        max: 800
      }
    },
    bgColor: {
      name: 'Content background',
      control: {
        type: 'color'
      }
    }
  },
};

const style =`<style>
  .demo {
    padding: 40px;
  }
</style>`;

const dividerTemplate = ({...Basic}) => {
  return `
  ${style}
    <c-theme name="scania"></c-theme>
    <div style="width: ${Basic.width}px;" class="sdds-divider-${Basic.type}"></div>
    <div class="demo" style="width: ${Basic.width}px; background-color: ${Basic.bgColor}; height:${Basic.height}px;">Demo</div>
  `
};


export const Basic = dividerTemplate.bind({});
Basic.args = {
  type: 'dark',
  bgColor: '#E5E5E5',
  width: '400',
  height: '200'
}


const dividerVerticalTemplate = ({...Vertical}) => {
  return `
  ${style}
    <c-theme name="scania"></c-theme>
    <div class="" style="display: flex; width: ${Vertical.width}px; background-color: ${Vertical.bgColor}; height:${Vertical.height}px;">
      <div class="sdds-divider-${Vertical.type}-vertical"></div>
      <div class="demo"> demo</div>
    </div>
  `
};


export const Vertical = dividerVerticalTemplate.bind({});

Vertical.argTypes = {};

Vertical.args = {
  type: 'dark',
  bgColor: '#E5E5E5',
  width: '400',
  height: '200'
};


const dividerBorderTemplate = ({...Border}) => {
  return `
  ${style}
    <c-theme name="scania"></c-theme>

    <div style="width: ${Border.width}px; background-color: ${Border.bgColor}; height:${Border.height}px;" class="demo divider-border-demo sdds-divider-${Border.type}-border-${Border.direction}">Demo</div>
  `
};

export const Border = dividerBorderTemplate.bind({});

Border.argTypes = {
  direction: {
    name:'Direction',
    control: {
    type: 'select',
    options: [
      'top',
      'right',
      'bottom',
      'left'
    ],
    },
  },
}

Border.args = {
  direction: 'top',
  type: 'dark',
  bgColor: '#E5E5E5',
  width: '400',
  height: '200',
}




