# sdds-table



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                           | Type      | Default     |
| ---------------------- | ------------------------ | --------------------------------------------------------------------- | --------- | ----------- |
| `compactDesign`        | `compact-design`         | Enables style where data-table toolbar, rows and footer are less high | `boolean` | `false`     |
| `enableExpandableRows` | `enable-expandable-rows` | Enables extended row feature of data-table                            | `boolean` | `false`     |
| `enableMultiselect`    | `enable-multiselect`     | Enables multiselect feature of data-table                             | `boolean` | `false`     |
| `noMinWidth`           | `no-min-width`           | Enables to customise width on data-table columns                      | `boolean` | `undefined` |
| `verticalDividers`     | `vertical-dividers`      | Enables style with vertical dividers between columns                  | `boolean` | `false`     |
| `whiteBackground`      | `white-background`       | Changes a colors of data data-table when used on white background     | `boolean` | `false`     |


## Events

| Event                     | Description                                                                  | Type               |
| ------------------------- | ---------------------------------------------------------------------------- | ------------------ |
| `commonTableStylesEvent`  | Sends out status of different general styling changes to children components | `CustomEvent<any>` |
| `enableExpandedRowsEvent` | Sends out status of multiselect feature to children components               | `CustomEvent<any>` |
| `enableMultiselectEvent`  | Sends out status of multiselect feature to children components               | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
