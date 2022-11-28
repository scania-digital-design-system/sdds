# sdds-table-body-row-expended



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                                                                                                                               | Type     | Default |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `colSpan` | `col-span` | In case that automatic count of columns does not work, user can manually set this one. Take in mind that expandable control is column too | `number` | `null`  |


## Events

| Event                    | Description                                                                                                      | Type                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- | --------------------- |
| `runPaginationEvent`     | Event that triggers pagination function. Needed as first rows have to be rendered in order for pagination to run | `CustomEvent<string>` |
| `singleRowExpandedEvent` | Sends out status of itw own expended status feature to table header component                                    | `CustomEvent<any>`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
