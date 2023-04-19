export default {
  title: 'Native Components (Deprecated)/Breadcrumb',
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
    <div class="sdds-breadcrumb">
      <div class="sdds-breadcrumb-item"><a href="#">Page 1</a></div>
      <div class="sdds-breadcrumb-item"><a href="#">Page 2</a></div>
      <div class="sdds-breadcrumb-item sdds-breadcrumb-item-current"><a aria-current="page">Page 3</a></div>
    </div>
    `;

export const Native = Template.bind({});

Native.args = {};
