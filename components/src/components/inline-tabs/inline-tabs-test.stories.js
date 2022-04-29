export default {
  title: 'Component/Tabs/Inline Tabs Test',
  argTypes: {
    autoHeight: {
      name: 'Auto height',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    container: {
      name: 'Use container',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    columns: {
      name: 'Width',
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1,
      },
      defaultValue: 12,
    },
    tabs: {
      name: 'Tabs',
      control: {
        type: 'range',
        min: 2,
        max: 6,
        step: 1,
      },
      defaultValue: 3,
    },
  },
};

const Template = ({
  autoHeight = false,
  container = false,
  columns = 12,
  tabs = 3,
}) => `

 ${container ? '<div class="sdds-container">' : ''}
  <div class="sdds-row">
    <div class="sdds-col-max-${columns} 
            sdds-col-xxlg-${columns}
            sdds-col-xlg-${columns} 
            sdds-col-lg-${columns} 
            sdds-col-md-${columns} 
            sdds-col-sm-${columns} 
            sdds-col-xs-${columns}">
      <sdds-inline-tabs ${autoHeight ? 'height="auto"' : ''}>
          <div name="Tab very long name">
            Content for tab 1<br>
            This tabs has a lot of content so this is the one that decides the height of the container if height="auto" is specified on the component.
            <br><br>
            Here is some more content.
            <br><br>
            And here is a little bit more.
          </div>

          <div default name="Tab 2">
            Content for tab 2<br>
            This is just a little content${
              autoHeight
                ? ', but the size of the container is based to the tab with the most content.'
                : '.'
            }      
          </div>

          ${
            tabs >= 3
              ? `<div disabled name="Tab 3 (disabled)">
            Content for tab 3<br>
            This tab is disabled, so you should not be able to see this content.
            </div>`
              : ''
          }

          ${
            tabs >= 4
              ? `<div name="Tab 4">
            Content for tab 4<br>
            here is some content...
            </div>`
              : ''
          }

          ${
            tabs >= 5
              ? `<div name="Tab 5">
            Content for tab 5<br>
            here is some content...
            </div>`
              : ''
          }

          ${
            tabs >= 6
              ? `<div name="Tab 6">
            Content for tab 6<br>
            here is some content...
            </div>`
              : ''
          }

        </sdds-inline-tabs>
      </div>
    </div>
    ${container ? '</div>' : ''}
`;

export const Basic = Template.bind({});
Basic.args = {};

export const AutoHeight = Template.bind({});
AutoHeight.args = {
  autoHeight: true,
};
