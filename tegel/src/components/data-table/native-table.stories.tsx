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

const Template = ({
  tableTitle,
  dividers,
  isCompact,
  responsiveTable,
  noMinWidthArg,
  column1Width,
  column2Width,
  column3Width,
}) =>
  formatHtmlPreview(`
    <table class="
        sdds-table
        ${dividers ? 'sdds-table--divider' : ''}
        ${noMinWidthArg ? 'sdds-table--no-min-width' : ''}
        ${isCompact ? 'sdds-table--compact' : ''}
        ${responsiveTable ? 'sdds-table--responsive' : ''}
        ${noMinWidthArg ? 'sdds-table--no-min-width' : ''}
    " >
    ${tableTitle && `<caption>${tableTitle}</caption>`}
    <thead>
      <tr>
        <th ${column1Width ? `style="width: ${column1Width};"` : ''}>Header</th>
        <th ${column2Width ? `style="width: ${column2Width};"` : ''}>Header</th>
        <th ${column3Width ? `style="width: ${column3Width};"` : ''}>Header</th>
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
