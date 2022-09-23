export default {
  title: 'Component/Chips',
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      description: 'Chip text',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'Icon',
      description: 'Icon placement',
      control: {
        type: 'radio',
        options: ['Icon left', 'Icon right', 'No icon'],
      },
    },
    state: {
      name: 'State',
      description: 'Chip state',
      control: {
        type: 'radio',
        options: ['Default', 'Active'],
      },
    },
    size: {
      name: 'Size',
      description: 'Chip size',
      control: {
        type: 'radio',
        options: ['Default', 'Small'],
      },
    },
  },
  args: {
    placeholderText: 'chip text',
    icon: 'Icon left',
    state: 'Deafult',
  },
};

const Template = ({ icon, state, placeholderText, size }) => {
  let stateClass = '';
  let sizeClass = '';
  let iconClass = '';

  switch (state) {
    case 'Active':
      stateClass = 'sdds-chip__active';
      break;
    default:
      break;
  }

  switch (size) {
    case 'Small':
      sizeClass = 'sdds-chip__small';
      break;
    default:
      break;
  }

  switch (icon) {
    case 'Icon left':
      iconClass = 'sdds-chip__icon-left';
      break;

    case 'Icon right':
      iconClass = 'sdds-chip__icon-right';
      break;

    default:
      break;
  }

  const iconSvg = `
      <svg class="sdds-chip-icon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48918 1.48218C8.48918 1.20604 8.26533 0.982178 7.98918 0.982178C7.71304 0.982178 7.48918 1.20604 7.48918 1.48218V2.01156C4.96804 2.2676 3.00065 4.39679 3.00065 6.98549V7.04135C2.99414 7.07354 2.99072 7.10686 2.99072 7.14097V11.9994L2.99075 12.0045H2.49219C2.21605 12.0045 1.99219 12.2284 1.99219 12.5045C1.99219 12.7807 2.21605 13.0045 2.49219 13.0045L13.5097 13.0045C13.7858 13.0045 14.0097 12.7807 14.0097 12.5045C14.0097 12.2284 13.7858 12.0045 13.5097 12.0045H13.0086V6.9189C13.0086 6.88227 13.0047 6.84656 12.9972 6.81218C12.9114 4.29471 10.9645 2.2495 8.48918 2.00933V1.48218ZM12.0086 12.0045L3.9907 12.0045L3.99072 11.9994V8.17606H4.00065V6.98549C4.00065 4.77649 5.79139 2.98574 8.00039 2.98574C10.2094 2.98574 12.0001 4.77649 12.0001 6.98549V8.14139H12.0086V12.0045ZM6.96331 13.9807C6.68716 13.9807 6.46331 14.2046 6.46331 14.4807C6.46331 14.7569 6.68716 14.9807 6.96331 14.9807H9.02926C9.30541 14.9807 9.52926 14.7569 9.52926 14.4807C9.52926 14.2046 9.30541 13.9807 9.02926 13.9807H6.96331Z" fill="white"/>
      </svg>
    `;

  return `
    <div class="sdds-chip ${iconClass} ${stateClass} ${sizeClass}">
      ${iconClass && iconSvg}
      <span class="sdds-chip-text">${placeholderText}</span>
    </div>`;
};

export const Basic = Template.bind({});
Basic.args = {
  icon: 'No icon',
};

export const Active = Template.bind({});
Active.args = {
  state: 'Active',
  icon: 'No icon',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  icon: 'Icon left',
};

export const IconRight = Template.bind({});
IconRight.args = {
  icon: 'Icon right',
};

export const Small = Template.bind({});
Small.args = {
  icon: 'No icon',
  size: 'Small',
};
