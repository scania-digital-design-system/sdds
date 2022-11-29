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

const Template = ({ type }) =>  formatHtmlPreview(
    `
      <div class="sdds-block sdds-block__${type.toLowerCase()}">
      <h2>Block</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut eleifend ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula consectetur interdum. Vestibulum condimentum, augue vitae lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus. Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.</p>
        <div class="sdds-block">
          <h3>Block in a block</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut eleifend ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula consectetur interdum. Vestibulum condimentum, augue vitae lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus. Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.</p>
        </div>
      </div>
    `,
  );


export const Default = Template.bind({});
Default.args = {};
