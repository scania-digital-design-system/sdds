export default {
  title: 'Component/Slider',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'basic', 'continuousValue', 'dualPoint']
      },
      defaultValue: 'default',
      description: 'Type of slider'
    }
  }
};

const style = `<style>
  
.demo {
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color:  #F6F6F7; 
height: 200px;
width: 200px;
}
</style>`;
const Template = ({ type }) => {
  type = type === 'default' ? 'basic' : type;

  return `
  ${style}
  <sdds-theme></sdds-theme>
  <div class="demo">
  <sdds-slider  type="${type}">
    
  </sdds-slider>
  </div>

  `;
};

export const Basic = Template.bind({});
