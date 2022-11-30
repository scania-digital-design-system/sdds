import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Block',
  parameters: {
    layout: 'padded',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9743%3A24020&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9743%3A24020&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Pick variant',
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
    <div class="sdds-demo-block sdds-demo-block-${typeLookup[type]}">
      <div class="sdds-block sdds-block__${typeLookup[type]}">
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

