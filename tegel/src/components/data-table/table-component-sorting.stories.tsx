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
      name: 'Compact Design',
      description: 'Enables compact design of the table, rows with less height.',
      control: {
        type: 'boolean',
      },
    },
    // onWhiteBackground: {
    //   name: 'On white background',
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    responsiveDesign: {
      name: 'Responsive design',
      description:
        'Table takes 100% of available width. For column values less then 192px, "No minimum width" has to be enabled too.',
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
      description: 'If columns should be able to shrink below 192px width.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    column1sortable: {
      name: 'Column 1 is sortable',
      description:
      'Enabling column 1 to be sorted alphabetically.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    column2sortable: {
      name: 'Column 2 is sortable',
      description:
      'Enabling column 2 to be sorted alphabetically.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    column3sortable: {
      name: 'Column 3 is sortable',
      description:
      'Enabling column 3 to be sorted alphabetically.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    column4sortable: {
      name: 'Column 4 is sortable',
      description:
      'Enabling column 4 to be sorted alphabetically.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
  args: {
    verticalDivider: false,
    compactDesign: false,
    // onWhiteBackground: false,
    responsiveDesign: false,
    noMinWidth: false,
    column1sortable: true,
    column2sortable: true,
    column3sortable: true,
    column4sortable: true,
  },
};

const SortingTemplate = ({
  verticalDivider,
  compactDesign,
  // onWhiteBackground,
  responsiveDesign,
  noMinWidth,
  column1sortable,
  column2sortable,
  column3sortable,
  column4sortable,
}) =>
  formatHtmlPreview(`
    <sdds-table
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"
      enable-responsive="${responsiveDesign}"
      ${noMinWidth ? 'no-min-width' : ''}
      >
      <sdds-table-toolbar table-title="Sorting"></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type' sortable="${column1sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable="${column2sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable="${column3sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable="${column4sortable}" text-align='right'></sdds-header-cell>
          </sdds-table-header>
          <sdds-table-body enable-dummy-data>
          </sdds-table-body>
  </sdds-table>`);

export const Sorting = SortingTemplate.bind({});
Sorting.args = {};
