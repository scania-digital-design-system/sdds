export default {
  title: 'Component/Data Table/HTML&CSS',
  argTypes: {
    tableTitle: {
      name: 'Table title',
      control: {
        type: 'text',
      },
      defaultValue: 'Native table',
    },
    isCompact: {
      name: 'Compact design',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    dividers: {
      name: 'Vertical dividers',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    onWhiteBG: {
      name: 'On white background',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    noMinWidthArg: {
      name: 'No minimum width',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    column_1_width: {
      name: 'Column 1 width',
      type: 'string',
      defaultValue: '150px',
    },
    column_2_width: {
      name: 'Column 2 width',
      type: 'string',
      defaultValue: '150px',
    },
    column_3_width: {
      name: 'Column 3 width',
      type: 'string',
      defaultValue: '150px',
    },
    column_4_width: {
      name: 'Column 4 width',
      type: 'string',
      defaultValue: '150px',
    },
  },
};
const Template = ({
  tableTitle,
  isCompact,
  dividers,
  onWhiteBG,
  noMinWidthArg,
  column_1_width,
  column_2_width,
  column_3_width,
  column_4_width,
}) => `

<h3>Native HTML & CSS table</h3>

    <table class="
        sdds-table 
        ${isCompact ? 'sdds-table--compact' : ''} 
        ${dividers ? 'sdds-table--divider' : ''}
        ${onWhiteBG ? 'sdds-table--on-white-bg' : ''}
        ${noMinWidthArg ? 'sdds-table--no-min-width' : ''}
    ">
    ${
      tableTitle && `<caption class="sdds-table__title">${tableTitle}</caption>`
    }
          
    <thead class="sdds-table__header">
      <tr class="sdds-table__row">
        <th class="sdds-table__header-cell" style="width: ${column_1_width};">Header</th>
        <th class="sdds-table__header-cell" style="width: ${column_2_width};">Header</th>
        <th class="sdds-table__header-cell" style="width: ${column_3_width};">Header</th>
        <th class="sdds-table__header-cell" style="width: ${column_4_width};">Header</th>
      </tr>
    </thead>
     <tbody class="sdds-table__body">
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
        <td class="sdds-table__body-cell">Text</td>
       <td class="sdds-table__body-cell">Text</td>
      </tr>
    </tbody>
  </table>
    `;

export const NativeTable = Template.bind({});
NativeTable.args = {};
