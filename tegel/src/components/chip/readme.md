# sdds-chip



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                                                                               | Type                                | Default               |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------- |
| `checked`   | `checked`    | Setting it to true set component state to checked. Valid only for inputType checkbox and radio.                                                                                                                                           | `boolean`                           | `false`               |
| `chipId`    | `chip-id`    | ID used for internal chip functionality and events, must be unique.  **NOTE**: If you're listening for input events you need to set this ID yourself to identify the input, as the default ID is random and will be different every time. | `string`                            | `crypto.randomUUID()` |
| `inputType` | `input-type` | Type of chip, depends on usage                                                                                                                                                                                                            | `"button" \| "checkbox" \| "radio"` | `'button'`            |
| `name`      | `name`       | Name for the checkbox or radio input element. Also creates a reference between label and input. Valid only for inputType checkbox and radio.                                                                                              | `string`                            | `undefined`           |
| `size`      | `size`       |                                                                                                                                                                                                                                           | `"lg" \| "sm"`                      | `'lg'`                |
| `value`     | `value`      | Value of input. Valid only for inputType checkbox and radio.                                                                                                                                                                              | `string`                            | `undefined`           |


## Events

| Event        | Description                                                                                                                                                                                                                                                             | Type                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `sddsChange` | Sends unique chip identifier and value when it is changed (checked/unchecked). Valid only for chipType checkbox and radio. If no ID is specified a random one will be generated. To use this listener don't use the randomized ID, use a specific one of your choosing. | `CustomEvent<{ chipId: string; value: string; }>` |
| `sddsClick`  | Sends unique chip identifier when chip is clicked. Valid only for chipType="button". If no ID is specified a random one will be generated. To use this listener don't use the randomized ID, use a specific one of your choosing.                                       | `CustomEvent<{ chipId: string; }>`                |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
