# sdds-checkbox



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                               | Type      | Default               |
| ----------------- | ------------------ | ------------------------------------------------------------------------- | --------- | --------------------- |
| `ariaDescribedby` | `aria-describedby` | Aria-describedby for the checkboxes input element.                        | `string`  | `undefined`           |
| `checkboxId`      | `checkbox-id`      | ID for the checkbox's input element. Randomly generated if not specified. | `string`  | `crypto.randomUUID()` |
| `checked`         | `checked`          | Sets the checkbox as checked                                              | `boolean` | `false`               |
| `disabled`        | `disabled`         | Sets the checkbox in a disabled state                                     | `boolean` | `false`               |
| `label`           | `label`            | Label text for the checkbox                                               | `string`  | `undefined`           |
| `name`            | `name`             | Name for the checkbox's input element.                                    | `string`  | `undefined`           |
| `required`        | `required`         | Make the checkbox required                                                | `boolean` | `false`               |


## Events

| Event                     | Description                                                               | Type                                                                        |
| ------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sddsCheckboxChangeEvent` | Sends unique checkbox identifier and status when it is checked/unchecked. | `CustomEvent<{ checkboxId: string; checked: boolean; disabled: boolean; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
