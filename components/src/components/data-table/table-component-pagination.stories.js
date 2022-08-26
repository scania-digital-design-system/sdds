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
    rowsPerPageControl: {
      name: 'Rows per page',
      control: {
        type: 'number',
      },
      defaultValue: 4,
    },
  },
};

const PaginationTemplate = ({
  verticalDivider,
  compactDesign,
  onWhiteBackground,
  rowsPerPageControl,
}) => `
  <h3>Pagination</h3>
   <sdds-table 
      id="pagination-table"
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"   
      white-background="${onWhiteBackground}"   
   >          
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right'></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body enable-dummy-data>                      
          </sdds-table-body>
          <sdds-table-footer enable-pagination rows-per-page="${rowsPerPageControl}"></sdds-table-footer>
  </sdds-table>`;

export const Pagination = PaginationTemplate.bind({});
Pagination.args = {};
