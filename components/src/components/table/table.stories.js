export default {
  title: 'Component/Table',
};
const Template = ({ type, divider }) => `
    <table class="sdds-table sdds-table-${type} sdds-table-${divider}">
    <caption class="sdds-table__title">Table title</caption>       
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

export const Default = Template.bind({});
Default.args = {
  type: '',
};
export const Compact = Template.bind({});
Compact.args = {
  type: 'compact',
};

export const DefaultDividers = Template.bind({});
DefaultDividers.args = {
  type: '',
  divider: 'divider',
};
export const CompactDividers = Template.bind({});
CompactDividers.args = {
  type: 'compact',
  divider: 'divider',
};
const Table = ({ type, divider }) => ` 
    <table class="sdds-table sdds-table-${type} sdds-table-${divider}">   
      <thead>
        <tr>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>
      </tbody>
    </table>
    `;
export const TableHeaderOnly = Table.bind({});
TableHeaderOnly.args = {
  type: '',
};
