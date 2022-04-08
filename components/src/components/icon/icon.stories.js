export default {
  title: 'component/Icons',
  argTypes: {
    icon: { control: { type: 'text' } },
    size: {
      control: {
        type: 'range',
        min: 4,
        max: 100,
        step: 4,
      },
    },
  },
};

const IconTemplate = ({ icon, size }) => `
  <style>
    sdds-icon {
      font-size: ${size}rem;
    }
  </style>
  <sdds-icon name="${icon}">sdds-icon</sdds-icon>
  `;

export const Component = IconTemplate.bind({});

Component.args = {
  icon: 'scania-truck',
  size: 64,
};

const IconCssTemplate = ({ icon, size }) => `
  <style>
    @import url('https://cdn.digitaldesign.scania.com/icons/dist/1.1.0/fonts/css/sdds-icons.css');
    i {font-size: ${size}rem;}
  </style>
  <i class="sdds-icon ${icon}"></i>
  `;

export const CssIcon = IconCssTemplate.bind({});

CssIcon.args = {
  icon: 'scania-truck',
  size: 64,
};
