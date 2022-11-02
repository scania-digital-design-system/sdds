# Dropdown

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                        | Type                                                     | Default      |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------ |
| `defaultOption`  | `default-option`  | Add the value of the option as string to set it as default                                                         | `string`                                                 | `undefined`  |
| `disabled`       | `disabled`        | Set to true for disabled states                                                                                    | `boolean`                                                | `undefined`  |
| `helper`         | `helper`          | Add helper text in the bottom of dropdown                                                                          | `string`                                                 | `''`         |
| `inline`         | `inline`          | Set to true to make the width following the label text length                                                      | `boolean`                                                | `false`      |
| `label`          | `label`           | Label text for label inside & outside                                                                              | `string`                                                 | `undefined`  |
| `labelPosition`  | `label-position`  | Controls position of label                                                                                         | `"inside" \| "no-label" \| "outside"`                    | `'no-label'` |
| `placeholder`    | `placeholder`     | Placeholder text for dropdown with no selectedLabel item 2                                                         | `string`                                                 | `undefined`  |
| `selectedOption` | `selected-option` | Add the value of the option as string to set it as new selected value                                              | `string`                                                 | `undefined`  |
| `size`           | `size`            | Controls the size of dropdown. 'sm', 'md' and 'lg' correct values and 'small', 'medium' and 'large' are deprecated | `"large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'lg'`       |
| `state`          | `state`           | Support `error` state                                                                                              | `string`                                                 | `'default'`  |
| `type`           | `type`            | Controls type of dropdown. 'Default', 'multiselect' and 'filter' are correct values                                | `"default" \| "filter" \| "multiselect"`                 | `'default'`  |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `inputSearch` |             | `CustomEvent<any>` |


## Methods

### `resetOption() => Promise<void>`

Use this method to reset the dropdown. Then it will go back to its initial state.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [sdds-dropdown-filter](dropdown-filter)

### Graph
```mermaid
graph TD;
  sdds-dropdown-filter --> sdds-dropdown
  style sdds-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*