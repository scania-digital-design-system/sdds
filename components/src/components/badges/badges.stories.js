export default {
  title: 'Component/Badges',
  argTypes: {
    value: {
      name: 'Value',
      description: 'Set a value to show on the badge',
      control: {
        type: 'number',
      },
    },
  },
  args: {
    value: 0,
  },
};

const basicStyle = `<style>
                 .demo {
                      margin:20px;
                  }                   
              </style>`;
const basicTemplate = ({ value }) => {
  // convert to string
  let valueString = value != null ? value.toString() : '';
  return `
    ${basicStyle}
      <sdds-theme></sdds-theme>
      <div class="demo">  
      <sdds-badges value=${valueString}>       
      </sdds-badges> 
      </div>

    `;
};
export const Basic = basicTemplate.bind({});
Basic.args = {};

const style = `<style>
                    .demo {
                      margin:20px;
                      height: 50px;
                      width: 50px;
                      position: relative;
                      background-color: #C4C4C4;
                    }
                    .demo-badges{
                      position: absolute;
                      left: 32px;
                      top: -5px;
                    }
              </style>`;
const badgesTemplate = ({ value }) => {
  // convert to string
  let valueString = value != null ? value.toString() : '';
  return `
    ${style}
      <sdds-theme></sdds-theme>
      <div class="demo">
      <sdds-badges class = "demo-badges" value=${valueString}>       
      </sdds-badges> 
      </div>
    `;
};
export const Rounded = badgesTemplate.bind({});
Rounded.args = {
  value: 2,
};
export const Pill = badgesTemplate.bind({});
Pill.args = {
  value: 100,
};
