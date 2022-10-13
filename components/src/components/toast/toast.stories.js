import format from 'html-format';

export default {
  title: 'Components/Toast/Native',
  argTypes: {
    toastType: {
      name: 'Message type',
      defaultValue: 'success',
      control: {
        type: 'radio',
        options: { Success: 'success', Info: 'info', Warning: 'warning', Error: 'error' },
      },
    },
  },
  args: {
    toastType: 'success',
    Subheader: false,
    Link: false,
  },
};

const ToastTemplate = args => {
  return format(
    `
  <div class="sdds-toast sdds-toast-${args.toastType}">
    <div class="sdds-toast-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    </div>
    <div class="sdds-toast-content">
      <div class="sdds-toast-header">
        <span class="sdds-toast-headline">This is ${args.toastType === 'success' || args.toastType === 'warning' ? 'a' : 'an'} ${args.toastType} message</span>
        <span class='sdds-toast-dismiss'></span>
      </div>\
    ${
      args.Subheader || args.Link
        ? `\n<div class="sdds-toast-body">\
        ${args.Subheader ? `\n<span class="sdds-toast-subheadline">Short subheader</span>` : ''}\
         ${args.Link ? `\n<a class="sdds-toast-link" href="#">Link examplee</a>` : ''}
        </div> `
        : ''
    }
    </div>
  </div>
  `,
  );
};

export const Default = ToastTemplate.bind({});
Default.argTypes = {};
