export default {
  title: 'Component/Tabs/Inline Tabs',
  parameters: {
    layout: 'fullpage',
  },
  argTypes: {
    autoHeight: {
      name: 'Auto height',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};

const Template = ({ autoHeight = false }) => `
  <style>
    /* Style just for demo */
    #root {
      padding: 32px !important;
      background-color: #fff;
      height: 100vh;
    }
  </style>

  <sdds-inline-tabs ${autoHeight ? 'auto-height' : ''}>
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
      This is just a little content, but the size of the container is based to the tab with the most content.
    </div>

    <div disabled name="Tab 3">
      Content for tab 3<br>
      This tab is disabled, so you should not be able to see this content.
    </div>

    <div name="Tab 4">
      Content for tab 4<br>
      here is some content...
    </div>

    <div name="Tab 5">
      Content for tab 5<br>
      here is some content...
    </div>

    <div name="Tab 6">
      Content for tab 6<br>
      here is some content...
    </div>

  </sdds-inline-tabs>
`;

export const Basic = Template.bind({});
Basic.args = {};

export const AutoHeight = Template.bind({});
AutoHeight.args = {
  autoHeight: true,
};
