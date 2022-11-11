import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Message',
  parameters: {
    layout: 'centered',
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
      name: 'Variant',
      description: 'The variant of the message, on-dark/on-light',
      control: {
        type: 'radio',
      },
      options: ['On dark', 'On light'],
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
      description: 'Switch between show a native/webcomponent icon.',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Webcomponent'],
      if: { arg: 'icon', eq: true },
    },
    showExtendedMessage: {
      name: 'Extended Message',
      desription: 'Show an extended message',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    messageType: 'Information',
    variant: 'On light',
    icon: false,
    iconType: 'Native',
    showExtendedMessage: false,
  },
};

const nativeIconNameLookup = {
  Information: 'info',
  Error: 'error',
  Warning: 'warning',
  Success: 'tick',
};
const colorLookup = {
  Information: 'information',
  Error: 'negative',
  Warning: 'warning',
  Success: 'positive',
};

const Template = ({ messageType, icon, iconType, showExtendedMessage, variant }) => {
  let messageTypeClass = messageType === 'Information' ? 'sdds-message__type-informative' : `sdds-message__type-${messageType.toLowerCase()}`;
  let iconClass = messageType === 'Information' ? 'sdds-message-icon--informative' : `sdds-message-icon--${messageType.toLowerCase()}`;
  let typeCssNameVar = messageType === 'Information' ? 'informative' : messageType.toLowerCase();
  const variantValue = variant === 'On dark' ? 'sdds-message-ongrey' : '';
  let iconHtml =
    iconType === 'Native'
      ? `<i class="sdds-message-icon sdds-icon ${iconClass} ${nativeIconNameLookup[messageType]}"></i>`
      : `<div><sdds-icon class="sdds-message-icon ${iconClass}" name="${nativeIconNameLookup[messageType]}" size="20" /></div>`;

  return formatHtmlPreview(
    ` 
    <style>
    ${iconType === 'Native' ? `@import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');` : ''}
    .sdds-message-icon--${typeCssNameVar} {
      color: var(--sdds-${colorLookup[messageType]});
      font-size: 20px;
    }
  </style>
    <div class="sdds-message ${messageTypeClass} ${icon ? 'sdds-message__icon-active' : ''} ${showExtendedMessage ? 'sdds-message__extended-active' : ''} ${variantValue}">
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

export const Information = Template.bind({});
Information.args = {};

export const Error = Template.bind({});
Error.args = {
  messageType: 'Error',
};

export const Warning = Template.bind({});
Warning.args = {
  messageType: 'Warning',
};

export const Success = Template.bind({});
Success.args = {
  messageType: 'Success',
};
