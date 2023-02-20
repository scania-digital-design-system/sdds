import { formatHtmlPreview } from '../../utils/utils';
import sddsTable from './table/readme.md';
import sddsTableToolbar from './table-toolbar/readme.md';
import sddsHeader from './table-header/readme.md';
import sddsHeaderCell from './table-header-cell/readme.md';
import sddsTableBody from './table-body/readme.md';
import sddsBodyRow from './table-body-row/readme.md';
import sddsBodyRowExpandable from './table-body-row-expandable/readme.md';
import sddsBodyCell from './table-body-cell/readme.md';
import sddsTableFooter from './table-footer/readme.md';

export default {
  title: 'Components/Data Table/Web Component',
  parameters: {
    notes: {
      'sdds-table': sddsTable,
      'sdds-table-toolbar': sddsTableToolbar,
      'sdds-header': sddsHeader,
      'sdds-header-cell': sddsHeaderCell,
      'sdds-table-body': sddsTableBody,
      'sdds-body-row': sddsBodyRow,
      'sdds-body-row-expandable': sddsBodyRowExpandable,
      'sdds-body-cell': sddsBodyCell,
      'sdds-table-footer': sddsTableFooter,
    },
  },
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
    modeVariant: {
      name: 'Mode variant',
      description: 'The mode variant of the component',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    responsiveDesign: {
      name: 'Responsive table',
      description:
        'Table takes 100% of available width. For column values less then 192px, "No minimum width" has to be enabled too. ',
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
      name: 'No column minimum width limitation',
      description: 'Enable columns to shrink below width 192px.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    compactDesign: false,
    verticalDivider: false,
    responsiveDesign: false,
    noMinWidth: false,
  },
};

const EventListenersTemplate = ({
  verticalDivider,
  compactDesign,
  modeVariant,
  responsiveDesign,
  noMinWidth,
}) =>
  formatHtmlPreview(`
    <script>
      // Note: Script here is only for demo purposes
      window.addEventListener('tableFilteringTerm', e => {
        document.getElementById('event-name-textarea').value = 'tableFilteringTerm';
        document.getElementById('event-value-textarea').value = e.detail;
      });

      window.addEventListener('sortColumnDataEvent', e => {
        document.getElementById('event-name-textarea').value = 'sortColumnDataEvent';
        document.getElementById('event-value-textarea').value = e.detail;
      });

      window.addEventListener('currentPageValueEvent', e => {
        document.getElementById('event-name-textarea').value = 'currentPageValueEvent';
        document.getElementById('event-value-textarea').value = e.detail;
      });
    </script>

   <sdds-table
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"
      enable-responsive="${responsiveDesign}"
      ${noMinWidth ? 'no-min-width' : ''}
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
   >
          <sdds-table-toolbar table-title="Disabled filtering, pagination and sorting - left to the user to listen to events" enable-filtering></sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type' sortable></sdds-header-cell>
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
  </sdds-table>

  <!-- Note: Code below is just for demo purposes -->
  <div class="sdds-u-mt1" style="width: 500px; background-color: lightblue; padding: 16px;">
  <p class="sdds-u-mt0">Note: This box works only in "Canvas" tab.</p>
    <h5 class="sdds-u-mt0 sdds-u-mb0">Event test box</h5>
    <h6 class="sdds-u-mt1 sdds-u-mb0">Event name:</h6>
    <textarea id="event-name-textarea" rows="1" cols="50" readonly></textarea>
    <h6 class="sdds-u-mt0 sdds-u-mb0">Events value (aka detail)</h6>
    <small>Event always sent an array of items, where first one is always an ID of tabel where event is emitted from</small>
    <br>
    <textarea id="event-value-textarea" rows="1" cols="50" readonly></textarea>
  </div>`);

export const EventListeners = EventListenersTemplate.bind({});
EventListeners.args = {};
