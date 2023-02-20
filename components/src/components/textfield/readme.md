# sdds-textfield

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                 | Type                   | Default     |
| ------------- | -------------- | ------------------------------------------- | ---------------------- | ----------- |
| `autofocus`   | `autofocus`    | Autofocus for input                         | `boolean`              | `false`     |
| `disabled`    | `disabled`     | Set input in disabled state                 | `boolean`              | `false`     |
| `labelInside` | `label-inside` | Label that will be put inside the input     | `string`               | `''`        |
| `maxlength`   | `maxlength`    | Max length of input                         | `number`               | `undefined` |
| `name`        | `name`         | Name property                               | `string`               | `''`        |
| `nominwidth`  | `nominwidth`   | With setting                                | `boolean`              | `false`     |
| `placeholder` | `placeholder`  | Placeholder text                            | `string`               | `''`        |
| `readonly`    | `readonly`     | Set input in readonly state                 | `boolean`              | `false`     |
| `size`        | `size`         | Size of the input                           | `"" \| "md" \| "sm"`   | `''`        |
| `state`       | `state`        | Error state of input                        | `string`               | `undefined` |
| `type`        | `type`         | Which input type, text, password or similar | `"password" \| "text"` | `'text'`    |
| `value`       | `value`        | Value of the input text                     | `string`               | `null`      |


## Events

| Event        | Description                    | Type                      |
| ------------ | ------------------------------ | ------------------------- |
| `sddsBlur`   | Blur event for the textfield   | `CustomEvent<FocusEvent>` |
| `sddsChange` | Change event for the textfield | `CustomEvent<any>`        |
| `sddsFocus`  | Focus event for the textfield  | `CustomEvent<FocusEvent>` |
| `sddsInput`  | Input event for the textfield  | `CustomEvent<InputEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
