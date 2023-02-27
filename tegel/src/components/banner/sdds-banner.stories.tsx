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
    type: {
      name: 'Type',
      description: 'Changes the type of the component.',
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
      description: 'Sets text to be displayed in the header section.',
      control: {
        type: 'text',
      },
    },
    subheader: {
      name: 'Subheader',
      description: 'Sets text to be displayed in the subheader section.',
      control: {
        type: 'text',
      },
    },
    linkText: {
      name: 'Link',
      description: 'Sets text to be displayed in the link section.',
      control: {
        type: 'text',
      },
    },
    href: {
      name: 'Link href',
      description: 'Sets the href for the link.',
      control: {
        type: 'text',
      },
    },
    linkTarget: {
      name: 'Link target',
      description: 'Sets where to open the linked URL.',
      control: {
        type: 'radio',
      },
      options: ['_self', '_blank', '_parent', '_top'],
      table: {
        defaultValue: { summary: '_self' },
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
      if: { arg: 'type', eq: 'Default' },
    },
    persistent: {
      name: 'Disable closing',
      description: `Removes the 'close button' in the banner.`,
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    type: 'Default',
    header: 'This is a header text area',
    subheader: 'SubHeader text area',
    linkText: 'Learn more',
    href: 'tegel.scania.com',
    linkTarget: '_self',
    icon: 'truck',
    persistent: false,
  },
};

const Template = ({ type, icon, header, subheader, linkText, href, persistent, linkTarget }) =>
  formatHtmlPreview(`
      <sdds-banner
          ${type !== 'Default' ? `type="${type.toLowerCase()}"` : ''}
          ${icon !== 'none' ? `icon="${icon}"` : ''}
          ${header !== '' ? `header="${header}"` : ''}
          ${subheader !== '' ? `subheader="${subheader}"` : ''}
          ${linkText !== '' ? `link-text="${linkText}"` : ''}
          ${href !== '' ? `href="${href}"` : ''}
          ${linkTarget !== '' ? `link-target="${linkTarget}"` : ''}

          ${persistent ? `persistent` : ''}
          >
      </sdds-banner>

      <!-- Script tag with eventlistener for demo purposes. -->
      <script>
        document.addEventListener('sddsClose', (event) => {
          console.log('Closed banner with BannerID: ', event.detail.bannerId)
        })
      </script>
    `);
export const WebComponent = Template.bind({});
