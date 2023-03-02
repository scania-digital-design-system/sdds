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
        options: ['Horizontal', 'Vertical'],
      },
      defaultValue: 'Horizontal',
      table: {
        defaultValue: { summary: 'Horizontal' },
      },
    },
    width: {
      name: 'Width',
      description: 'Choose divider width.',
      control: {
        type: 'number',
      },
      if: { arg: 'type', eq: 'Horizontal' },
    },
    height: {
      name: 'Height',
      description: 'Choose divider height.',
      control: {
        type: 'number',
      },
      if: { arg: 'type', eq: 'Vertical' },
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

const Template = ({ type, width, height, theme }) => {
  const classLookup = {
    Horizontal: `sdds-divider`,
    Vertical: `sdds-divider vertical`,
  };

  const styles = `
    .demo-div {
      padding: 0px;
    }
    ${
      height
        ? `
      .demo-div {
        height: ${height}px;
        width: 1px;
      }
    `
        : ''
    }
    ${
      width
        ? `
      .demo-div {
        width: ${width}px;
        height: 1px;
      }
    `
        : ''
    }
    sdds-divider {
      --sdds-divider-color: var(--sdds-grey-300);
    }
    sdds-divider.vertical::before,
    sdds-divider.horizontal::before {
      background-color: var(--sdds-grey-300);
    }
    ${
      theme === 'Light'
        ? `
      sdds-divider-light {
        --sdds-divider-color: var(--sdds-grey-300);
      }
      sdds-divider-light.vertical::before,
      sdds-divider-light.horizontal::before {
        background-color: var(--sdds-grey-300);
      }
    `
        : `
      sdds-divider-dark {
        --sdds-divider-color: var(--sdds-grey-700);
      }
      sdds-divider-dark.vertical::before,
      sdds-divider-dark.horizontal::before {
        background-color: var(--sdds-grey-700);
      }
    `
    }
  `;

  return formatHtmlPreview(`
    <style>${styles}</style>
    <div class="demo-div ${classLookup[type]}"></div>

  `);
};

export const WebComponent = Template.bind({});
