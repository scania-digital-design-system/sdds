import itemReadme from './sdds-breadcrumb-item/readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    notes: { 'Breadcumb Item': itemReadme },
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

const Template = () =>
  formatHtmlPreview(
    `   
      <sdds-breadcrumb>
        <sdds-breadcrumb-item link-href="#">Page 1</sdds-breadcrumb-item>
        <sdds-breadcrumb-item link-href="google.se">Page 2</sdds-breadcrumb-item>
        <sdds-breadcrumb-item current>Page 3</sdds-breadcrumb-item>
      </sdds-breadcrumb>
      `,
  );

export const WebComponent = Template.bind({});
