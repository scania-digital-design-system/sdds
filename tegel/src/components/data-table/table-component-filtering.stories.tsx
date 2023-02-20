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
import dummyData from './table-body/dummy-data.json';

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
    modeVariant: {
      name: 'Mode variant',
      description: 'The mode variant of the component',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
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
    useDataProp: {
      name: 'Use data prop',
      description: 'Load table data from property',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'n/a',
        },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    compactDesign: false,
    verticalDivider: false,
    responsiveDesign: true,
    useDataProp: true,
    noMinWidth: true,
  },
};

const FilteringTemplate = ({
  verticalDivider,
  compactDesign,
  modeVariant,
  responsiveDesign,
  useDataProp,
  noMinWidth,
}) =>
  formatHtmlPreview(`
   <sdds-table
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"
      ${responsiveDesign ? 'enable-responsive' : ''}
      ${noMinWidth ? 'no-min-width' : ''}
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
  >
          <sdds-table-toolbar table-title="Filter" enable-filtering></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' ></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right'></sdds-header-cell>
          </sdds-table-header>
          <sdds-table-body ${useDataProp ? `body-data='${JSON.stringify(dummyData)}'` : ''}>
            ${
              !useDataProp
                ? dummyData
                    .map(
                      (row) =>
                        `<sdds-table-body-row>
                        ${Object.entries(row)
                          .map(
                            (cell) =>
                              `<sdds-body-cell cell-key="${cell[0]}" cell-value="${cell[1]}"></sdds-body-cell>`,
                          )
                          .join(' ')}
                      </sdds-table-body-row>`,
                    )
                    .join(' ')
                : ''
            }
          </sdds-table-body>
  </sdds-table>`);

export const Filtering = FilteringTemplate.bind({});
Filtering.args = {};
