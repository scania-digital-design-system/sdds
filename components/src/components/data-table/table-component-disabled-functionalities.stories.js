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
  },
};

const EventListenersTemplate = ({
  verticalDivider,
  compactDesign,
  onWhiteBackground,
}) => `
  <h3>Disabled filtering, pagination and sorting - left to the user to listen to events</h3>
   <sdds-table 
      id="disabled-functionality-table"
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"   
      white-background="${onWhiteBackground}"
   >
          <sdds-table-toolbar table-title="Disabled functionalities table" enable-filtering></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable text-align='right'></sdds-header-cell> 
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
  </sdds-table>  `;

export const EventListeners = EventListenersTemplate.bind({});
EventListeners.args = {};
