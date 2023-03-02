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
  },
  args: {
    modeVariant: 'Inherit from parent',
    compactDesign: false,
    responsiveDesign: false,
    verticalDivider: false,
    noMinWidth: false,
  },
};

const ExpandableRowTemplate = ({
  modeVariant,
  compactDesign,
  responsiveDesign,
  verticalDivider,
  noMinWidth,
}) =>
  formatHtmlPreview(`
  <sdds-table
    enable-expandable-rows
    vertical-dividers="${verticalDivider}"
    compact-design="${compactDesign}"
    enable-responsive="${responsiveDesign}"
    ${noMinWidth ? 'no-min-width' : ''}
    ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
    >
      <sdds-table-header>
          <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
          <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
          <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
          <sdds-header-cell column-key='mileage' column-title='Mileage'  text-align='right'></sdds-header-cell>
      </sdds-table-header>
      <sdds-table-body>
        <sdds-table-body-row-expandable>
          <sdds-body-cell cell-value="Test value 1" cell-key="truck"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 2" cell-key="driver"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 3" cell-key="country"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 4" cell-key="mileage"></sdds-body-cell>
          <div slot="expand-row">Hello world 1</div>
        </sdds-table-body-row-expandable>
         <sdds-table-body-row-expandable>
          <sdds-body-cell cell-value="Test value 5" cell-key="truck"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 6" cell-key="driver"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 7" cell-key="country"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 8" cell-key="mileage"></sdds-body-cell>
          <div slot="expand-row">Hello to you too</div>
        </sdds-table-body-row-expandable>
        <sdds-table-body-row-expandable>
          <sdds-body-cell cell-value="Test value 9" cell-key="truck"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 10" cell-key="driver"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 11" cell-key="country"></sdds-body-cell>
          <sdds-body-cell cell-value="Test value 12" cell-key="mileage"></sdds-body-cell>
          <div slot="expand-row"><sdds-button type="primary" text="Call to action"></sdds-button></div>
        </sdds-table-body-row-expandable>
      </sdds-table-body>
  </sdds-table>`);

export const ExpandableRows = ExpandableRowTemplate.bind({});
ExpandableRows.args = {};
