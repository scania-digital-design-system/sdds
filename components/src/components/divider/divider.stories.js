import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Divider',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      name: 'Type',
      descripton: 'The type of divider',
      control: {
        type: 'select',
        options: ['light', 'dark', 'coloured'],
      },
    },
  },
};

const Template = ({ ...Default }) =>
  formatHtmlPreview(
    `
    <div style="width: ${Default.width}px;" class="sdds-divider-${Default.type}"></div>
  `,
  );

export const Default = Template.bind({});

Default.args = {
  type: 'dark',
  width: 400,
};

Default.argTypes = {
  width: {
    name: 'Width',
    description: 'Width of the divider in pixels.',
    control: {
      type: 'number',
    },
    defaultValue: 100,
  },
};

const VerticalTemplate = ({ ...Vertical }) =>
  formatHtmlPreview(`
    <div style="height:${Vertical.height}px;" class="sdds-divider-${Vertical.type}-vertical"></div>
  `);

export const Vertical = VerticalTemplate.bind({});

Vertical.argTypes = {
  height: {
    name: 'Height',
    description: 'Height of the divider in pixels.',
    control: {
      type: 'number',
    },
    defaultValue: 100,
  },
};

Vertical.args = {
  type: 'dark',
  height: 200,
};

const BorderTemplate = ({ ...Border }) =>
  formatHtmlPreview(`
      <div style="width: ${Border.width}px; background-color: ${Border.bgColor}; height:${Border.height}px;" class="divider-border-demo sdds-divider-${Border.type}-border-${Border.direction}">Demo</div>
    `);

export const Border = BorderTemplate.bind({});

Border.argTypes = {
  direction: {
    name: 'Direction',
    discription: 'The direction of the divider',
    control: {
      type: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  bgColor: {
    name: 'Content background',
    control: {
      type: 'color',
    },
  },
  height: {
    name: 'Height',
    description: 'Height of the divider in pixels.',
    control: {
      type: 'number',
    },
    defaultValue: 100,
  },
  width: {
    name: 'Width',
    description: 'Width of the divider in pixels.',
    control: {
      type: 'number',
    },
    defaultValue: 100,
  },
};

Border.args = {
  direction: 'top',
  type: 'dark',
  bgColor: '#E5E5E5',
  width: 400,
  height: 200,
};
