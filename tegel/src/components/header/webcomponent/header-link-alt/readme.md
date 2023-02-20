# sdds-header-link-alt



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute    | Description | Type      | Default      |
| ------------------- | ------------ | ----------- | --------- | ------------ |
| `href` _(required)_ | `href`       |             | `string`  | `undefined`  |
| `persistent`        | `persistent` |             | `boolean` | `undefined`  |
| `rel`               | `rel`        |             | `string`  | `'noopener'` |
| `target`            | `target`     |             | `string`  | `undefined`  |


## Shadow Parts

| Part  | Description |
| ----- | ----------- |
| `"a"` |             |


## Dependencies

### Used by

 - [sdds-header-logo](../header-logo)

### Depends on

- [sdds-core-header-item](../core-header-item)

### Graph
```mermaid
graph TD;
  sdds-header-link --> sdds-core-header-item
  sdds-header-logo --> sdds-header-link
  style sdds-header-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
