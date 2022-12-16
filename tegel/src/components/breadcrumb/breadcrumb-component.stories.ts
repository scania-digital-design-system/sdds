export default {
  title: 'Components/Breadcrumb',
  parameters: {
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2703%3A4725&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2703%3A4725&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
};

const Template = () => `   
      <sdds-breadcrumb>
        <sdds-breadcrumb-item href="#" link-text="A breadcrumb"></sdds-breadcrumb-item>
        <sdds-breadcrumb-item href="#" link-text="Another one"></sdds-breadcrumb-item>
        <sdds-breadcrumb-item link-text="Current one" current></sdds-breadcrumb-item>
      </sdds-breadcrumb>
      `;

export const WebComponent = Template.bind({});

WebComponent.args = {};
