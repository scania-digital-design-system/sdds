import { formatHtmlPreview } from '../../utils/utils';

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
  },
  args: {
    toastType: 'Success',
    subheader: false,
    link: false,
    iconType: 'Webcomponent',
  },
};

const Template = ({ toastType, subheader, link, iconType }) => {
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
  const colorLooup = {
    Success: 'positive',
    Info: 'information',
    Warning: 'warning',
    Error: 'negative',
  };

  return formatHtmlPreview(
    `
    <style>
      ${
        iconType === 'Native'
          ? `@import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
      i {
        font-size: 20px;
        color: var(--sdds-${colorLooup[toastType]});
      }
      `
          : `
      sdds-icon{
        color: var(--sdds-${colorLooup[toastType]});
      }
      `
      }
    </style>
  <div class="sdds-toast sdds-toast-${typeLookup[toastType]}">
    <div class="sdds-toast-icon">
      ${
        iconType === 'Native'
          ? `<i class="sdds-icon ${iconLookup[toastType]}"></i>`
          : `<sdds-icon name="${iconLookup[toastType]}" size="20px" />
      `
      }
    </div>
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
Default.args = {
  toastType: 'Success',
};
