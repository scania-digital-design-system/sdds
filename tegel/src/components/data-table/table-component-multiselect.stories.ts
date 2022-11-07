export default {
  title: 'Components/Data Table/Web Component',
  argTypes: {
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
    responsiveDesign: {
      name: 'Responsive design',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};

const MultiselectTemplate = ({ verticalDivider, compactDesign, onWhiteBackground, responsiveDesign }) => {
  function getValue() {
    const element = document.querySelector('#multiselect-table > sdds-table-body');

    const textArea = document.getElementById('selected-rows-value-textarea');

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes') {
          const selectedRows = element.getAttribute('data-selected-rows');
          textArea.value = selectedRows;
        }
      });
    });

    observer.observe(element, {
      attributes: true,
    });
  }
  window.addEventListener('click', () => {
    getValue();
  });

  return `
  <h3>Multiselect</h3>
   <sdds-table
        id="multiselect-table"
        enable-multiselect
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
  </sdds-table>
  <br>
  <div style="width: 500px; background-color: lightblue; padding: 16px;">

    <h6 class="sdds-u-pb0 sdds-u-mb0">Selected rows data</h6>
    <small>Values here are values found in data-selected-rows attribute of sdds-table-body element. They are shown here just for presentation purposes.</small>
    <br>
    <textarea id="selected-rows-value-textarea" rows="5" cols="50" readonly></textarea>
  </div>`;
};

export const Multiselect = MultiselectTemplate.bind({});
Multiselect.args = {};
