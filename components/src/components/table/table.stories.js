export default {
  title: 'Component/Table',
};
const Template = ({ type, divider }) => `
    <sdds-theme></sdds-theme>
    <table class="sdds-table sdds-table-${type} sdds-table-${divider}">
    <caption>Table caption</caption>       
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
    <sdds-theme></sdds-theme>
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
