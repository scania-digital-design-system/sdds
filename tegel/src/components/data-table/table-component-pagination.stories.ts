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
    rowsPerPageControl: {
      name: 'Rows per page',
      description: 'Specify how many rows per page user would like to see',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 4,
        },
      },
    },
  },
};

const PaginationTemplate = ({ verticalDivider, compactDesign, onWhiteBackground, rowsPerPageControl, responsiveDesign }) =>
  formatHtmlPreview(`
  <h3>Pagination</h3>
   <sdds-table
      id="pagination-table"
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"
      white-background="${onWhiteBackground}"
      enable-responsive="${responsiveDesign}"
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
  </sdds-table>`);

export const Pagination = PaginationTemplate.bind({});
Pagination.args = {
  compactDesign: false,
  onWhiteBackground: false,
  verticalDivider: false,
  responsiveDesign: false,
  rowsPerPageControl: 4,
};
