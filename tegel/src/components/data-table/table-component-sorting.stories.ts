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
    column_1_sortable: {
      name: 'Column 1 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    column_2_sortable: {
      name: 'Column 2 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    column_3_sortable: {
      name: 'Column 3 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    column_4_sortable: {
      name: 'Column 4 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};

const SortingTemplate = ({ verticalDivider, compactDesign, onWhiteBackground, responsiveDesign, column_1_sortable, column_2_sortable, column_3_sortable, column_4_sortable }) => `
  <h3>Sorting example</h3>
   <sdds-table
      id="sorting-table"      
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"   
      white-background="${onWhiteBackground}"
      enable-responsive="${responsiveDesign}"
      > 
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type' sortable="${column_1_sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable="${column_2_sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable="${column_3_sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable="${column_4_sortable}" text-align='right'></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body enable-dummy-data>                      
          </sdds-table-body>
  </sdds-table>`;

export const Sorting = SortingTemplate.bind({});
Sorting.args = {};
