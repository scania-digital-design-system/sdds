# sdds-header-dropdown



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                       | Type      | Default     |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `buttonLabel`    | `button-label`     | The label of the button that opens the dropdown. This is an alternative to the button-label slot. | `string`  | `undefined` |
| `noDropdownIcon` | `no-dropdown-icon` | If the dropdown icon (downwards chevron) should be hidden.                                        | `boolean` | `false`     |
| `selected`       | `selected`         | If the button that opens the dropdown should appear selected.                                     | `boolean` | `false`     |


## Dependencies

### Depends on

- [sdds-header-button](../header-button)
- [sdds-icon](../../../icon)
- [sdds-popover-canvas](../../../popover-canvas)

### Graph
```mermaid
graph TD;
  sdds-header-dropdown --> sdds-header-button
  sdds-header-dropdown --> sdds-icon
  sdds-header-dropdown --> sdds-popover-canvas
  sdds-header-button --> sdds-core-header-item
  style sdds-header-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
