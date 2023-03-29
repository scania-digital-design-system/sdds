# sdds-header-launcher-button



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                      | Type      | Default |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `active` | `active`  | If the button should appear active. Can be used when the button is triggering a dropdown, and the dropdown is open, for example. | `boolean` | `false` |


## Dependencies

### Used by

 - [sdds-header-launcher](../header-launcher)

### Depends on

- [sdds-header-button](../header-button)
- [sdds-icon](../../../icon)

### Graph
```mermaid
graph TD;
  sdds-header-launcher-button --> sdds-header-button
  sdds-header-launcher-button --> sdds-icon
  sdds-header-button --> sdds-core-header-item
  sdds-header-launcher --> sdds-header-launcher-button
  style sdds-header-launcher-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*