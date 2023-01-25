import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray';
import readme from './readme.md';

// FIXME: CMS: Change state to type in Code tab of component

export default {
  title: 'Components/Banner',
  parameters: {
    notes: readme,
    layout: 'fullscreen',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=5927%3A497&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=5927%3A497&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    state: {
      name: 'Type',
      description: 'Changes type of component',
      options: ['Default', 'Error', 'Information'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    header: {
      name: 'Header',
      description: 'Text to display in header section',
      control: {
        type: 'text',
      },
    },
    subheader: {
      name: 'Subheader',
      description: 'Text to display in subheader section',
      control: {
        type: 'text',
      },
    },
    linkText: {
      name: 'Link',
      description: 'Text to display in link section',
      control: {
        type: 'text',
      },
    },
    linkHref: {
      name: 'Link href',
      description: 'Href for link',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'Icon',
      description: 'Name of icon to display, choose `none` to remove the icon.',
      control: {
        type: 'select',
      },
      options: [...iconsNames, 'none'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
  },
  args: {
    state: 'Default',
    header: 'This is a header text area',
    subheader: 'SubHeader text area',
    linkText: 'Learn more',
    linkHref: 'tegel.scania.com',
    icon: 'none',
  },
};

const Template = ({ state, icon, header, subheader, linkText, linkHref }) =>
  formatHtmlPreview(`
      <sdds-banner
          state="${state.toLowerCase()}"
          ${icon !== 'none' ? `icon="${icon}"` : ''}
          ${header !== '' ? `header="${header}"` : ''}
          ${subheader !== '' ? `subheader="${subheader}"` : ''}
          ${linkText !== '' ? `link-text="${linkText}"` : ''}
          ${linkHref !== '' ? `link-href="${linkHref}"` : ''}
          >
      </sdds-banner>
      <script>
        document.addEventListener('sddsBannerCloseEvent', (event) => {
          console.log('Closed banner with BannerID: ', event.detail.bannerId)
        })
      </script>
    `);
export const WebComponent = Template.bind({});
