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

const basicTemplate = ({ value }) => {
  const valueString = value != null ? value.toString() : ''; // convert to string
  return ` 
      <sdds-badges value=${valueString}>       
      </sdds-badges>
    `;
};
export const Basic = basicTemplate.bind({});
Basic.args = {};

const style = `<style>
                    .demo {
                      margin:5px;
                      height: 32px;
                      width: 32px;
                      position: relative;
                      background-color: #C4C4C4;
                    }
                    .demo-badges{
                      position: absolute;
                      left: 16px;
                      top: -5px;
                    }
              </style>`;
const badgesTemplate = ({ value }) => {
  const valueString = value != null ? value.toString() : ''; // convert to string
  return `
    ${style}
      <div class="demo">
      <sdds-badges class="demo-badges" value=${valueString}>       
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
