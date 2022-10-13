import formatHtmlPreview from "../../utils/utils";

export default {
  title: 'Components/Message/Native',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    messageType: {
      name: 'Message Type',
      description: 'Which type of message',
      control: {
        type: 'radio',
        options: ['information', 'error', 'warning', 'success'],
      },
    },
    theme: {
      name: 'Theme',
      description: 'Switch between different sizes',
      control: {
        type: 'radio',
        options: ['On Grey', 'On White', 'Minimal'],
      },
    },
    icon: {
      name: 'Icon',
      description: 'Switch between showing or hiding icon',
      control: {
        type: 'radio',
        options: ['Show Icon', 'Hide Icon'],
      },
    },
    extendedMessage: {
      name: 'Extended Message',
      description: 'Switch between showing or hiding extended message',
      control: {
        type: 'radio',
        options: ['Show Extended Message', 'Hide Extended Message'],
      },
    },
  },
  args: {
    messageType: 'information',
    theme: 'On Grey',
    icon: 'Show Icon',
    extendedMessage: 'Show Extended Message',
  },
};

const Template = ({ messageType, theme, icon, extendedMessage }) => {
  let messageTypeClass = '';
  let iconClass = '';
  let themeClass = '';
  let extendedMessageClass = '';

  switch (messageType) {
    case 'information':
      messageTypeClass = 'sdds-message__type-informative';
      break;
    case 'error':
      messageTypeClass = 'sdds-message__type-error';
      break;
    case 'warning':
      messageTypeClass = 'sdds-message__type-warning';
      break;
    case 'success':
      messageTypeClass = 'sdds-message__type-success';
      break;
    default:
      break;
  }

  switch (icon) {
    case 'Show Icon':
      iconClass = 'sdds-message__icon-active';
      break;
    default:
      break;
  }

  switch (extendedMessage) {
    case 'Show Extended Message':
      extendedMessageClass = 'sdds-message__extended-active';
      break;
    default:
      break;
  }

  switch (theme) {
    case 'On Grey':
      themeClass = 'sdds-message-ongrey';
      break;
    case 'Minimal':
      themeClass = 'sdds-message-minimal';
      extendedMessageClass = '';
      iconClass = 'sdds-message__icon-active';
      break;
    default:
      break;
  }

  const extendedMessageHtml = `
    <p class="sdds-message-extended">
      Longer message text can be placed here. Longer message text can be placed here. Longer message text can be placed here.
    </p>
  `;

  const iconHtml = `
    <svg class="sdds-message-icon sdds-message-icon--informative" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.008 2.50244C5.85715 2.50244 2.49219 5.8674 2.49219 10.0183C2.49219 14.1692 5.85715 17.5341 10.008 17.5341C14.1589 17.5341 17.5239 14.1692 17.5239 10.0183C17.5239 5.8674 14.1589 2.50244 10.008 2.50244ZM1.24219 10.0183C1.24219 5.17705 5.16679 1.25244 10.008 1.25244C14.8493 1.25244 18.7739 5.17705 18.7739 10.0183C18.7739 14.8595 14.8493 18.7841 10.008 18.7841C5.16679 18.7841 1.24219 14.8595 1.24219 10.0183Z" fill="#2B70D3"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0156 8.82889C10.3608 8.82889 10.6406 9.10871 10.6406 9.45389L10.6406 12.9635C10.6406 13.3087 10.3608 13.5885 10.0156 13.5885C9.67045 13.5885 9.39063 13.3087 9.39063 12.9635L9.39063 9.45389C9.39063 9.10871 9.67045 8.82889 10.0156 8.82889Z" fill="#2B70D3"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0156 6.44809C10.3608 6.44809 10.6406 6.72791 10.6406 7.07309L10.6406 7.20878C10.6406 7.55396 10.3608 7.83378 10.0156 7.83378C9.67045 7.83378 9.39062 7.55396 9.39062 7.20878L9.39062 7.07309C9.39062 6.72791 9.67045 6.44809 10.0156 6.44809Z" fill="#2B70D3"/>
    </svg>

    <svg class="sdds-message-icon sdds-message-icon--error" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.50019C5.85662 2.50019 2.49775 5.85906 2.49775 10.0024C2.49775 14.1458 5.85662 17.5047 10 17.5047C14.1434 17.5047 17.5023 14.1458 17.5023 10.0024C17.5023 5.85906 14.1434 2.50019 10 2.50019ZM1.25 10.0024C1.25 5.16995 5.16751 1.25244 10 1.25244C14.8325 1.25244 18.75 5.16995 18.75 10.0024C18.75 14.8349 14.8325 18.7524 10 18.7524C5.16751 18.7524 1.25 14.8349 1.25 10.0024Z" fill="#FF2340"/>
      <path d="M9.25175 9.044V6.25H10.7367V9.044L10.5167 11.728H9.47175L9.25175 9.044ZM9.21875 12.564H10.7807V14.06H9.21875V12.564Z" fill="#FF2340"/>
    </svg>

    <svg class="sdds-message-icon sdds-message-icon--warning" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.25175 9.919V7.75H10.7367V9.919L10.5167 12.603H9.47175L9.25175 9.919ZM9.21875 13.439H10.7807V14.935H9.21875V13.439Z" fill="#F1C21B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.875C10.2332 0.875 10.4469 1.00479 10.5545 1.21165L18.6795 16.8367C18.7803 17.0304 18.7726 17.2627 18.6592 17.4494C18.5459 17.636 18.3434 17.75 18.125 17.75H1.875C1.65662 17.75 1.45408 17.636 1.34075 17.4494C1.22742 17.2627 1.21974 17.0304 1.32049 16.8367L9.44549 1.21165C9.55306 1.00479 9.76684 0.875 10 0.875ZM2.90445 16.5H17.0956L10 2.85471L2.90445 16.5Z" fill="#F1C21B"/>
    </svg>

    <svg class="sdds-message-icon sdds-message-icon--success" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3418 5.29948C17.5867 5.5428 17.5879 5.93853 17.3446 6.18336C15.1603 8.3811 13.4132 10.1263 11.9367 11.5992C11.6684 11.8668 11.4091 12.1254 11.1578 12.3761C10.0256 13.5051 9.05514 14.4729 8.15387 15.3793C8.03673 15.4971 7.87752 15.5634 7.71139 15.5636C7.54526 15.5638 7.38589 15.4978 7.26848 15.3803L2.67198 10.7787C2.42804 10.5345 2.42826 10.1388 2.67247 9.89483C2.91668 9.65089 3.31241 9.6511 3.55635 9.89532L7.70995 14.0535C8.48846 13.2726 9.32605 12.4374 10.2759 11.4901C10.5271 11.2397 10.7861 10.9814 11.0539 10.7142C12.5298 9.24199 14.2755 7.49815 16.458 5.3022C16.7013 5.05737 17.097 5.05615 17.3418 5.29948Z" fill="#1DAB8B"/>
    </svg>
  `;

  return formatHtmlPreview(
    `
    <div class="sdds-message ${messageTypeClass} ${iconClass} ${extendedMessageClass} ${themeClass}">
    ${iconClass && iconHtml}
    <h4 class="sdds-message-single">
      Single line message goes here.
    </h4>
    ${extendedMessageClass && extendedMessageHtml}
  </div>
  `
  );
};

export const Information = Template.bind({});
Information.args = {
  messageType: 'information',
  theme: 'On Grey',
  icon: 'Show Icon',
  extendedMessage: 'Show Extended Message',
};

export const Error = Template.bind({});
Error.args = {
  messageType: 'error',
  theme: 'On Grey',
  icon: 'Show Icon',
  extendedMessage: 'Show Extended Message',
};

export const Warning = Template.bind({});
Warning.args = {
  messageType: 'warning',
  theme: 'On Grey',
  icon: 'Show Icon',
  extendedMessage: 'Show Extended Message',
};

export const Success = Template.bind({});
Success.args = {
  messageType: 'success',
  theme: 'On Grey',
  icon: 'Show Icon',
  extendedMessage: 'Show Extended Message',
};
