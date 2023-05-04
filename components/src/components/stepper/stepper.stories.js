export default {
  title: 'Component/Stepper',
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of the stepper',
      control: {
        type: 'radio',
        options: ['Default', 'Small'],
      },
    },
    style: {
      name: 'Style',
      description: 'Style of the stepper',
      control: {
        type: 'radio',
        options: ['Default', 'Text on side', 'Vertical'],
      },
    },
    label: {
      name: 'Label',
      description: 'Show or hide the label',
      control: {
        type: 'radio',
        options: ['Show', 'Hide'],
      },
    },
  },
  args: {},
};

const Template = ({ size, style, label }) => {
  let sizeClass = '';
  let styleClass = '';
  let showLabel = true;

  switch (size) {
    case 'Small':
      sizeClass = 'sdds-stepper--small';
      break;
    default:
      break;
  }

  switch (style) {
    case 'Text on side':
      styleClass = 'sdds-stepper--sidetext';
      break;
    case 'Vertical':
      styleClass = 'sdds-stepper--vertical';
      break;
    default:
      break;
  }

  switch (label) {
    case 'Hide':
      showLabel = false;
      break;
    default:
      break;
  }

  console.log('testar');

  return `
  <div class="sdds-stepper-demo-container">
    <div class="sdds-stepper ${sizeClass} ${styleClass}">
      
      <div class="sdds-stepper__step sdds-stepper__step--value">
        <div class="sdds-stepper__step-icon">
          
          <span class="sdds-stepper__step-icon-value">1</span>
    
          <svg class="sdds-stepper__step-icon-success" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3418 5.29943C17.5867 5.54276 17.5879 5.93848 17.3446 6.18331C15.1603 8.38105 13.4132 10.1263 11.9367 11.5991C11.6684 11.8668 11.4091 12.1254 11.1578 12.376C10.0256 13.5051 9.05514 14.4728 8.15387 15.3792C8.03673 15.497 7.87752 15.5634 7.71139 15.5636C7.54526 15.5638 7.38589 15.4978 7.26848 15.3803L2.67198 10.7787C2.42804 10.5345 2.42826 10.1387 2.67247 9.89478C2.91668 9.65084 3.31241 9.65106 3.55635 9.89527L7.70995 14.0535C8.48846 13.2726 9.32605 12.4373 10.2759 11.4901C10.5271 11.2396 10.7861 10.9813 11.0539 10.7142C12.5298 9.24194 14.2755 7.4981 16.458 5.30215C16.7013 5.05732 17.097 5.05611 17.3418 5.29943Z" fill="white"/>
          </svg>

          <svg class="sdds-stepper__step-icon-warning" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25175 10.919V8.75H10.7367V10.919L10.5167 13.603H9.47175L9.25175 10.919ZM9.21875 14.439H10.7807V15.935H9.21875V14.439Z" fill="#FF2340"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C10.2332 1.875 10.4469 2.00479 10.5545 2.21165L18.6795 17.8367C18.7803 18.0304 18.7726 18.2627 18.6592 18.4494C18.5459 18.636 18.3434 18.75 18.125 18.75H1.875C1.65662 18.75 1.45408 18.636 1.34075 18.4494C1.22742 18.2627 1.21974 18.0304 1.32049 17.8367L9.44549 2.21165C9.55306 2.00479 9.76684 1.875 10 1.875ZM2.90445 17.5H17.0956L10 3.85471L2.90445 17.5Z" fill="#FF2340"/>
          </svg>

        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step value</label>' : ''}
          
        
      </div>

      <div class="sdds-stepper__step sdds-stepper__step--warning">
        <div class="sdds-stepper__step-icon">
            
          <span class="sdds-stepper__step-icon-value">2</span>

          <svg class="sdds-stepper__step-icon-success" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3418 5.29943C17.5867 5.54276 17.5879 5.93848 17.3446 6.18331C15.1603 8.38105 13.4132 10.1263 11.9367 11.5991C11.6684 11.8668 11.4091 12.1254 11.1578 12.376C10.0256 13.5051 9.05514 14.4728 8.15387 15.3792C8.03673 15.497 7.87752 15.5634 7.71139 15.5636C7.54526 15.5638 7.38589 15.4978 7.26848 15.3803L2.67198 10.7787C2.42804 10.5345 2.42826 10.1387 2.67247 9.89478C2.91668 9.65084 3.31241 9.65106 3.55635 9.89527L7.70995 14.0535C8.48846 13.2726 9.32605 12.4373 10.2759 11.4901C10.5271 11.2396 10.7861 10.9813 11.0539 10.7142C12.5298 9.24194 14.2755 7.4981 16.458 5.30215C16.7013 5.05732 17.097 5.05611 17.3418 5.29943Z" fill="white"/>
          </svg>

          <svg class="sdds-stepper__step-icon-warning" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25175 10.919V8.75H10.7367V10.919L10.5167 13.603H9.47175L9.25175 10.919ZM9.21875 14.439H10.7807V15.935H9.21875V14.439Z" fill="#FF2340"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C10.2332 1.875 10.4469 2.00479 10.5545 2.21165L18.6795 17.8367C18.7803 18.0304 18.7726 18.2627 18.6592 18.4494C18.5459 18.636 18.3434 18.75 18.125 18.75H1.875C1.65662 18.75 1.45408 18.636 1.34075 18.4494C1.22742 18.2627 1.21974 18.0304 1.32049 17.8367L9.44549 2.21165C9.55306 2.00479 9.76684 1.875 10 1.875ZM2.90445 17.5H17.0956L10 3.85471L2.90445 17.5Z" fill="#FF2340"/>
          </svg>

        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step warning</label>' : ''}
      </div>

      <div class="sdds-stepper__step sdds-stepper__step--inactive">
        <div class="sdds-stepper__step-icon">
          
          <span class="sdds-stepper__step-icon-value">3</span>

          <svg class="sdds-stepper__step-icon-success" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3418 5.29943C17.5867 5.54276 17.5879 5.93848 17.3446 6.18331C15.1603 8.38105 13.4132 10.1263 11.9367 11.5991C11.6684 11.8668 11.4091 12.1254 11.1578 12.376C10.0256 13.5051 9.05514 14.4728 8.15387 15.3792C8.03673 15.497 7.87752 15.5634 7.71139 15.5636C7.54526 15.5638 7.38589 15.4978 7.26848 15.3803L2.67198 10.7787C2.42804 10.5345 2.42826 10.1387 2.67247 9.89478C2.91668 9.65084 3.31241 9.65106 3.55635 9.89527L7.70995 14.0535C8.48846 13.2726 9.32605 12.4373 10.2759 11.4901C10.5271 11.2396 10.7861 10.9813 11.0539 10.7142C12.5298 9.24194 14.2755 7.4981 16.458 5.30215C16.7013 5.05732 17.097 5.05611 17.3418 5.29943Z" fill="white"/>
          </svg>

          <svg class="sdds-stepper__step-icon-warning" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25175 10.919V8.75H10.7367V10.919L10.5167 13.603H9.47175L9.25175 10.919ZM9.21875 14.439H10.7807V15.935H9.21875V14.439Z" fill="#FF2340"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C10.2332 1.875 10.4469 2.00479 10.5545 2.21165L18.6795 17.8367C18.7803 18.0304 18.7726 18.2627 18.6592 18.4494C18.5459 18.636 18.3434 18.75 18.125 18.75H1.875C1.65662 18.75 1.45408 18.636 1.34075 18.4494C1.22742 18.2627 1.21974 18.0304 1.32049 17.8367L9.44549 2.21165C9.55306 2.00479 9.76684 1.875 10 1.875ZM2.90445 17.5H17.0956L10 3.85471L2.90445 17.5Z" fill="#FF2340"/>
          </svg>

        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step inactive</label>' : ''}
      </div>
      
      <div class="sdds-stepper__step sdds-stepper__step--success">
        <div class="sdds-stepper__step-icon">
            
          <span class="sdds-stepper__step-icon-value">4</span>

          <svg class="sdds-stepper__step-icon-success" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3418 5.29943C17.5867 5.54276 17.5879 5.93848 17.3446 6.18331C15.1603 8.38105 13.4132 10.1263 11.9367 11.5991C11.6684 11.8668 11.4091 12.1254 11.1578 12.376C10.0256 13.5051 9.05514 14.4728 8.15387 15.3792C8.03673 15.497 7.87752 15.5634 7.71139 15.5636C7.54526 15.5638 7.38589 15.4978 7.26848 15.3803L2.67198 10.7787C2.42804 10.5345 2.42826 10.1387 2.67247 9.89478C2.91668 9.65084 3.31241 9.65106 3.55635 9.89527L7.70995 14.0535C8.48846 13.2726 9.32605 12.4373 10.2759 11.4901C10.5271 11.2396 10.7861 10.9813 11.0539 10.7142C12.5298 9.24194 14.2755 7.4981 16.458 5.30215C16.7013 5.05732 17.097 5.05611 17.3418 5.29943Z" fill="white"/>
          </svg>

          <svg class="sdds-stepper__step-icon-warning" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25175 10.919V8.75H10.7367V10.919L10.5167 13.603H9.47175L9.25175 10.919ZM9.21875 14.439H10.7807V15.935H9.21875V14.439Z" fill="#FF2340"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C10.2332 1.875 10.4469 2.00479 10.5545 2.21165L18.6795 17.8367C18.7803 18.0304 18.7726 18.2627 18.6592 18.4494C18.5459 18.636 18.3434 18.75 18.125 18.75H1.875C1.65662 18.75 1.45408 18.636 1.34075 18.4494C1.22742 18.2627 1.21974 18.0304 1.32049 17.8367L9.44549 2.21165C9.55306 2.00479 9.76684 1.875 10 1.875ZM2.90445 17.5H17.0956L10 3.85471L2.90445 17.5Z" fill="#FF2340"/>
          </svg>

        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step success</label>' : ''}
      </div>

    </div>
  </div>
    `;
};

export const Basic = Template.bind({});
Basic.args = {};
