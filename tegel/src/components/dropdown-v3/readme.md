# dropdown-v3



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                          | Type                                  | Default       |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------- |
| `data`          | `data`           | Data is an array of objects that contains label and value that will be rendered as dropdown-options. | `string`                              | `null`        |
| `error`         | `error`          | Error state for the component,                                                                       | `boolean`                             | `false`       |
| `filter`        | `filter`         |                                                                                                      | `boolean`                             | `undefined`   |
| `helper`        | `helper`         | Helper text in the bottom of dropdown                                                                | `string`                              | `''`          |
| `label`         | `label`          | Label text                                                                                           | `string`                              | `undefined`   |
| `labelPosition` | `label-position` | Controls position of label                                                                           | `"inside" \| "no-label" \| "outside"` | `'outside'`   |
| `modeVariant`   | `mode-variant`   |                                                                                                      | `"primary" \| "secondary"`            | `'primary'`   |
| `multiselect`   | `multiselect`    |                                                                                                      | `boolean`                             | `undefined`   |
| `noResultText`  | `no-result-text` |                                                                                                      | `string`                              | `'No result'` |
| `open`          | `open`           | Open state of the dropdown                                                                           | `boolean`                             | `false`       |
| `openDirection` | `open-direction` | Direction that the dropdown will open. By default set to auto.                                       | `"auto" \| "down" \| "up"`            | `'up'`        |
| `placeholder`   | `placeholder`    | Placeholder text                                                                                     | `string`                              | `undefined`   |
| `size`          | `size`           | The size of the component                                                                            | `"lg" \| "md" \| "sm"`                | `'lg'`        |
| `value`         | --               |                                                                                                      | `{ value: string; label: string; }[]` | `[]`          |


## Dependencies

### Depends on

- [sdds-icon](../icon)
- [sdds-dropdown-option-v3](dropdown-option-v3)

### Graph
```mermaid
graph TD;
  sdds-dropdown-v3 --> sdds-icon
  sdds-dropdown-v3 --> sdds-dropdown-option-v3
  sdds-dropdown-option-v3 --> sdds-icon
  style sdds-dropdown-v3 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
