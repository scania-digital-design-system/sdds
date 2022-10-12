export default {
  title: 'Components/Block/Native',
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'grey', value: '#f9fafb' },
      ],
    },
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Pick variant',
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['default', 'variant'],
        labels: {
          default: 'Default',
          variant: 'Variant',
        },
      },
    },
  },
};

const Template = args => `
    <div class="sdds-demo-block"> 
      <div class="${args.type === 'variant' ? 'sdds-block sdds-block__variant' : 'sdds-block'}">
        <p>Content be here...</p>
        <div class="sdds-block">
          <p>Content be here...</p>
        </div>
      </div>
    </div>
    `;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  backgrounds: { default: 'white' },
};

export const Variant = Template.bind({});
Variant.args = {
  type: 'variant',
};
Variant.parameters = {
  backgrounds: { default: 'grey' },
};
