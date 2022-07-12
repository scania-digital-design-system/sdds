# sdds-table-body



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description | Type     | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | --------------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bodyData`    | `body-data`     |             | `any`    | ``[       {           "truck": "L-series",           "driver": "Sonya Bruce",           "country": "Brazil",           "mileage": 123987       },       {           "truck": "P-series",           "driver": "Guerra Bowman",           "country": "Sweden",           "mileage": 2000852       },       {           "truck": "G-series",           "driver": "Ferrell Wallace",           "country": "Germany",           "mileage": 564       },       {           "truck": "R-series",           "driver": "Cox Burris",           "country": "Spain",           "mileage": 1789357       },       {           "truck": "S-series",           "driver": "Montgomery Cervantes",           "country": "Croatia",           "mileage": 65       },       {           "truck": "L-series",           "driver": "Sheryl Nielsen",           "country": "Greece",           "mileage": 365784       },       {           "truck": "G-series",           "driver": "Benton Gomez",           "country": "France",           "mileage": 80957       }   ]`` |
| `rowsPerPage` | `rows-per-page` |             | `number` | `2`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `sortingEnabler`   |             | `CustomEvent<any>` |
| `tableToBodyRow`   |             | `CustomEvent<any>` |
| `tableToFooter`    |             | `CustomEvent<any>` |
| `tableToHeaderRow` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [sdds-table-body-row](../table-body-row)
- [sdds-body-cell](../table-body-cell)

### Graph
```mermaid
graph TD;
  sdds-table-body --> sdds-table-body-row
  sdds-table-body --> sdds-body-cell
  style sdds-table-body fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
