import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Data Table/Native',
  parameters:{
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=4586%3A199455&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=4586%3A199455&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    tableTitle: {
      name: 'Table title',
      description: 'Text that appears in table caption area.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    isCompact: {
      name: 'Compact design',
      description: 'Enables compact design of the table, rows with less height.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    dividers: {
      name: 'Vertical dividers',
      description: 'When enabled, table has vertical dividers between columns.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    onWhiteBG: {
      name: 'On white background',
      description:
        'Changes BG color of table element to grey variation for better visibility on white layouts',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    responsiveTable: {
      name: 'Responsive table',
      description:
        'Table takes 100% of available width. For column values less then 192px, "No minimum width" has to be enabled too. ',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    noMinWidthArg: {
      name: 'No minimum width',
      description:
        'Resets min-width rule and enabled setting column width value less then 192px which is default one. When enabled, controls for columns width will show here.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    column1Width: {
      name: 'Column 1 width',
      description:
        'Value of width for column 1. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit too next tot the value, eg. 200px.',
      type: 'string',
      table: {
        defaultValue: {
          summary: '192px',
        },
      },
      if: { arg: 'noMinWidthArg', eq: true },
    },
    column2Width: {
      name: 'Column 2 width',
      description:
        'Value of width for column 2. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit too next tot the value, eg. 200px.',
      type: 'string',
      table: {
        defaultValue: {
          summary: '192px',
        },
      },
      if: { arg: 'noMinWidthArg', eq: true },
    },
    column3Width: {
      name: 'Column 3 width',
      description:
        'Value of width for column 3. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit too next tot the value, eg. 200px.',
      type: 'string',
      table: {
        defaultValue: {
          summary: '192px',
        },
      },
      if: { arg: 'noMinWidthArg', eq: true },
    },
    column4Width: {
      name: 'Column 4 width',
      description:
        'Value of width for column 4. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit too next tot the value, eg. 200px.',
      type: 'string',
      table: {
        defaultValue: {
          summary: '192px',
        },
      },
      if: { arg: 'noMinWidthArg', eq: true },
    },
  },
  args: {
    tableTitle: 'Native table',
    isCompact: false,
    dividers: false,
    onWhiteBG: false,
    noMinWidthArg: false,
    responsiveTable: false,
    column1Width: '',
    column2Width: '',
    column3Width: '',
    column4Width: '',
  },
};

const Template = (args) =>
  formatHtmlPreview(`
    <table class="
        sdds-table
        ${args.isCompact ? 'sdds-table--compact' : ''}
        ${args.dividers ? 'sdds-table--divider' : ''}
        ${args.onWhiteBG ? 'sdds-table--on-white-bg' : ''}
        ${args.noMinWidthArg ? 'sdds-table--no-min-width' : ''}
        ${args.responsiveTable ? 'sdds-table--responsive' : ''}
    " >
    ${args.tableTitle && `<caption class="sdds-table__title">${args.tableTitle}</caption>`}
    <thead class="sdds-table__header">
      <tr class="sdds-table__row">
        <th class="sdds-table__header-cell" ${
          args.column1Width ? `style="width: ${args.column1Width};"` : ''
        }>Header</th>
        <th class="sdds-table__header-cell" ${
          args.column2Width ? `style="width: ${args.column2Width};"` : ''
        }>Header</th>
        <th class="sdds-table__header-cell" ${
          args.column3Width ? `style="width: ${args.column3Width};"` : ''
        }>Header</th>
        <th class="sdds-table__header-cell" ${
          args.column4Width ? `style="width: ${args.column4Width};"` : ''
        }>Header</th>
      </tr>
    </thead>
     <tbody class="sdds-table__body">
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
    </tbody>
  </table>
    `);

export const Default = Template.bind({});
Default.args = {};
