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
      options: { Information: 'information', Error: 'error', Warning: 'warning', Success: 'success' },
    },
    variant: {
      name: 'Variant',
      description: 'The variant of the message, on-dark/on-light',
      control: {
        type: 'radio',
      },
      options: { 'On-dark': 'on-dark', 'On-light': 'on-light' },
    },
    icon: {
      name: 'Icon',
      description: 'Switch between show a native/webcomponent-icon, or no icon.',
      control: {
        type: 'radio',
      },
      options: { Native: 'native', Webcomponent: 'webcomponent', None: 'none' },
    },
    showExtendedMessage: {
      name: 'Extended Message',
      desription: 'Show an extended message',
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ messageType, icon, showExtendedMessage, variant }) => {
  let messageTypeClass = messageType === 'information' ? 'sdds-message__type-informative' : `sdds-message__type-${messageType}`;
  let iconClass = messageType === 'information' ? 'sdds-message-icon--informative' : `sdds-message-icon--${messageType}`;
  let typeCssNameVar = messageType === 'information' ? 'informative' : messageType;
  const variantValue = variant === 'on-dark' ? 'sdds-message-ongrey' : '';

  let typeCssValueVar = '';
  switch (messageType) {
    case 'error':
      typeCssValueVar = 'negative';
      break;
    case 'success':
      typeCssValueVar = 'positive';
      break;
    default:
      typeCssValueVar = messageType;
      break;
  }

  let iconName = '';
  switch (messageType) {
    case 'information':
      iconName = 'info';
      break;
    case 'error':
      iconName = 'error';
      break;
    case 'warning':
      iconName = 'warning';
      break;
    case 'success':
      iconName = 'tick';
      break;
    default:
      break;
  }

  let iconHtml = '';
  switch (icon) {
    case 'native':
      iconHtml = `<i class="sdds-message-icon sdds-icon ${iconClass} ${iconName} "></i>`;
      break;
    case 'webcomponent':
      iconHtml = `<div><sdds-icon class="sdds-message-icon ${iconClass}" name="${iconName}" size="20" /></div>`;
      break;
    default:
      break;
  }

  return formatHtmlPreview(
    ` 
    <style>
    ${icon === 'native' ? `@import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');` : ''}
    .sdds-message-icon--${typeCssNameVar} {
      color: var(--sdds-${typeCssValueVar});
      font-size: 20px;
    }
  </style>
    <div class="sdds-message ${messageTypeClass} ${icon !== 'none' ? 'sdds-message__icon-active' : ''} ${
      showExtendedMessage ? 'sdds-message__extended-active' : ''
    } ${variantValue}">
    ${iconHtml}
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
Information.args = {
  messageType: 'information',
  icon: 'webcomponent',
  showExtendedMessage: true,
  variant: 'on-dark',
};

export const Error = Template.bind({});
Error.args = {
  messageType: 'error',
  icon: 'webcomponent',
  showExtendedMessage: true,
  variant: 'on-dark',
};

export const Warning = Template.bind({});
Warning.args = {
  messageType: 'warning',
  icon: 'webcomponent',
  showExtendedMessage: true,
  variant: 'on-dark',
};

export const Success = Template.bind({});
Success.args = {
  messageType: 'success',
  icon: 'webcomponent',
  showExtendedMessage: true,
  variant: 'on-dark',
};
