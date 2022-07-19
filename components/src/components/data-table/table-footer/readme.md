# sdds-table-footer



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                              | Type      | Default |
| ------------------------ | -------------------------- | -------------------------------------------------------- | --------- | ------- |
| `clientMaxPages`         | `client-max-pages`         | Prop for client to set max number of pages               | `number`  | `1`     |
| `clientPaginationValue`  | `client-pagination-value`  | Prop for client to set current page number               | `number`  | `1`     |
| `enableClientPagination` | `enable-client-pagination` | Prop to enable client controlled pagination              | `boolean` | `false` |
| `enablePagination`       | `enable-pagination`        | Enable pagination and show pagination controls           | `boolean` | `false` |
| `rowsPerPage`            | `rows-per-page`            | Sets how many rows to display when pagination is enabled | `number`  | `5`     |


## Events

| Event                   | Description                                                        | Type               |
| ----------------------- | ------------------------------------------------------------------ | ------------------ |
| `currentPageValueEvent` | Event to send current page value back to sdds-table-body component | `CustomEvent<any>` |
| `enablePaginationData`  | Event to send rowsPerPage value back to sdds-table-body component  | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
