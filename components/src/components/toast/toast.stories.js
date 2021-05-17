export default {
  title: 'Component/Toast',
  argTypes: {
    toastType: {
      name: 'type of',
      defaultValue: 'success',
      description: 'Lorem ipsum',
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'error']
      }
    }
  },
  args: {
    headline: 'This is a message',
    subheadline: 'Short subheader',
    link: 'Link example'
  }
};

const ToastTemplate = ({toastType, headline, subheadline, link}) => {
  return `
  <sdds-theme></sdds-theme>

  <div class="sdds-toast sdds-toast-${toastType}">

    <div class="sdds-toast-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    </div>

    <div class="sdds-toast-content">

      <div class="sdds-toast-header">
        <span class="sdds-toast-headline">${headline}</span>
        <span class='sdds-toast-dismiss'></span>
      </div>

      <div class="sdds-toast-body">
        ${subheadline ? `<span class="sdds-toast-subheadline">${subheadline}</span>` : ``}
        ${link ? `<span class="sdds-toast-link"><a href="#">${link}</a></span>` : ``}
      </div>

    </div>
  </div>
  `
};

export const Basic = ToastTemplate.bind({});
Basic.argTypes = {}