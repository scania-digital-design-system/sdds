# sdds-slider



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                      | Type         | Default               |
| ----------------- | ------------------- | -------------------------------------------------------------------------------- | ------------ | --------------------- |
| `controls`        | `controls`          | Decide to show the controls or not                                               | `boolean`    | `null`                |
| `disabled`        | `disabled`          | Sets the disabled state for the whole component                                  | `boolean`    | `null`                |
| `input`           | `input`             | Decide to show the input field or not                                            | `boolean`    | `null`                |
| `label`           | `label`             | Text for label                                                                   | `string`     | `''`                  |
| `max`             | `max`               | Maximum value                                                                    | `string`     | `'100'`               |
| `min`             | `min`               | Minimum value                                                                    | `string`     | `'0'`                 |
| `name`            | `name`              | Name property (will be inherited by the native slider component)                 | `string`     | `''`                  |
| `readOnly`        | `read-only`         | Sets the read only state for the whole component                                 | `boolean`    | `null`                |
| `showTickNumbers` | `show-tick-numbers` | Decide to show numbers above the tick markers or not                             | `boolean`    | `false`               |
| `size`            | `size`              | Sets the size of the scrubber                                                    | `"" \| "sm"` | `''`                  |
| `sliderId`        | `slider-id`         | Id for the sliders input element, randomly generated if not specified.           | `string`     | `crypto.randomUUID()` |
| `snap`            | `snap`              | Snap to the ticks grid                                                           | `boolean`    | `null`                |
| `step`            | `step`              | Defines how much to increment/decrement the value when using controls            | `string`     | `'1'`                 |
| `ticks`           | `ticks`             | Number of tick markers (tick for min- and max-value will be added automatically) | `string`     | `'0'`                 |
| `tooltip`         | `tooltip`           | Decide to show the tooltip or not                                                | `boolean`    | `null`                |
| `value`           | `value`             | Initial value                                                                    | `string`     | `'0'`                 |


## Events

| Event        | Description                                                                       | Type                              |
| ------------ | --------------------------------------------------------------------------------- | --------------------------------- |
| `sddsChange` | Sends unique checkbox identifier and value when the slider has a change in value. | `CustomEvent<{ value: string; }>` |


## Methods

### `reset() => Promise<void>`

Public method to re-initialise the slider if some configuration props are changed

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [sdds-icon](../icon)

### Graph
```mermaid
graph TD;
  sdds-slider --> sdds-icon
  style sdds-slider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
