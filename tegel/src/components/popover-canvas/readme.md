# sdds-popover-canvas



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                                                                  | Type                                                                                                                                                                                                         | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `initialShow`    | `initial-show`    | Decides if the Popover Canvas should be visible from the start                                                                                               | `boolean`                                                                                                                                                                                                    | `false`     |
| `modifiers`      | --                |                                                                                                                                                              | `Object[]`                                                                                                                                                                                                   | `[]`        |
| `offsetDistance` | `offset-distance` | Sets the offset distance                                                                                                                                     | `number`                                                                                                                                                                                                     | `8`         |
| `offsetSkidding` | `offset-skidding` | Sets the offset skidding                                                                                                                                     | `number`                                                                                                                                                                                                     | `0`         |
| `placement`      | `placement`       | Decides the placement of the Popover Canvas                                                                                                                  | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'auto'`    |
| `referenceEl`    | --                | Element that will trigger the popover (takes priority over selector)                                                                                         | `HTMLElement`                                                                                                                                                                                                | `undefined` |
| `selector`       | `selector`        | The CSS-selector for an element that will trigger the popover                                                                                                | `string`                                                                                                                                                                                                     | `''`        |
| `show`           | `show`            | Controls wether the popover is shown or not. If this is set hiding and showing will be decided by this prop and will need to be controlled from the outside. | `boolean`                                                                                                                                                                                                    | `null`      |


## Dependencies

### Used by

 - [sdds-header-dropdown-v2](../header/webcomponent-v2/header-dropdown-v2)
 - [sdds-header-launcher-v2](../header/webcomponent-v2/header-launcher)

### Graph
```mermaid
graph TD;
  sdds-header-dropdown-v2 --> sdds-popover-canvas
  sdds-header-launcher-v2 --> sdds-popover-canvas
  style sdds-popover-canvas fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
