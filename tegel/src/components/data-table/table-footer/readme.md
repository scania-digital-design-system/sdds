# sdds-table-footer



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute                     | Description                                                                                                                                                 | Type      | Default |
| --------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `clientMaxPages`            | `client-max-pages`            | Prop for client to set max number of pages                                                                                                                  | `number`  | `1`     |
| `clientPaginationValue`     | `client-pagination-value`     | Prop for client to set current page number                                                                                                                  | `number`  | `1`     |
| `clientSetColumnsNumber`    | `client-set-columns-number`   | In case that automatic count of columns does not work, user can manually set this one. Take in mind that expandable control is column too                   | `number`  | `null`  |
| `disablePaginationFunction` | `disable-pagination-function` | Disables inbuilt pagination logic, leaving user an option to create own pagination functionality while listening to events from sdds-table-footer component | `boolean` | `false` |
| `enableClientPagination`    | `enable-client-pagination`    | Prop to enable client controlled pagination                                                                                                                 | `boolean` | `false` |
| `enablePagination`          | `enable-pagination`           | Enable pagination and show pagination controls                                                                                                              | `boolean` | `false` |
| `rowsPerPage`               | `rows-per-page`               | Sets how many rows to display when pagination is enabled                                                                                                    | `number`  | `5`     |


## Events

| Event                  | Description                                                                                                                                | Type               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `sddsPaginationChange` | Event to send current page value back to sdds-table-body component, can also be listened to in order to implement custom pagination logic. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
