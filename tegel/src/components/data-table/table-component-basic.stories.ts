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
    noMinWidth: {
      name: 'No minimum width',
      description: 'Resets min-width rule and enabled setting column width value less then 192px which is default one. When enabled, controls for columns width will show here.',
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
      if: { arg: 'noMinWidth', eq: true },
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
      if: { arg: 'noMinWidth', eq: true },
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
      if: { arg: 'noMinWidth', eq: true },
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
      if: { arg: 'noMinWidth', eq: true },
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
      no-min-width="${args.noMinWidth}"
            >
      <sdds-table-header>
          <sdds-header-cell column-key='truck' column-title='Truck type' custom-width="${args.column1Width};" }></sdds-header-cell>
          <sdds-header-cell column-key='driver' column-title='Driver name' custom-width="${args.column2Width};" }></sdds-header-cell>
          <sdds-header-cell column-key='country' column-title='Country' custom-width="${args.column3Width};" }></sdds-header-cell>
          <sdds-header-cell column-key='mileage' column-title='Mileage' custom-width="${args.column4Width};" text-align='right' }></sdds-header-cell>
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
  noMinWidth: false,
  column1Width: '',
  column2Width: '',
  column3Width: '',
  column4Width: '',
};
