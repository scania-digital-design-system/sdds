# sdds-table



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                                                                                                                                                                                | Type      | Default               |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | --------------------- |
| `compactDesign`        | `compact-design`         | Enables style where data-table toolbar, rows and footer are less high                                                                                                                                                                      | `boolean` | `false`               |
| `enableExpandableRows` | `enable-expandable-rows` | Enables extended row feature of data-table                                                                                                                                                                                                 | `boolean` | `false`               |
| `enableMultiselect`    | `enable-multiselect`     | Enables multiselect feature of data-table                                                                                                                                                                                                  | `boolean` | `false`               |
| `enableResponsive`     | `enable-responsive`      | Enables table to take 100% available width with equal spacing of columns                                                                                                                                                                   | `boolean` | `false`               |
| `noMinWidth`           | `no-min-width`           | Enables to customise width on data-table columns                                                                                                                                                                                           | `boolean` | `undefined`           |
| `tableId`              | `table-id`               | ID used for internal table functionality and events, must be unique.  **NOTE**: If you're listening for table events you need to set this ID yourself to identify the table, as the default ID is random and will be different every time. | `string`  | `crypto.randomUUID()` |
| `verticalDividers`     | `vertical-dividers`      | Enables style with vertical dividers between columns                                                                                                                                                                                       | `boolean` | `false`               |
| `whiteBackground`      | `white-background`       | Changes a colors of data data-table when used on white background                                                                                                                                                                          | `boolean` | `false`               |


## Events

| Event                    | Description                            | Type                                                                           |
| ------------------------ | -------------------------------------- | ------------------------------------------------------------------------------ |
| `tablePropsChangedEvent` | Broadcasts changes to the tables props | `CustomEvent<{ tableId: string; changed: (keyof Props)[]; } & Partial<Props>>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
