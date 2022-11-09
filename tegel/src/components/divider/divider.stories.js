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
      },
      options: ['Light', 'Dark', 'Coloured'],
    },
  },
  args: {
    type: 'Dark',
  },
};

const typeLookup = {
  Light: 'light',
  Dark: 'dark',
  Coloured: 'coloured',
};

const directionLookup = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left',
};

const Template = ({ ...Default }) =>
  formatHtmlPreview(
    `
    <div style="width: ${Default.width}px;" class="sdds-divider-${typeLookup[Default.type]}"></div>
  `,
  );

export const Default = Template.bind({});

Default.args = {
  type: 'Dark',
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
    <div style="height:${Vertical.height}px;" class="sdds-divider-${typeLookup[Vertical.type]}-vertical"></div>
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
  type: 'Dark',
  height: 200,
};

const BorderTemplate = ({ ...Border }) =>
  formatHtmlPreview(`
      <div style="width: ${Border.width}px; background-color: ${Border.bgColor}; height:${Border.height}px;" class="divider-border-demo sdds-divider-${
    typeLookup[Border.type]
  }-border-${directionLookup[Border.direction]}">Demo</div>
    `);

export const Border = BorderTemplate.bind({});

Border.argTypes = {
  direction: {
    name: 'Direction',
    discription: 'The direction of the divider',
    control: {
      type: 'select',
    },
    options: ['Top', 'Right', 'Bottom', 'Left'],
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
  direction: 'Top',
  type: 'Dark',
  bgColor: '#E5E5E5',
  width: 400,
  height: 200,
};
