export default {
  title: 'Component/Table',
  argTypes: {
    actionbar: {
      name: 'Actionbar',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    filtering: {
      name: 'Filtering',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    multiSelect: {
      name: 'Multiselect',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    noMinWidthArg: {
      name: 'No minimum width',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
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
    column_1_text_align: {
      name: 'Column 1 text align',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
    column_2_text_align: {
      name: 'Column 2 text align',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
    column_3_text_align: {
      name: 'Column 3 text align',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
    column_4_text_align: {
      name: 'Column 4 text align',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      defaultValue: 'right',
    },
    column_1_width: {
      name: 'Column 1 width',
      type: 'string',
      defaultValue: '250px',
    },
    column_2_width: {
      name: 'Column 2 width',
      type: 'string',
      defaultValue: '250px',
    },
    column_3_width: {
      name: 'Column 3 width',
      type: 'string',
      defaultValue: '20%',
    },
    column_4_width: {
      name: 'Column 4 width',
      type: 'string',
      defaultValue: '250px',
    },
    header_1_title: {
      name: 'Header 1 title',
      type: 'string',
      defaultValue: 'Truck type',
    },
    header_2_title: {
      name: 'Header 2 title',
      type: 'string',
      defaultValue: 'Driver',
    },
    header_3_title: {
      name: 'Header 3 title',
      type: 'string',
      defaultValue: 'Country',
    },
    header_4_title: {
      name: 'Header 4 title',
      type: 'string',
      defaultValue: 'Mileage in km',
    },
    label: {
      name: 'Label',
      type: 'string',
      defaultValue: 'Label text',
      description: 'Label text explains about dropdown',
    },
  },
};
const Template = ({
  label,
  noMinWidthArg,
  column_1_sortable,
  column_2_sortable,
  column_3_sortable,
  column_4_sortable,
  column_1_text_align,
  column_2_text_align,
  column_3_text_align,
  column_4_text_align,
  column_1_width,
  column_2_width,
  column_3_width,
  column_4_width,
  header_1_title,
  header_2_title,
  header_3_title,
  header_4_title,
  verticalDivider,
  compactDesign,
  onWhiteBackground,
  multiSelect,
  filtering,
  actionbar,
}) => `
          <sdds-table 
            table-title="${label}"
            no-min-width="${noMinWidthArg}"   
            vertical-dividers="${verticalDivider}"
            compact-design="${compactDesign}"   
            white-background="${onWhiteBackground}"
            multi-select="${multiSelect}"
            filtering="${filtering}"
            action-bar="${actionbar}"
        >
          <sdds-header-cell column-key="truck" column-title="${header_1_title}" custom-width="${column_1_width}" text-align="${column_1_text_align}" sortable="${column_1_sortable}"></sdds-header-cell>
          <sdds-header-cell column-key="driver" column-title="${header_2_title}" custom-width="${column_2_width}" text-align="${column_2_text_align}" sortable="${column_2_sortable}"></sdds-header-cell>
          <sdds-header-cell column-key="country" column-title="${header_3_title}" custom-width="${column_3_width}" text-align="${column_3_text_align}" sortable="${column_3_sortable}"></sdds-header-cell>
          <sdds-header-cell column-key="mileage" column-title="${header_4_title}" custom-width="${column_4_width}" text-align="${column_4_text_align}" sortable="${column_4_sortable}"></sdds-header-cell>    
                 
                 ${
                   actionbar
                     ? `
                       <button
                         slot="sdds-table__actionbar"
                         class="sdds-table__actionbar-btn"
                       >
                         <svg
                           class="sdds-table__actionbar-btn-icon"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 32 32"
                         >
                           <path
                             fill-rule="evenodd"
                             clip-rule="evenodd"
                             d="m13.787 6.803.935-2.823h2.444l.934 2.818.493.152c.567.174 1.115.391 1.63.649l.456.228 2.753-1.428 1.71 1.71-1.37 2.652.282.476c.363.614.649 1.295.866 2.02l.15.498 2.822.935v2.476l-2.82.934-.15.496c-.202.66-.474 1.303-.8 1.885l-.264.47 1.284 2.48-1.71 1.711-2.475-1.281-.467.256c-.608.333-1.24.605-1.894.804l-.495.15-.935 2.82h-2.445l-.935-2.804-.494-.15a9.596 9.596 0 0 1-1.885-.8l-.47-.263-2.48 1.284-1.711-1.71 1.281-2.476-.256-.467a10.015 10.015 0 0 1-.804-1.893l-.15-.496-2.82-.934v-2.461l2.806-.936.15-.497a9.903 9.903 0 0 1 .874-2.034l.267-.47-1.36-2.648 1.722-1.722 2.766 1.435.463-.244a8.826 8.826 0 0 1 1.603-.653l.499-.15Zm.682-4.823c-.724 0-1.328.456-1.559 1.11l-.003.009-.696 2.1c-.336.119-.662.251-.983.4L9.165 4.53a1.623 1.623 0 0 0-1.937.285L5.145 6.897a1.65 1.65 0 0 0-.313 1.912l.996 1.94c-.239.467-.45.957-.628 1.463l-2.086.695-.009.003a1.644 1.644 0 0 0-1.109 1.558v2.967c0 .724.456 1.328 1.11 1.559l.009.003 2.104.697c.158.444.342.875.548 1.293l-.907 1.752a1.623 1.623 0 0 0 .285 1.936l2.098 2.097.014.014a1.672 1.672 0 0 0 1.883.27l1.774-.918c.418.208.854.391 1.297.548l.696 2.088.003.009c.23.653.835 1.109 1.559 1.109h2.95c.724 0 1.328-.456 1.559-1.11l.003-.009.697-2.104c.444-.158.875-.342 1.293-.548l1.752.907a1.623 1.623 0 0 0 1.937-.285l2.097-2.098.013-.014a1.672 1.672 0 0 0 .27-1.883l-.918-1.774c.208-.418.392-.853.548-1.296l2.104-.697.009-.003a1.644 1.644 0 0 0 1.109-1.559v-2.982c0-.724-.456-1.328-1.11-1.559l-.008-.003-2.1-.696c-.174-.5-.38-.992-.625-1.466l.98-1.896a1.623 1.623 0 0 0-.286-1.936l-2.097-2.097-.015-.014a1.672 1.672 0 0 0-1.883-.27l-.007.004-2.091 1.085c-.318-.142-.643-.271-.972-.387L18.981 3.1l-.003-.01A1.644 1.644 0 0 0 17.42 1.98h-2.951Zm-2.632 13.956a4.108 4.108 0 1 1 8.215 0 4.108 4.108 0 0 1-8.215 0Zm4.107-6.108a6.107 6.107 0 1 0 0 12.215 6.107 6.107 0 0 0 0-12.215Z"
                             fill="currentColor"
                           />
                         </svg>
                       </button>

                       <button
                         slot="sdds-table__actionbar"
                         class="sdds-table__actionbar-btn"
                       >
                         Settings
                       </button>

                       <button
                         slot="sdds-table__actionbar"
                         class="sdds-table__actionbar-btn"
                       >
                         Settings
                         <svg
                           class="sdds-table__actionbar-btn-icon"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 32 32"
                         >
                           <path
                             fill-rule="evenodd"
                             clip-rule="evenodd"
                             d="m13.787 6.803.935-2.823h2.444l.934 2.818.493.152c.567.174 1.115.391 1.63.649l.456.228 2.753-1.428 1.71 1.71-1.37 2.652.282.476c.363.614.649 1.295.866 2.02l.15.498 2.822.935v2.476l-2.82.934-.15.496c-.202.66-.474 1.303-.8 1.885l-.264.47 1.284 2.48-1.71 1.711-2.475-1.281-.467.256c-.608.333-1.24.605-1.894.804l-.495.15-.935 2.82h-2.445l-.935-2.804-.494-.15a9.596 9.596 0 0 1-1.885-.8l-.47-.263-2.48 1.284-1.711-1.71 1.281-2.476-.256-.467a10.015 10.015 0 0 1-.804-1.893l-.15-.496-2.82-.934v-2.461l2.806-.936.15-.497a9.903 9.903 0 0 1 .874-2.034l.267-.47-1.36-2.648 1.722-1.722 2.766 1.435.463-.244a8.826 8.826 0 0 1 1.603-.653l.499-.15Zm.682-4.823c-.724 0-1.328.456-1.559 1.11l-.003.009-.696 2.1c-.336.119-.662.251-.983.4L9.165 4.53a1.623 1.623 0 0 0-1.937.285L5.145 6.897a1.65 1.65 0 0 0-.313 1.912l.996 1.94c-.239.467-.45.957-.628 1.463l-2.086.695-.009.003a1.644 1.644 0 0 0-1.109 1.558v2.967c0 .724.456 1.328 1.11 1.559l.009.003 2.104.697c.158.444.342.875.548 1.293l-.907 1.752a1.623 1.623 0 0 0 .285 1.936l2.098 2.097.014.014a1.672 1.672 0 0 0 1.883.27l1.774-.918c.418.208.854.391 1.297.548l.696 2.088.003.009c.23.653.835 1.109 1.559 1.109h2.95c.724 0 1.328-.456 1.559-1.11l.003-.009.697-2.104c.444-.158.875-.342 1.293-.548l1.752.907a1.623 1.623 0 0 0 1.937-.285l2.097-2.098.013-.014a1.672 1.672 0 0 0 .27-1.883l-.918-1.774c.208-.418.392-.853.548-1.296l2.104-.697.009-.003a1.644 1.644 0 0 0 1.109-1.559v-2.982c0-.724-.456-1.328-1.11-1.559l-.008-.003-2.1-.696c-.174-.5-.38-.992-.625-1.466l.98-1.896a1.623 1.623 0 0 0-.286-1.936l-2.097-2.097-.015-.014a1.672 1.672 0 0 0-1.883-.27l-.007.004-2.091 1.085c-.318-.142-.643-.271-.972-.387L18.981 3.1l-.003-.01A1.644 1.644 0 0 0 17.42 1.98h-2.951Zm-2.632 13.956a4.108 4.108 0 1 1 8.215 0 4.108 4.108 0 0 1-8.215 0Zm4.107-6.108a6.107 6.107 0 1 0 0 12.215 6.107 6.107 0 0 0 0-12.215Z"
                             fill="currentColor"
                           />
                         </svg>
                       </button>

                       <sdds-button
                         slot="sdds-table__actionbar"
                         type="primary"
                         size="sm"
                         text="Download"
                       ></sdds-button>
                     `
                     : ''
                 }
          

  </sdds-table>
  `;

export const WebComponent = Template.bind({});
WebComponent.args = {
  label: 'Table example',
  noMinWidthArg: false,
};
