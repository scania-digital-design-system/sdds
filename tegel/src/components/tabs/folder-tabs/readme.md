# sdds-inline-tabs



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                  | Type                       | Default |
| ------------- | -------------- | ------------------------------------------------------------ | -------------------------- | ------- |
| `modeVariant` | `mode-variant` | Variant of the tabs, primary= on white, secondary= on grey50 | `"primary" \| "secondary"` | `null`  |


## Events

| Event                | Description | Type                                                              |
| -------------------- | ----------- | ----------------------------------------------------------------- |
| `sddsTabChangeEvent` |             | `CustomEvent<{ selectedTab: string; selectedTabIndex: number; }>` |


## Dependencies

### Depends on

- [sdds-icon](../../icon)

### Graph
```mermaid
graph TD;
  sdds-folder-tabs --> sdds-icon
  style sdds-folder-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*