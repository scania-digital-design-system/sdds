# sdds-header-launcher



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                   | Type      | Default |
| -------- | --------- | ----------------------------- | --------- | ------- |
| `open`   | `open`    | Opens and closes the launcher | `boolean` | `false` |


## Dependencies

### Depends on

- [sdds-header-launcher-button](../header-launcher-button)
- [sdds-popover-canvas](../../../popover-canvas)

### Graph
```mermaid
graph TD;
  sdds-header-launcher --> sdds-header-launcher-button
  sdds-header-launcher --> sdds-popover-canvas
  sdds-header-launcher-button --> sdds-header-button
  sdds-header-launcher-button --> sdds-icon
  sdds-header-button --> sdds-core-header-item
  style sdds-header-launcher fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
