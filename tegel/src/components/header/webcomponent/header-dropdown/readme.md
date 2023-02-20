# sdds-header-dropdown



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                | Type               | Default     |
| ---------------- | ------------------ | ---------------------------------------------------------- | ------------------ | ----------- |
| `active`         | `active`           |                                                            | `boolean`          | `false`     |
| `buttonLabel`    | `button-label`     |                                                            | `string`           | `undefined` |
| `noDropdownIcon` | `no-dropdown-icon` |                                                            | `boolean`          | `false`     |
| `open`           | `open`             | Opens and closes the dropdown                              | `boolean`          | `false`     |
| `placement`      | `placement`        | Placement of the dropdown menu relative to the button TODO | `"end" \| "start"` | `'start'`   |


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
