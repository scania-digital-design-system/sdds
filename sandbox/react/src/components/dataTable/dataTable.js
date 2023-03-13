const DataTable = () => {
  return (
    <div className="sdds-row">
      <div className="sdds-no-padding sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12 ">
        <sdds-table
          no-min-width
          body-data='[{"truck":"L-series","driver":"Miki","country":"USA","mileage":123987},{"truck":"P-series","driver":"Guerra","country":"Sweden","mileage":2000852},{"truck":"G-series","driver":"Ferrell","country":"Germany","mileage":564},{"truck":"R-series","driver":"Cox","country":"Spain","mileage":1789357},{"truck":"S-series","driver":"Montgomery","country":"Croatia","mileage":65},{"truck":"L-series","driver":"Sheryl","country":"Greece","mileage":365784},{"truck":"G-series","driver":"Bojan","country":"Norway","mileage":80957}]'
          style={{ width: '100%', display: 'grid' }}
        >
          <sdds-header-cell column-key="truck" column-title="Truck type"></sdds-header-cell>
          <sdds-header-cell column-key="driver" column-title="Driver name"></sdds-header-cell>
          <sdds-header-cell column-key="country" column-title="Country"></sdds-header-cell>
          <sdds-header-cell
            column-key="mileage"
            column-title="Mileage"
            text-align="right"
          ></sdds-header-cell>
        </sdds-table>
      </div>
    </div>
  );
};

export default DataTable;
