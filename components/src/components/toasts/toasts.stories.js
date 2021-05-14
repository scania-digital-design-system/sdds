export default {
  title: 'Component/Toasts',
  argTypes: {
    toastsType: {
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

const ToastsTemplate = ({toastsType, headline, subheadline, link}) => {
  return `
  <sdds-theme></sdds-theme>

  <div class="sdds-toasts sdds-toasts-${toastsType}">

    <div class="sdds-toasts-icon">
      <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    </div>

    <div class="sdds-toasts-content">

      <div class="sdds-toasts-header">
        <span class="sdds-toasts-headline">${headline}</span>
        <span class='sdds-toasts-dismiss'></span>
      </div>

      <div class="sdds-toasts-body">
        ${subheadline ? `<span class="sdds-toasts-subheadline">${subheadline}</span>` : ``}
        ${link ? `<span class="sdds-toasts-link"><a href="#">${link}</a></span>` : ``}
      </div>

    </div>
  </div>
  `
};

export const Basic = ToastsTemplate.bind({});
Basic.argTypes = {}