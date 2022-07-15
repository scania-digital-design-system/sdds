# sdds-table-toolbar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                  | Type      | Default |
| ----------------- | ------------------ | ---------------------------- | --------- | ------- |
| `enableFiltering` | `enable-filtering` | Enables preview of searchbar | `boolean` | `false` |
| `tableTitle`      | `table-title`      | Adds title to the table      | `string`  | `''`    |


## Events

| Event                        | Description                                                        | Type                   |
| ---------------------------- | ------------------------------------------------------------------ | ---------------------- |
| `tableFilteringTerm`         | Used for sending users input to main parent <sdds-table> component | `CustomEvent<any>`     |
| `tableToolbarAvailableEvent` | Event used to inform other subcomponents about presence of toolbar | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
