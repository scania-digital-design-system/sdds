export default {
  title: 'Component/Table',
};
const Template = ({ type, divider }) => `
    <table class="sdds-table sdds-table--${type} sdds-table--${divider}">
    <caption class="sdds-table__title">Table title</caption>       
    <thead class="sdds-table__header">
      <tr class="sdds-table__row">
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
      </tr>
    </thead>
     <tbody class="sdds-table__body">
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
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
    <table class="sdds-table sdds-table--${type} sdds-table--${divider}">   
   <thead class="sdds-table__header">
      <tr class="sdds-table__row">
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
        <th class="sdds-table__header-cell sdds-u-pr2 sdds-u-pl2">Header</th>
      </tr>
    </thead>
     <tbody class="sdds-table__body">
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell sdds-u-pr2 sdds-u-pl2">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
      </tr>
      <tr class="sdds-table__row">
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
        <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
       <td class="sdds-table__body-cell  sdds-u-pr2 sdds-u-pl2">Text</td>
      </tr>
    </tbody>
    </table>
    `;
export const TableHeaderOnly = Table.bind({});
TableHeaderOnly.args = {
  type: '',
};
