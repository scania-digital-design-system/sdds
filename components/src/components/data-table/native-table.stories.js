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
  },
};
const Template = ({ tableTitle, isCompact, dividers, onWhiteBG }) => `

<h3>Native HTML & CSS table</h3>

    <table class="
        sdds-table 
        ${isCompact ? 'sdds-table--compact' : ''} 
        ${dividers ? 'sdds-table--divider' : ''}
        ${onWhiteBG ? 'sdds-table--on-white-bg' : ''}
    ">
    ${
      tableTitle && `<caption class="sdds-table__title">${tableTitle}</caption>`
    }
          
    <thead class="sdds-table__header">
      <tr class="sdds-table__row">
        <th class="sdds-table__header-cell">Header</th>
        <th class="sdds-table__header-cell">Header</th>
        <th class="sdds-table__header-cell">Header</th>
        <th class="sdds-table__header-cell">Header</th>
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
