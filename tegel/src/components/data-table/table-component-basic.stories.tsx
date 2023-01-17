import { formatHtmlPreview } from '../../utils/utils';
import sddsTable from './table/readme.md';
import sddsTableToolbar from './table-toolbar/readme.md';
import sddsHeader from './table-header/readme.md';
import sddsHeaderCell from './table-header-cell/readme.md';
import sddsTableBody from './table-body/readme.md';
import sddsBodyRow from './table-body-row/readme.md';
import sddsBodyRowExpandable from './table-body-row-expandable/readme.md';
import sddsBodyCell from './table-body-cell/readme.md';
import sddsTableFooter from './table-footer/readme.md';

export default {
  title: 'Components/Data Table/Web Component',
  parameters: {
    notes: {
      'sdds-table': sddsTable,
      'sdds-table-toolbar': sddsTableToolbar,
      'sdds-header': sddsHeader,
      'sdds-header-cell': sddsHeaderCell,
      'sdds-table-body': sddsTableBody,
      'sdds-body-row': sddsBodyRow,
      'sdds-body-row-expandable': sddsBodyRowExpandable,
      'sdds-body-cell': sddsBodyCell,
      'sdds-table-footer': sddsTableFooter,
    },
  },
  argTypes: {
    verticalDivider: {
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
    compactDesign: {
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
    // onWhiteBackground: {
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
    responsiveDesign: {
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
    noMinWidth: {
      name: 'No column minimum width limitation',
      description: 'Enable columns to shrink below width 192px.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disablePadding: {
      name: 'Disable cell padding',
      description:
        'By default each cell comes with padding. Disabling padding rule can be useful when a users want to insert another HTML element in cell, eg. input.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  args: {
    // onWhiteBackground: false,
    verticalDivider: false,
    compactDesign: false,
    responsiveDesign: false,
    noMinWidth: false,
    disablePadding: false,
  },
};

const BasicTemplate = (args) =>
  formatHtmlPreview(`
  <sdds-table
      vertical-dividers="${args.verticalDivider}"
      compact-design="${args.compactDesign}"
      enable-responsive="${args.responsiveDesign}"
      ${args.noMinWidth ? 'no-min-width' : ''}
            >
      <sdds-table-header>
          <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
          <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
          <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
          <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right'></sdds-header-cell>
      </sdds-table-header>
      <sdds-table-body>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage" disable-padding="${
                args.disablePadding
              }"></sdds-body-cell>
          </sdds-table-body-row>
      </sdds-table-body>
  </sdds-table>`);

export const Default = BasicTemplate.bind({});
Default.args = {};
