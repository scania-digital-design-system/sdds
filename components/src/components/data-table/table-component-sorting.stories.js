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

const SortingTemplate = ({
  verticalDivider,
  compactDesign,
  onWhiteBackground,
}) => `
  <h3>Sorting example</h3>
   <sdds-table
      id="sorting-table"      
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"   
      white-background="${onWhiteBackground}"
      >      
          <sdds-table-toolbar table-title="Sort example"></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type' sortable></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable text-align='right'></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body enable-dummy-data>                      
          </sdds-table-body>
  </sdds-table>`;

export const Sorting = SortingTemplate.bind({});
Sorting.args = {};
