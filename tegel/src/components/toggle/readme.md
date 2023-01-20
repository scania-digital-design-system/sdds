# sdds-toggle



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                              | Type           | Default               |
| ---------- | ----------- | ------------------------------------------------------------------------ | -------------- | --------------------- |
| `checked`  | `checked`   | TODO - Better name for this                                              | `boolean`      | `false`               |
| `disabled` | `disabled`  | Sets the toggle in a disabled state                                      | `boolean`      | `false`               |
| `headline` | `headline`  | Label for the toggle                                                     | `string`       | `undefined`           |
| `label`    | `label`     | Label for the toggle                                                     | `string`       | `undefined`           |
| `name`     | `name`      | Name of the toggles input element                                        | `string`       | `undefined`           |
| `size`     | `size`      | Size of the toggle                                                       | `"lg" \| "sm"` | `'lg'`                |
| `toggleId` | `toggle-id` | ID of the toggles input element, if not specifed it's randomly generated | `string`       | `crypto.randomUUID()` |


## Events

| Event               | Description                                                   | Type                                                   |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------------------ |
| `toggleChangeEvent` | Sends unique toggle identifier and status when it is toggled. | `CustomEvent<{ toggleId: string; checked: boolean; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
