# sdds-header-launcher



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                   | Type               | Default  |
| --------- | --------- | ----------------------------- | ------------------ | -------- |
| `open`    | `open`    | Opens and closes the launcher | `boolean`          | `false`  |
| `variant` | `variant` |                               | `"grid" \| "list"` | `'list'` |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `childOpenedEvent` |             | `CustomEvent<any>` |


## Methods

### `toggleLauncher() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [sdds-icon](../../../icon)

### Graph
```mermaid
graph TD;
  sdds-header-launcher --> sdds-icon
  style sdds-header-launcher fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
