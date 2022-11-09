import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Block',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Pick variant',
      defaultValue: 'default',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Variant'],
    },
  },
  args: {
    type: 'Default',
  },
};

const Template = ({ type }) => {
  let typeLookup = {
    Default: 'default',
    Variant: 'variant',
  };

  return formatHtmlPreview(
    `
    <div class="sdds-demo-block"> 
      <div class="${typeLookup[type] === 'variant' ? 'sdds-block sdds-block__variant' : 'sdds-block'}">
        <p>Content be here...</p>
        <div class="sdds-block">
          <p>Content be here...</p>
        </div>
      </div>
    </div>
    `,
  );
};

export const Default = Template.bind({});
Default.args = {};
