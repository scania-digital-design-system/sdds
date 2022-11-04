export default {
  title: 'Component/Data Table/Web Component',
  argTypes: {
    verticalDivider: {
      name: 'Vertical dividers',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    compactDesign: {
      name: 'Compact Design',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    onWhiteBackground: {
      name: 'On white background',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    responsiveDesign: {
      name: 'Responsive design',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    column_1_width: {
      name: 'Column 1 width',
      type: 'string',
      defaultValue: '150px',
    },
    column_2_width: {
      name: 'Column 2 width',
      type: 'string',
      defaultValue: '150px',
    },
    column_3_width: {
      name: 'Column 3 width',
      type: 'string',
      defaultValue: '150px',
    },
    column_4_width: {
      name: 'Column 4 width',
      type: 'string',
      defaultValue: '150px',
    },
  },
};

const CustomWidthTemplate = ({ verticalDivider, compactDesign, onWhiteBackground, responsiveDesign, column_1_width, column_2_width, column_3_width, column_4_width }) => `
  <h3>Custom width table</h3>
  
  <sdds-table 
      id="custom-width-table"  
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"   
      white-background="${onWhiteBackground}"
      no-min-width   
      enable-responsive="${responsiveDesign}"
            >
      <sdds-table-header>
          <sdds-header-cell column-key='truck' column-title='Truck type' custom-width="${column_1_width}"></sdds-header-cell>
          <sdds-header-cell column-key='driver' column-title='Driver name'custom-width="${column_2_width}"></sdds-header-cell>
          <sdds-header-cell column-key='country' column-title='Country' custom-width="${column_3_width}"></sdds-header-cell>
          <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right' custom-width="${column_4_width}"></sdds-header-cell> 
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
  </sdds-table>`;

export const CustomWidth = CustomWidthTemplate.bind({});
CustomWidth.args = {};
