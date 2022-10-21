# sdds-table-header-cell



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                              | Type      | Default     |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `columnKey`   | `column-key`   | Value of column key, usually comes from JSON, needed for sorting                                         | `string`  | `undefined` |
| `columnTitle` | `column-title` | Text that displays in column cell                                                                        | `string`  | `undefined` |
| `customWidth` | `custom-width` | In case noMinWidth setting, user has to specify width value for each column, for example "150px"         | `string`  | `undefined` |
| `sortable`    | `sortable`     | If passed as prop, enables sorting on that column                                                        | `boolean` | `false`     |
| `textAlign`   | `text-align`   | Setting for text align, default is left, but user can pass "right" as string - useful for numeric values | `string`  | `undefined` |


## Events

| Event                 | Description                                                                                                                                | Type               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `headCellHoverEvent`  | Sends unique table identifier, column key so the body cells with the same key change background when user hovers over header cell          | `CustomEvent<any>` |
| `sortColumnDataEvent` | Sends unique table identifier,column key and sorting direction to the sdds-table-body component                                            | `CustomEvent<any>` |
| `textAlignEvent`      | Sends unique table identifier, column key and text align value so the body cells with same key take the same text alignment as header cell | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
