# sdds-table-footer



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                              | Type      | Default |
| ------------------ | ------------------- | -------------------------------------------------------- | --------- | ------- |
| `enablePagination` | `enable-pagination` | Enable pagination and show pagination controls           | `boolean` | `false` |
| `rowsPerPage`      | `rows-per-page`     | Sets how many rows to display when pagination is enabled | `number`  | `5`     |


## Events

| Event                  | Description                                                        | Type                  |
| ---------------------- | ------------------------------------------------------------------ | --------------------- |
| `currentPageValue`     | Event to send current page value back to sdds-table-body component | `CustomEvent<number>` |
| `enablePaginationData` | Event to send rowsPerPage value back to sdds-table-body component  | `CustomEvent<any>`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
