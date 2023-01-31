# radio-button



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                     | Type      | Default     |
| ----------------- | ------------------- | ----------------------------------------------- | --------- | ----------- |
| `ariaDescribedBy` | `aria-described-by` | Label mainly used for accesibility tools.       | `string`  | `undefined` |
| `ariaLabelledBy`  | `aria-labelled-by`  | Label mainly used for accesibility tools.       | `string`  | `undefined` |
| `checked`         | `checked`           | Decides if the radio button is checked or not.  | `boolean` | `false`     |
| `disabled`        | `disabled`          | Decides if the radio button is disabled or not. | `boolean` | `false`     |
| `label`           | `label`             | Label text connected to radio button.           | `string`  | `undefined` |
| `name`            | `name`              | Name of radio button, used for reference.       | `string`  | `undefined` |
| `radioId`         | `radio-id`          | Unique radio button identifier.                 | `string`  | `undefined` |
| `required`        | `required`          | Decides if the radio button is required or not. | `boolean` | `false`     |
| `value`           | `value`             | Value of input.                                 | `string`  | `undefined` |


## Events

| Event                        | Description                                                         | Type                                               |
| ---------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| `sddsRadioButtonChangeEvent` | Sends unique radio button identifier and status when it is checked. | `CustomEvent<{ radioId: string; value: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
