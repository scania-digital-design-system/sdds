# sdds-header-dropdown-v2



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

- [sdds-header-button-v2](../header-button-alt)
- [sdds-icon](../../../icon)

### Graph
```mermaid
graph TD;
  sdds-header-dropdown-v2 --> sdds-header-button-v2
  sdds-header-dropdown-v2 --> sdds-icon
  sdds-header-button-v2 --> sdds-core-header-item
  style sdds-header-dropdown-v2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
