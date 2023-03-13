import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray';

export default {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=5903%3A245536&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=5903%3A245536&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    type: {
      name: 'Message type',
      description: 'Changes the type of message.',
      control: {
        type: 'radio',
      },
      options: ['Success', 'Info', 'Warning', 'Error'],
    },
    header: {
      name: 'Subheader',
      description: 'Adds a header text.',
      control: {
        type: 'text',
      },
    },
    subheader: {
      name: 'Subheader',
      description: 'Adds a subheader text.',
      control: {
        type: 'text',
      },
    },
    link: {
      name: 'Link',
      description: 'Adds a CTA link.',
    },
    iconType: {
      name: 'Icon type',
      description: 'Switch between showing a native or a web component icon.',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Web Component'],
    },
    icon: {
      name: 'Icon',
      description:
        'Icon to display on the button. Choose "none" to exclude the icon, or choose "recommended" to pick the icon that is recommended for the type of toast.',
      control: {
        type: 'select',
      },
      options: ['none', 'recommended', ...iconsNames],
      if: { arg: 'size', neq: 'xs' },
    },
  },
  args: {
    type: 'Success',
    header: 'Header',
    subheader: '',
    link: false,
    iconType: 'Web Component',
    icon: 'recommended',
  },
};
const typeLookup = {
  Success: 'success',
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
};
const iconLookup = {
  Success: 'tick',
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
};

const Template = ({ type, header, subheader, link, iconType, icon }) => {
  const iconValue = icon === 'recommended' ? iconLookup[type] : icon;
  return formatHtmlPreview(
    `
      ${
        iconType === 'Native'
          ? `
    <style>
    /* Note: In case using WebFont icons, please make sure to import icons css file in your implementation */
    @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');

    </style>
      `
          : ''
      }
  <div class="sdds-toast sdds-toast-${typeLookup[type]}">
  ${
    icon === 'none'
      ? ''
      : `
    <div class="sdds-toast-icon">
      ${
        iconType === 'Native'
          ? `<i class="sdds-icon ${iconValue}"></i>`
          : `<sdds-icon name="${iconValue}" size="20px"></sdds-icon>
      `
      }
    </div>
  `
  }
    <div class="sdds-toast-content">
      <div class="sdds-toast-header">
        <span class="sdds-toast-headline">${header}</span>
        <button type="button" aria-label="close" class="sdds-toast-close">
          ${
            iconType === 'Native'
              ? `<i class="sdds-icon cross"></i>`
              : `<sdds-icon name="cross" size="20px"></sdds-icon>
          `
          }
        </button>
      </div>
      ${
        subheader || link
          ? `\n<div class="sdds-toast-body">\
          ${subheader ? `\n<span class="sdds-toast-subheadline">${subheader}</span>` : ''}\
          ${link ? '\n<a class="sdds-toast-link" href="#">Link example</a>' : ''}
          </div> `
          : ''
      }
    </div>
  </div>
  `,
  );
};

export const Native = Template.bind({});
