import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Data Table/Native',
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      description: 'Mode variant adjusts component colors to have better visibility depending on global mode and background.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    compactDesign: {
      name: 'Compact design',
      description: 'Enables compact design of the table, rows with less height.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    responsiveDesign: {
      name: 'Responsive table',
      description: 'Enables table to take 100% of available width. For column values less then 192px, "No minimum width" has to be enabled too. ',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    tableTitle: {
      name: 'Table title',
      description: 'Sets text that appears in table caption area.',
      control: {
        type: 'text',
      },
    },
    verticalDivider: {
      name: 'Vertical dividers',
      description: 'Enables vertical dividers between table columns.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    noMinWidth: {
      name: 'No minimum width',
      description: 'Resets min-width rule and enables setting column width value to less than 192px which is the default. When enabled, controls for column width will show here.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    column1Width: {
      name: 'Column 1 width',
      description:'Value of width for column 1. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      if: { arg: 'noMinWidth', eq: true },
    },
    column2Width: {
      name: 'Column 2 width',
      description: 'Value of width for column 2. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      if: { arg: 'noMinWidth', eq: true },
    },
    column3Width: {
      name: 'Column 3 width',
      description: 'Value of width for column 3. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      if: { arg: 'noMinWidth', eq: true },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    compactDesign: false,
    responsiveDesign: false,
    tableTitle: 'Native table',
    verticalDivider: false,
    noMinWidth: false,
    column1Width: '',
    column2Width: '',
    column3Width: '',
  },
};

const Template = ({
  modeVariant,
  compactDesign,
  responsiveDesign,
  tableTitle,
  verticalDivider,
  noMinWidth,
  column1Width,
  column2Width,
  column3Width,
}) =>
  formatHtmlPreview(`
    <table class="
        sdds-table
        ${modeVariant === 'Primary' ? 'sdds-mode-variant-primary' : ''}
        ${modeVariant === 'Secondary' ? 'sdds-mode-variant-secondary' : ''}
        ${compactDesign ? 'sdds-table--compact' : ''}
        ${verticalDivider ? 'sdds-table--divider' : ''}
        ${noMinWidth ? 'sdds-table--no-min-width' : ''}
        ${responsiveDesign ? 'sdds-table--responsive' : ''}
    ">
    ${tableTitle && `<caption>${tableTitle}</caption>`}
    <thead>
      <tr>
        <th ${column1Width ? `style="width: ${column1Width};"` : ''}>Header</th>
        <th ${column2Width ? `style="width: ${column2Width};"` : ''}>Header</th>
        <th ${column3Width ? `style="width: ${column3Width};"` : ''}>Header</th>
      </tr>
    </thead>
     <tbody>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
    </tbody>
  </table>
    `);

export const Default = Template.bind({});