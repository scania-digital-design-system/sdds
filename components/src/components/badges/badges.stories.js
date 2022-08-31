export default {
  title: 'Component/Badges',
  argTypes: {
    visible: {
      name: 'Visible',
      description: 'Toggle visibility of badge',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    value: {
      name: 'Value',
      description: 'Set a value to show on the badge',
      control: {
        type: 'number',
      },
      if: { arg: 'value' || 'visible', truthy: true },
    },
  },
};

const basicTemplate = ({ value, visible }) => {
  const valueString = value != null ? value.toString() : ''; // convert to string
  return ` 
      <sdds-badges value=${valueString} is-visible = ${visible}>       
      </sdds-badges>
    `;
};
export const Basic = basicTemplate.bind({});
Basic.args = {
  visible: true,
  value: 1,
};

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
const badgesTemplate = ({ value, visible }) => {
  const valueString = value != null ? value.toString() : ''; // convert to string
  return `
    ${style}
      <div class="demo">
      <sdds-badges class="demo-badges" value='${valueString}' is-visible = ${visible}>       
      </sdds-badges> 
      </div>
    `;
};

const smallBadgeStyle = `<style>
                    .demo {
                      margin:5px;
                      height: 32px;
                      width: 32px;
                      position: relative;
                      background-color: #C4C4C4;
                    }
                    .demo-badges{
                      position: absolute;
                      left: 26px;
                      top: -2px;
                    }
              </style>`;
const smallBadgeTemplate = ({ visible }) => {
  return `
    ${smallBadgeStyle}
      <div class="demo">
      <sdds-badges class="demo-badges" is-small is-visible = ${visible}>       
      </sdds-badges> 
      </div>
    `;
};

export const Rounded = badgesTemplate.bind({});
Rounded.args = {
  visible: true,
  value: 2,
};
export const Pill = badgesTemplate.bind({});
Pill.args = {
  visible: true,
  value: 100,
};
export const Small = smallBadgeTemplate.bind({});
Small.args = {
  visible: true,
};
