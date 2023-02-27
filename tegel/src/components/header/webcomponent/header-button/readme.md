# sdds-header-button

The header button is a button that can be used in the header.

Example:

```html
// HTML
<sdds-header-button onclick="alert('About us clicked');">
  About us
</sdds-header-button>

// React JSX
<sdds-header-button 
  onClick={() => {
    alert('About us clicked');
  }}
>
  About us
</sdds-header-button>
```



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                      | Type      | Default |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `active`   | `active`   | If the button should appear active. Can be used when the button is triggering a dropdown, and the dropdown is open, for example. | `boolean` | `false` |
| `selected` | `selected` | If the button should appear selected.                                                                                            | `boolean` | `false` |


## Dependencies

### Used by

 - [sdds-header-dropdown](../header-dropdown)
 - [sdds-header-hamburger](../header-hamburger)
 - [sdds-header-launcher-button](../header-launcher-button)

### Depends on

- [sdds-core-header-item](../core-header-item)

### Graph
```mermaid
graph TD;
  sdds-header-button --> sdds-core-header-item
  sdds-header-dropdown --> sdds-header-button
  sdds-header-hamburger --> sdds-header-button
  sdds-header-launcher-button --> sdds-header-button
  style sdds-header-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
