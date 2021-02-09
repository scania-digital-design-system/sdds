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
    }
  }
};

const style =`<style>
.demo {
  margin: auto;
  margin-top: 50px;
}
</style>`;

const dividerTemplate = ({...Basic}) => {
  return `
  ${style}
    <c-theme></c-theme>
    
      <div style="width: ${Basic.width}px;" class="demo sdds-divider-${Basic.type}"></div>
  `
};

export const Basic = dividerTemplate.bind({});

Basic.argTypes = {
  width: {
    name: 'Width',
    control: {
    type: 'range',
    min: 100,
    max: 800
   }
  }
}

Basic.args = {
  type: 'dark',
  width: '400',
}


const dividerVerticalTemplate = ({...Vertical}) => {
  return `
  ${style}
    <c-theme></c-theme>
    <div class="demo">
      <div style="height:${Vertical.height}px;" class="demo sdds-divider-${Vertical.type}-vertical"></div>
    <div>
  `
};

export const Vertical = dividerVerticalTemplate.bind({});

Vertical.argTypes = {
  height: {
    name: 'Height',
    control: {
      type: 'range',
      min: 100,
      max: 800
    }
  }
};

Vertical.args = {
  type: 'dark',
  height: '200'
};

const dividerBorderTemplate = ({...Border}) => {
  return `
  ${style}
    <c-theme></c-theme>

    <div class="demo">
      <div style="width: ${Border.width}px; background-color: ${Border.bgColor}; height:${Border.height}px;" class="demo divider-border-demo sdds-divider-${Border.type}-border-${Border.direction}">Demo</div>
    </div>
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
  bgColor: {
    name: 'Content background',
    control: {
      type: 'color'
    }
  },
  height: {
    name: 'Height',
    control: {
      type: 'range',
      min: 100,
      max: 800
    }
  },
  width: {
    name: 'Width',
    control: {
    type: 'range',
    min: 100,
    max: 800
   },
  }
}

Border.args = {
  direction: 'top',
  type: 'dark',
  bgColor: '#E5E5E5',
  width: '400',
  height: '200',
}




