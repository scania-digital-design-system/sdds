# sdds-header-dropdown

The header dropdown should contain content will be shown in a popover canvas when its button is clicked.

Example:

```html
<sdds-header-dropdown>
  <span slot="button-label">Label</span>
  <sdds-header-dropdown-list>
    <sdds-header-dropdown-list-link href="https://www.scania.com">Link 1</sdds-header-dropdown-list-link>
    <sdds-header-dropdown-list-link href="https://www.scania.com">Link 2</sdds-header-dropdown-list-link>
  </sdds-header-dropdown-list>
</sdds-header-dropdown>
```


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
