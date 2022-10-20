import { iconsNames } from './iconsArray';

export default {
  title: 'Component/Icons',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      name: 'Icon name',
      control: {
        type: 'select',
        options: iconsNames,
      },
    },
    size: {
      name: 'Size in pixels',
      control: {
        type: 'range',
        min: 16,
        max: 100,
        step: 4,
      },
    },
  },
};

const IconTemplate = ({ icon, size }) => `  
  <sdds-icon name="${icon}" size="${`${size.toString()}px`}" />
  `;

export const ComponentWay = IconTemplate.bind({});

ComponentWay.args = {
  size: 32,
  icon: 'truck',
};

const IconFontTemplate = ({ icon, size }) => `
  <style>
     @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css'); 
    
    i {font-size: ${size}px;}
  </style>
  <i class="sdds-icon ${icon}"></i>
  `;

export const FontWay = IconFontTemplate.bind({});

FontWay.args = {
  icon: 'truck',
  size: 32,
};
