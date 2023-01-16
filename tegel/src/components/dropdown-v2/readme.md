# dropdown-v2



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                          | Type                                  | Default         |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------- |
| `data`          | `data`           | Data is an array of objects that contains label and value that will be rendered as dropdown-options. | `string`                              | `null`          |
| `error`         | `error`          | Error state for the component,                                                                       | `boolean`                             | `false`         |
| `helper`        | `helper`         | Helper text in the bottom of dropdown                                                                | `string`                              | `''`            |
| `label`         | `label`          | Label text                                                                                           | `string`                              | `'Placeholder'` |
| `labelPosition` | `label-position` | Controls position of label                                                                           | `"inside" \| "no-label" \| "outside"` | `'outside'`     |
| `open`          | `open`           | Open state of the dropdown                                                                           | `boolean`                             | `false`         |
| `openDirection` | `open-direction` | Direction that the dropdown will open. By default set to auto.                                       | `"auto" \| "down" \| "up"`            | `'up'`          |
| `placeholder`   | `placeholder`    | Placeholder for the dropdown                                                                         | `string`                              | `undefined`     |
| `size`          | `size`           | The size of the component                                                                            | `"lg" \| "md" \| "sm"`                | `'lg'`          |
| `value`         | `value`          | The value of the dropdown - selected option value.                                                   | `string`                              | `undefined`     |
| `valueLabel`    | `value-label`    | The label of the selected value.                                                                     | `string`                              | `undefined`     |


## Dependencies

### Depends on

- [sdds-icon](../icon)
- [sdds-dropdown-option-v2](dropdown-option-v2)

### Graph
```mermaid
graph TD;
  sdds-dropdown-v2 --> sdds-icon
  sdds-dropdown-v2 --> sdds-dropdown-option-v2
  sdds-dropdown-option-v2 --> sdds-icon
  style sdds-dropdown-v2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
