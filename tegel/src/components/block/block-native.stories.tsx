import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Block',
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
    modeVariant: {
      name: 'Mode variant',
      description:
        'Mode variant adjusts component colors to have better visibility depending on global mode and background. ',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
  },
};

const Template = ({ modeVariant }) =>
  formatHtmlPreview(
    `
      <div class="sdds-block ${
        modeVariant !== 'Inherit from parent'
          ? `sdds-mode-variant-${modeVariant.toLowerCase()}`
          : ''
      }">
      <h2 class="sdds-headline-02">Block</h2>
        <p class="sdds-body-01">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut eleifend ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula consectetur interdum. Vestibulum condimentum, augue vitae lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus. Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.</p>
        <div class="sdds-block">
          <h3 class="sdds-headline-04">Nested block</h3>
          <p class="sdds-detail-03">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut eleifend ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula consectetur interdum. Vestibulum condimentum, augue vitae lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus. Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.</p>
          </div>
      </div>
    `,
  );

export const Native = Template.bind({});
