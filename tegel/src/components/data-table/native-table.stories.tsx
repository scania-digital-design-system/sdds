import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Data Table/Native',
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
    // onWhiteBG: {
    //   name: 'On white background',
    //   description:
    //     'Changes BG color of table element to grey variation for better visibility on white layouts',
    //   control: {
    //     type: 'boolean',
    //   },
    //   table: {
    //     defaultValue: {
    //       summary: false,
    //     },
    //   },
    // },
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
        'Resets min-width rule and enabled setting column width value to less than 192px which is default. When enabled, controls for columns width will show here.',
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
      control: {
        type: 'text',
      },
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
      control: {
        type: 'text',
      },
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
      control: {
        type: 'text',
      },
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
    dividers: false,
    // onWhiteBG: false,
    isCompact: false,
    responsiveTable: false,
    noMinWidthArg: false,
    column1Width: '',
    column2Width: '',
    column3Width: '',
  },
};

const Template = (args) =>
  formatHtmlPreview(`
    <table class="
        sdds-table
        ${args.dividers ? 'sdds-table--divider' : ''}
        ${args.noMinWidthArg ? 'sdds-table--no-min-width' : ''}
        ${args.isCompact ? 'sdds-table--compact' : ''}
        ${args.responsiveTable ? 'sdds-table--responsive' : ''}
        ${args.noMinWidthArg ? 'sdds-table--no-min-width' : ''}
    " >
    ${args.tableTitle && `<caption>${args.tableTitle}</caption>`}
    <thead>
      <tr>
        <th ${args.column1Width ? `style="width: ${args.column1Width};"` : ''}>Header</th>
        <th ${args.column2Width ? `style="width: ${args.column2Width};"` : ''}>Header</th>
        <th ${args.column3Width ? `style="width: ${args.column3Width};"` : ''}>Header</th>
      </tr>
    </thead>
     <tbody>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
    </tbody>
  </table>
    `);

export const Default = Template.bind({});
Default.args = {};
