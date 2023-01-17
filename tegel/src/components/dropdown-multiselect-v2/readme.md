# dropdown-multiselect-v2



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                          | Type                                  | Default         |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------- |
| `data`          | `data`           | Data is an array of objects that contains label and value that will be rendered as dropdown-options. | `string`                              | `null`          |
| `error`         | `error`          | Error state for the component,                                                                       | `boolean`                             | `false`         |
| `helper`        | `helper`         | Helper text in the bottom of dropdown                                                                | `string`                              | `''`            |
| `label`         | `label`          | Label text                                                                                           | `string`                              | `'Placeholder'` |
| `labelPosition` | `label-position` | Controls position of label                                                                           | `"inside" \| "no-label" \| "outside"` | `'outside'`     |
| `modeVariant`   | `mode-variant`   |                                                                                                      | `"primary" \| "secondary"`            | `'primary'`     |
| `open`          | `open`           | Open state of the dropdown                                                                           | `boolean`                             | `false`         |
| `openDirection` | `open-direction` | Direction that the dropdown will open. By default set to auto.                                       | `"auto" \| "down" \| "up"`            | `'up'`          |
| `placeholder`   | `placeholder`    | Placeholder for the dropdown                                                                         | `string`                              | `undefined`     |
| `size`          | `size`           | The size of the component                                                                            | `"lg" \| "md" \| "sm"`                | `'lg'`          |
| `value`         | --               | The value of the dropdown - selected option value.                                                   | `string[]`                            | `[]`            |
| `valueLabels`   | --               | The label of the selected value.                                                                     | `string[]`                            | `[]`            |


## Dependencies

### Depends on

- [sdds-icon](../icon)
- [sdds-dropdown-multiselect-option-v2](dropdown-multiselect-option-v2)

### Graph
```mermaid
graph TD;
  sdds-dropdown-multiselect-v2 --> sdds-icon
  sdds-dropdown-multiselect-v2 --> sdds-dropdown-multiselect-option-v2
  style sdds-dropdown-multiselect-v2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
