import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Message',
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
    modeVariant: {
      name: 'Mode variant',
      description:
        'Mode variant adjusts component colors to have better visibility depending on global mode and background.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    messageType: {
      name: 'Message type',
      description: 'Changes the type of the component.',
      control: {
        type: 'radio',
      },
      options: ['Information', 'Error', 'Warning', 'Success'],
      table: {
        defaultValue: { summary: 'Information' },
      },
    },
    showExtendedMessage: {
      name: 'Extended message',
      description: 'Shows an extended message.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
    noIcon: {
      name: 'No icon',
      description: 'Hides the icon.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    iconType: {
      name: 'Icon type',
      description: 'Switch between showing a native or a web component icon.',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Web Component'],
      if: { arg: 'icon', eq: true },
      table: {
        defaultValue: { summary: 'Web Component' },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    messageType: 'Information',
    showExtendedMessage: true,
    noIcon: false,
    iconType: 'Web Component',
  },
};

const nativeIconNameLookup = {
  Information: 'info',
  Error: 'error',
  Warning: 'warning',
  Success: 'tick',
};

const Template = ({ modeVariant, messageType, showExtendedMessage, noIcon, iconType }) => {
  const messageTypeClass =
    messageType === 'Information'
      ? 'sdds-message-type-informative'
      : `sdds-message-type-${messageType.toLowerCase()}`;
  const iconClass =
    messageType === 'Information'
      ? 'sdds-message-icon-informative'
      : `sdds-message-icon-${messageType.toLowerCase()}`;
  const iconHtml =
    iconType === 'Native'
      ? `<i class="sdds-message-icon sdds-icon ${iconClass} ${nativeIconNameLookup[messageType]}"></i>`
      : `<div class="sdds-message-icon ${iconClass}"><sdds-icon name="${nativeIconNameLookup[messageType]}" size="20"></sdds-icon></div>`;

  return formatHtmlPreview(
    `
    <style>
      .demo-wrapper {
        width: 380px;
      }
    </style>

    ${
      iconType === 'Native'
        ? `<style>
    /* Note: In case using WebFont icons, please make sure to import icons css file in your implementation */
    @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
    </style>`
        : ''
    }
    <div class="demo-wrapper">
      <div class="sdds-message ${messageTypeClass} ${noIcon ? '' : 'sdds-message-icon-active'} ${
      showExtendedMessage ? 'sdds-message-extended-active' : ''
    }
      ${
        modeVariant === 'Inherit from parent'
          ? ''
          : `sdds-mode-variant-${modeVariant.toLowerCase()}`
      }">
      ${noIcon ? '' : iconHtml}
      <h4 class="sdds-message-single">
        Single line message goes here.
      </h4>
      ${
        showExtendedMessage
          ? '<p class="sdds-message-extended">Longer message text can be placed here. Longer message text can be placed here.</p>'
          : ''
      }
    </div>
  </div>
  `,
  );
};

export const Native = Template.bind({});
