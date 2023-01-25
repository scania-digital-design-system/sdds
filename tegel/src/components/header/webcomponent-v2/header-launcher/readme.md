# sdds-header-launcher



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                   | Type      | Default |
| -------- | --------- | ----------------------------- | --------- | ------- |
| `open`   | `open`    | Opens and closes the launcher | `boolean` | `false` |


## Dependencies

### Depends on

- [sdds-header-launcher-button](../header-launcher-button)

### Graph
```mermaid
graph TD;
  sdds-header-launcher-v2 --> sdds-header-launcher-button
  sdds-header-launcher-button --> sdds-header-button-v2
  sdds-header-launcher-button --> sdds-icon
  sdds-header-button-v2 --> sdds-core-header-item
  style sdds-header-launcher-v2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
