import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Data Table/Web Component',
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
    onWhiteBackground: {
      name: 'On white background',
      description: 'Changes BG color of table element to grey variation for better visibility on white layouts',
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
      description: 'Table takes 100% of available width. For column values less then 192px, "No minimum width" has to be enabled too. ',
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
};

const ExpandableRowTemplate = ({ verticalDivider, compactDesign, onWhiteBackground, responsiveDesign }) =>
  formatHtmlPreview(`
  <h3>Expandable rows</h3>
  <sdds-table
    id="expendable-rows-table"
    enable-expandable-rows
    vertical-dividers="${verticalDivider}"
    compact-design="${compactDesign}"
    white-background="${onWhiteBackground}"
    enable-responsive="${responsiveDesign}"
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
ExpandableRows.args = {
  compactDesign: false,
  onWhiteBackground: false,
  verticalDivider: false,
  responsiveDesign: false,
};
