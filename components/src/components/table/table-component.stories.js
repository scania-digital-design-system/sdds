export default {
  title: 'Component/Table',
  argTypes: {
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
}) => `
          <sdds-table 
            table-title="${label}"
            no-min-width="${noMinWidthArg}"   
            vertical-dividers="${verticalDivider}"
            compact-design="${compactDesign}"   
            white-background="${onWhiteBackground}"
            multi-select="${multiSelect}"
            filtering="${filtering}"
        >
          <sdds-header-cell column-key="truck" column-title="${header_1_title}" custom-width="${column_1_width}" text-align="${column_1_text_align}" sortable="${column_1_sortable}"></sdds-header-cell>
          <sdds-header-cell column-key="driver" column-title="${header_2_title}" custom-width="${column_2_width}" text-align="${column_2_text_align}" sortable="${column_2_sortable}"></sdds-header-cell>
          <sdds-header-cell column-key="country" column-title="${header_3_title}" custom-width="${column_3_width}" text-align="${column_3_text_align}" sortable="${column_3_sortable}"></sdds-header-cell>
          <sdds-header-cell column-key="mileage" column-title="${header_4_title}" custom-width="${column_4_width}" text-align="${column_4_text_align}" sortable="${column_4_sortable}"></sdds-header-cell>              
      </sdds-table>
  `;

export const WebComponent = Template.bind({});
WebComponent.args = {
  label: 'Table example',
  noMinWidthArg: false,
};
