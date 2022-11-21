import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray';

export default {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    toastType: {
      name: 'Message type',
      description: 'Changes the type of message',
      control: {
        type: 'radio',
      },
      options: ['Success', 'Info', 'Warning', 'Error'],
    },
    subheader: {
      name: 'Subheader',
      description: 'Adds a subheader',
    },
    link: {
      name: 'Link',
      description: 'Adds a CTA link',
    },
    iconType: {
      name: 'Icon type',
      description: 'Native/Webcomponent',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Webcomponent'],
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
    toastType: 'Success',
    subheader: false,
    link: false,
    iconType: 'Webcomponent',
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
  Error: 'info',
};

const Template = ({ toastType, subheader, link, iconType, icon }) => {
  const iconValue = icon === 'recommended' ? iconLookup[toastType] : icon;
  return formatHtmlPreview(
    `
      ${
        iconType === 'Native'
          ? `
    <style>
    @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
      i.sdds-icon {
        font-size: 20px;
      }
    </style>
      `
          : ''
      }
  <div class="sdds-toast sdds-toast-${typeLookup[toastType]}">
  ${
    icon === 'none'
      ? ''
      : `
    <div class="sdds-toast-icon">
      ${
        iconType === 'Native'
          ? `<i class="sdds-icon ${iconValue}"></i>`
          : `<sdds-icon name="${iconValue}" size="20px" />
      `
      }
    </div>
  `
  }
    <div class="sdds-toast-content">
      <div class="sdds-toast-header">
        <span class="sdds-toast-headline">This is ${
          toastType === 'Success' || toastType === 'Warning' ? 'a' : 'an'
        } ${toastType.toLowerCase()} message</span>
        <span class='sdds-toast-dismiss'></span>
      </div>
      ${
        subheader || link
          ? `\n<div class="sdds-toast-body">\
          ${subheader ? '\n<span class="sdds-toast-subheadline">Short subheader</span>' : ''}\
           ${link ? '\n<a class="sdds-toast-link" href="#">Link example</a>' : ''}
          </div> `
          : ''
      }
    </div>
  </div>
  `,
  );
};

export const Default = Template.bind({});
Default.args = {};
