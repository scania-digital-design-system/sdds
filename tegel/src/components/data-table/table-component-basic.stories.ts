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

const BasicTemplate = args =>
  formatHtmlPreview(`
  <sdds-table
      id="basic-table"
      vertical-dividers="${args.verticalDivider}"
      compact-design="${args.compactDesign}"
      white-background="${args.onWhiteBackground}"
      enable-responsive="${args.responsiveDesign}"
            >
      <sdds-table-header>
          <sdds-header-cell column-key='truck' column-title='Truck type' }></sdds-header-cell>
          <sdds-header-cell column-key='driver' column-title='Driver name' }></sdds-header-cell>
          <sdds-header-cell column-key='country' column-title='Country' }></sdds-header-cell>
          <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right' }></sdds-header-cell>
      </sdds-table-header>
      <sdds-table-body>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage"></sdds-body-cell>
          </sdds-table-body-row>
      </sdds-table-body>
  </sdds-table>`);

export const Default = BasicTemplate.bind({});
Default.args = {
  compactDesign: false,
  onWhiteBackground: false,
  verticalDivider: false,
  responsiveDesign: false,
};
