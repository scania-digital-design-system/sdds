export default {
  title: 'component/Icons'
};

const IconTemplate = ({icon,size}) => {
  return `
  <style>
    sdds-icon {
      font-size: ${size}rem;
    }
  </style>
  <sdds-theme name="scania"></sdds-theme>
  <sdds-icon name="${icon}">sdds-icon</sdds-icon>
  `
};

export const Icons = IconTemplate.bind({});

Icons.args = {
  icon: 'truck',
  size: '64'
}

Icons.argTypes = {
  icon: { control: {type: 'text'}, description: 'Change icon to show'},
  size: { control: {type: 'range', min: 4, max: 100}, description: 'Change font-size based on rem'}
}
