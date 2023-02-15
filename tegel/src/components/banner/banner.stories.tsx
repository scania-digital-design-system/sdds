import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Banner',
  parameters: {
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
      options: ['Default', 'Error', 'Info'],
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
    link: {
      name: 'Link',
      description: 'Text to display in link section',
      control: {
        type: 'text',
      },
    },
    hideIcon: {
      name: 'Hide icon',
      description:
        'If an icon should be displayed. For type default the truck icon is used in this example, but it should be changed to suit your needs.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    state: 'Default',
    header: 'This is a header text area',
    subheader: 'SubHeader text area',
    link: 'Learn more',
    hideIcon: false,
  },
};

const Template = ({ state, hideIcon, header, subheader, link }) =>
  formatHtmlPreview(`
    <div class="sdds-banner sdds-banner-${state.toLowerCase()}">
      ${
        !hideIcon && state === 'error'
          ? '<span class="sdds-banner-prefix"><sdds-icon name="error" size="20px"></sdds-icon></span>'
          : ''
      }
      ${
        !hideIcon && state === 'info'
          ? '<span class="sdds-banner-prefix"><sdds-icon name="info" size="20px"></sdds-icon></span>'
          : ''
      }
      ${
        !hideIcon && !(state === 'info' || state === 'error')
          ? '<span class="sdds-banner-prefix"><sdds-icon name="truck" size="20px"></sdds-icon></span>'
          : ''
      }
      <div class="sdds-banner-body">
      ${header && `<h6 class="sdds-banner-header">${header}</h6>`}
      ${subheader && `<div class="sdds-banner-subheader">${subheader}</div>`}
      ${link && `<a class="sdds-link sdds-banner-link">${link}</a>`}
      </div>
      <button type="button" aria-label="close" class="sdds-banner-close">
        <sdds-icon name="cross" size="20px"></sdds-icon>
      </button>
    </div>
  `);

export const Native = Template.bind({});
