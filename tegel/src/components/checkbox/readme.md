# sdds-checkbox



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                                                     | Type      | Default               |
| ------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------- |
| `checkboxId` | `checkbox-id` | ID for the checkbox's input element. Randomly generated if not specified.                                                                                                                       | `string`  | `crypto.randomUUID()` |
| `checked`    | `checked`     | Sets the checkbox as checked  **NOTE**: If you're listening for events you need to set this ID yourself to identify the checkbox, as the default ID is random and will be different every time. | `boolean` | `false`               |
| `disabled`   | `disabled`    | Sets the checkbox in a disabled state                                                                                                                                                           | `boolean` | `false`               |
| `label`      | `label`       | Label text for the checkbox                                                                                                                                                                     | `string`  | `undefined`           |
| `name`       | `name`        | Name for the checkbox's input element.                                                                                                                                                          | `string`  | `undefined`           |


## Events

| Event                     | Description                                                               | Type                                                                        |
| ------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sddsCheckboxChangeEvent` | Sends unique checkbox identifier and status when it is checked/unchecked. | `CustomEvent<{ checkboxId: string; checked: boolean; disabled: boolean; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
