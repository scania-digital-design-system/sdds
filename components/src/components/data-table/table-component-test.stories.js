export default {
  title: 'Component/Data Table',
};
const Template = () => `

  <h3>Expendable rows</h3>
  <sdds-table id="expendable-rows-table" no-min-width enable-extended-rows>
              
          <sdds-table-header>         
              <sdds-header-cell column-key='truck' column-title='Truck type'  custom-width="200px"></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'  custom-width="200px"></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country'  custom-width="200px"></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage'  text-align='right' custom-width="200px"></sdds-header-cell> 
          </sdds-table-header>       
          
          <sdds-table-body body-data=[]> 
            <sdds-table-body-row-expendable>  
              <sdds-body-cell cell-value="Test value 1" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage"></sdds-body-cell> 
              <div slot="expend-row">Hello world 1</div>
            </sdds-table-body-row-expendable>
            
             <sdds-table-body-row-expendable>  
              <sdds-body-cell cell-value="Test value 5" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage"></sdds-body-cell> 
              <div slot="expend-row">Hello to you too</div>
            </sdds-table-body-row-expendable>
            
            <sdds-table-body-row-expendable>  
              <sdds-body-cell cell-value="Test value 9" cell-key="truck"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 10" cell-key="driver"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 11" cell-key="country"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 12" cell-key="mileage"></sdds-body-cell> 
              <div slot="expend-row"><sdds-button type="primary" text="Call to action"></sdds-button></div>
            </sdds-table-body-row-expendable>            
          </sdds-table-body>
          
       
  </sdds-table> 
  
  <br>
  <br>
  
  <h3>Disabled filtering, pagination and sorting - left to the user to listen to events</h3>
   <sdds-table id="disabled-functionality-table">
          <sdds-table-toolbar table-title="Hello table 1" enable-filtering></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable text-align='right' ></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body disable-pagination-function disable-filtering-function disable-sorting-function enable-dummy-data>  
              <sdds-table-body-row>
                  <sdds-body-cell cell-value="Test value 5" cell-key="truck"></sdds-body-cell>
                  <sdds-body-cell cell-value="Test value 6" cell-key="driver"></sdds-body-cell>
                  <sdds-body-cell cell-value="Test value 7" cell-key="country"></sdds-body-cell>
                  <sdds-body-cell cell-value="Test value 8" cell-key="mileage"></sdds-body-cell>           
              </sdds-table-body-row>       
          </sdds-table-body>
        <sdds-table-footer enable-client-pagination client-max-pages="10"></sdds-table-footer>
  </sdds-table>  
  
  <br>
  <br>
  <h3>Basic table</h3>
  <sdds-table id="basic-table">
              
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage'text-align='right'></sdds-header-cell> 
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
  </sdds-table>  
  
  
  <br>
  <br>
  
  <h3>Filtering and sorting example</h3>
   <sdds-table id="filtering-table">
          <sdds-table-toolbar table-title="Hello table 1" enable-filtering></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable text-align='right' ></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body enable-dummy-data>                      
          </sdds-table-body>
  </sdds-table>  
  
  <br>
  <br>
  
  <h3>Multiselect</h3>
   <sdds-table id="multiselect-table" enable-multiselect>
          <sdds-table-toolbar table-title="Hello table 1" ></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right' ></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body enable-dummy-data>                      
          </sdds-table-body>
  </sdds-table> 
  
  <br>
  <br>
  
  <h3>Pagination</h3>
   <sdds-table id="pagination-table">
          <sdds-table-toolbar table-title="Hello table 1" ></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right' ></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body enable-dummy-data>                      
          </sdds-table-body>
          <sdds-table-footer enable-pagination rows-per-page="3"></sdds-table-footer>
  </sdds-table> 
  
  <br>
  <br>  
  <br>
  <br>
  <br>
  <br>
  
  
 
  `;

export const WebComponentNEW = Template.bind({});
WebComponentNEW.args = {};
