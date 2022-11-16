import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Stepper',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of the stepper',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Small'],
    },
    style: {
      name: 'Style',
      description: 'Style of the stepper',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Text on side', 'Vertical'],
    },
    showLabel: {
      name: 'Show label text',
      description: 'Show or hide the label text',
      control: {
        type: 'boolean',
      },
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
    size: 'Default',
    style: 'Default',
    showLabel: true,
    iconType: 'Native',
  },
};

const Template = ({ size, style, showLabel, iconType }) => {
  let sizeClass = size === 'Small' ? 'sdds-stepper-sm' : '';

  const styleLookup = {
    'Default': '',
    'Text on side': 'sdds-stepper--sidetext',
    'Vertical': 'sdds-stepper--vertical',
  };
  return formatHtmlPreview(
    `
    <style>
    ${
      iconType === 'Native'
        ? `  @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
    `
        : ''
    }
      ${iconType === 'Native' ? '.sdds-icon.warning' : 'sdds-icon[name="warning"]'} {
        color: var(--sdds-negative)
      }
      ${iconType === 'Native' ? '.sdds-icon.tick' : 'sdds-icon[name="tick"]'} {
        color: var(--sdds-white)
      }
      ${
        iconType === 'Native'
          ? `
      .sdds-icon.warning {
        font-size: ${size === 'Small' ? '16px' : '18px'};
      }
      .sdds-icon.warning:before{
        line-height: 1;
      }
      .sdds-icon.tick {
        font-size: ${size === 'Small' ? '16px' : '20px'};
      }
      .sdds-icon.tick:before{
        line-height: 1;
      }`
          : `sdds-icon{
          line-height: 1;
      }`
      }
    </style>
    <div class="sdds-stepper-demo-container">
    <div class="sdds-stepper ${sizeClass} ${styleLookup[style]}">
      
      <div class="sdds-stepper__step sdds-stepper__step--value">
        <div class="sdds-stepper__step-icon">
          <span class="sdds-stepper__step-icon-value">1</span>
        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step value</label>' : ''}
      </div>

      <div class="sdds-stepper__step sdds-stepper__step--warning">
        <div class="sdds-stepper__step-icon">
        ${
          iconType === 'Native'
            ? `<i class="sdds-icon warning"></i>
        `
            : `<sdds-icon name="warning" size="${size === 'Small' ? '16px' : '18px'}" />`
        }
        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step warning</label>' : ''}
      </div>

      <div class="sdds-stepper__step sdds-stepper__step--inactive">
        <div class="sdds-stepper__step-icon">
          <span class="sdds-stepper__step-icon-value">3</span>
        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step inactive</label>' : ''}
      </div>
      
      <div class="sdds-stepper__step sdds-stepper__step--success">
        <div class="sdds-stepper__step-icon">
        ${
          iconType === 'Native'
            ? `<i class="sdds-icon tick"></i>
        `
            : `<div>
        <sdds-icon name="tick" size="${size === 'Small' ? '16px' : '20px'}" />
        </div>`
        }
        </div>
        ${showLabel ? '<label class="sdds-stepper__step_label">Step success</label>' : ''}
      </div>

    </div>
  </div>
    `,
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'Small',
};

export const TextOnSide = Template.bind({});
TextOnSide.args = {
  size: 'Default',
  style: 'Text on side',
};

export const Vertical = Template.bind({});
Vertical.args = {
  size: 'Default',
  style: 'Vertical',
};

export const HideLabel = Template.bind({});
HideLabel.args = {
  size: 'Default',
  style: 'Default',
  label: 'Hide',
};
