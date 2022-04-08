export default {
  title: 'Component/Toast',
  argTypes: {
    toastType: {
      name: 'message type',
      defaultValue: 'success',
      control: {
        type: 'radio',
        options: ['success', 'info', 'warning', 'error'],
      },
    },
  },
  args: {
    header: 'This is a message',
    body: false,
    subheader: true,
    link: true,
    subtext: 'Short subheader',
    linktext: 'Link example',
  },
};

const ToastTemplate = ({
  toastType,
  header,
  body,
  subheader,
  link,
  subtext,
  linktext,
}) => `
  <div class="sdds-toast sdds-toast-${toastType}">
    <div class="sdds-toast-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    </div>
    <div class="sdds-toast-content">
      <div class="sdds-toast-header">
        <span class="sdds-toast-headline">${header}</span>
        <span class='sdds-toast-dismiss'></span>
      </div>

    ${
      body
        ? `<div class="sdds-toast-body">
        ${
          subheader
            ? `<span class="sdds-toast-subheadline">${subtext}</span>`
            : ''
        }
        ${link ? `<a class="sdds-toast-link" href="#">${linktext}</a>` : ''}
      </div> `
        : ''
    }
    </div>
  </div>
  `;

export const Basic = ToastTemplate.bind({});
Basic.argTypes = {};
