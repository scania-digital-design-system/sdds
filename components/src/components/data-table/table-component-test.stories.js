export default {
  title: 'Component/Table',
};
const Template = () => `
   <sdds-table id="johnny-test-id" enable-multiselect>
          <sdds-table-toolbar table-title="Hello table 1" enable-filtering></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type' ></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable ></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable ></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable text-align='right' ></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body disable-sorting-function disable-pagination-function>  
              <sdds-table-body-row>
                  <sdds-body-cell cell-value="Test value 5" cell-key="truck"></sdds-body-cell>
                  <sdds-body-cell cell-value="Test value 6" cell-key="driver"></sdds-body-cell>
                  <sdds-body-cell cell-value="Test value 7" cell-key="country"></sdds-body-cell>
                  <sdds-body-cell cell-value="Test value 8" cell-key="mileage"></sdds-body-cell>           
              </sdds-table-body-row>       
          </sdds-table-body>
        <sdds-table-footer enable-client-pagination client-max-pages="10""></sdds-table-footer>
  </sdds-table>  
  
  <br>
  <br>
  
  <sdds-table id="johnny-test-id2" enable-multiselect compact-design vertical-dividers white-background no-min-width>
              
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type' sortable custom-width="150px"></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable custom-width="200px"></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable custom-width="70px"></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable text-align='right' custom-width="150px"></sdds-header-cell> 
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
          </sdds-table-body>
        <sdds-table-footer enable-pagination></sdds-table-footer>
  </sdds-table>  
  `;

export const WebComponentTest = Template.bind({});
WebComponentTest.args = {
  label: 'Table example',
  noMinWidthArg: false,
};
