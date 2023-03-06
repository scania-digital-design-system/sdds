import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Divider',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=993%3A47555&t=8p1W6DsJrzvgWfmp-4',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=993%3A47555&t=8p1W6DsJrzvgWfmp-4',
      },
    ],
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Choose divider type.',
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    theme: {
      name: 'Theme',
      description: 'Choose divider theme.',
      control: {
        type: 'radio',
        options: ['Light', 'Dark'],
      },
      defaultValue: 'Light',
      table: {
        defaultValue: { summary: 'Light' },
      },
    },
  },
};

const Template = ({ type, theme }) => {
  const classLookup = {
    horizontal: `sdds-divider horizontal`,
    vertical: `sdds-divider vertical`,
  };

  const lightStyles = `
    .sdds-theme-light {
      --sdds-divider-color: var(--sdds-grey-300);
    }
    .sdds-divider.vertical > div {
      background-color: var(--sdds-grey-300);
      height: 100px;
      width: 1px;
    }
    .sdds-divider.horizontal > hr {
      background-color: var(--sdds-grey-300);
      width: 100px;
    }
  `;

  const darkStyles = `
    .sdds-theme-dark {
      --sdds-divider-color: var(--sdds-grey-700);
    }
    .sdds-divider.vertical > div {
      background-color: var(--sdds-grey-700);
      height: 100px;
      width: 1px;
    }
    .sdds-divider.horizontal > hr {
      background-color: var(--sdds-grey-700);
      width: 100px;
    }
  `;

  const styles = `
    .demo-div {
      padding: 0px;
    }
    ${theme === 'Light' ? lightStyles : darkStyles}
  `;

  return formatHtmlPreview(`
    <style>${styles}</style>
    <div class="${styles} ${classLookup[type]} ${theme === 'Dark' ? 'dark' : ''}">
      ${type === 'horizontal' ? '<hr />' : '<div></div>'}
    </div>
  `);
};

export const HorizontalLight = Template.bind({});
HorizontalLight.args = {
  type: 'horizontal',
  theme: 'Light',
};

export const HorizontalDark = Template.bind({});
HorizontalDark.args = {
  type: 'horizontal',
  theme: 'Dark',
};

export const VerticalDark = Template.bind({});
VerticalDark.args = {
  type: 'vertical',
  theme: 'Dark',
};

export const VerticalLight = Template.bind({});
VerticalLight.args = {
  type: 'vertical',
  theme: 'Light',
};
