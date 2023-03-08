import itemReadme from './sdds-breadcrumb-link/readme.md';
import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    notes: { 'Breadcumb': readme, 'Breadcumb Link': itemReadme },
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
        <sdds-breadcrumb-link href="#">Page 1</sdds-breadcrumb-link>
        <sdds-breadcrumb-link href="google.se">Page 2</sdds-breadcrumb-link>
        <sdds-breadcrumb-link current>Page 3</sdds-breadcrumb-link>
      </sdds-breadcrumb>
      `,
  );

export const WebComponent = Template.bind({});
