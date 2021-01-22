export default {
  title: 'component/Icons'
};

const IconTemplate = ({icon,size}) => {
  return `
  <style>
    c-icon {
      font-size: ${size}rem;
    }
  </style>
  <c-theme name="scania"></c-theme>
  <c-icon name="${icon}" >c-icon</c-icon>
  `
};

export const Icons = IconTemplate.bind({});

Icons.args = {
  icon: 'scania-truck',
  size: '64'
}

Icons.argTypes = {
  icon: { control: {type: 'text'}, description: 'Change icon to show'},
  size: { control: {type: 'range', min: 4, max: 100}, description: 'Change font-size based on rem'}
}
