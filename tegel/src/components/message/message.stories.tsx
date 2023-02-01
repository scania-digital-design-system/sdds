import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Message',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11884%3A47370&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11884%3A47370&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    messageType: {
      name: 'Message Type',
      description: 'The type of the message.',
      control: {
        type: 'radio',
      },
      options: ['Information', 'Error', 'Warning', 'Success'],
    },
    variant: {
      name: 'Mode variant',
      description: 'The mode variant of the component',
      control: {
        type: 'radio',
      },
      options: ['Primary', 'Secondary'],
    },
    icon: {
      name: 'Icon',
      description: 'Show icon',
      control: {
        type: 'boolean',
      },
    },
    iconType: {
      name: 'Icon',
      description: 'Switch between show a native/web component icon.',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Web Component'],
      if: { arg: 'icon', eq: true },
    },
    showExtendedMessage: {
      name: 'Extended Message',
      description: 'Show an extended message',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    messageType: 'Information',
    variant: 'Primary',
    icon: false,
    iconType: 'Web Component',
    showExtendedMessage: false,
  },
};

const nativeIconNameLookup = {
  Information: 'info',
  Error: 'error',
  Warning: 'warning',
  Success: 'tick',
};

const Template = ({ messageType, icon, iconType, showExtendedMessage, variant }) => {
  const messageTypeClass =
    messageType === 'Information'
      ? 'sdds-message-type-informative'
      : `sdds-message-type-${messageType.toLowerCase()}`;
  const iconClass =
    messageType === 'Information'
      ? 'sdds-message-icon-informative'
      : `sdds-message-icon-${messageType.toLowerCase()}`;
  const variantValue = variant === 'Secondary' ? 'sdds-mode-variant-secondary' : '';
  const iconHtml =
    iconType === 'Native'
      ? `<i class="sdds-message-icon sdds-icon ${iconClass} ${nativeIconNameLookup[messageType]}"></i>`
      : `<div><sdds-icon class="sdds-message-icon ${iconClass}" name="${nativeIconNameLookup[messageType]}" size="20"></sdds-icon></div>`;

  return formatHtmlPreview(
    `

    ${
      iconType === 'Native'
        ? `<style>
    /* Note: In case using WebFont icons, please make sure to import icons css file in your implementation */
    @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
    </style>`
        : ''
    }

    <div class="sdds-message ${messageTypeClass} ${icon ? 'sdds-message-icon-active' : ''} ${
      showExtendedMessage ? 'sdds-message-extended-active' : ''
    } ${variantValue}">
    ${icon ? iconHtml : ''}
    <h4 class="sdds-message-single">
      Single line message goes here.
    </h4>
    ${
      showExtendedMessage
        ? '<p class="sdds-message-extended">Longer message text can be placed here. Longer message text can be placed here. Longer message text can be placed here.</p>'
        : ''
    }
  </div>
  `,
  );
};

export const Native = Template.bind({});
