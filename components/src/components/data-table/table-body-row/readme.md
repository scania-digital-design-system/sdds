# sdds-table-body-row



<!-- Auto Generated Below -->


## Events

| Event                | Description                                                                                                             | Type                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `bodyRowToTable`     | Send status of single row to the parent, sdds-table component that hold logic for data export and main checkbox control | `CustomEvent<boolean>` |
| `runPaginationEvent` | Event that triggers pagination function. Needed as first rows have to be rendered in order for pagination to run        | `CustomEvent<string>`  |


## Dependencies

### Used by

 - [sdds-table-body](../table-body)

### Graph
```mermaid
graph TD;
  sdds-table-body --> sdds-table-body-row
  style sdds-table-body-row fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
