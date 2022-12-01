# sdds-accordion-item


<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                    | Type               | Default |
| -------------------- | ---------------------- | ---------------------------------------------------------------------------------------------- | ------------------ | ------- |
| `disabled`           | `disabled`             | Disabled option in `boolean`.                                                                  | `boolean`          | `false` |
| `expandIconPosition` | `expand-icon-position` | Changes where the expand icon is placed.                                                       | `"end" \| "start"` | `'end'` |
| `expanded`           | `expanded`             | Set to true to expand panel open                                                               | `boolean`          | `false` |
| `header`             | `header`               | The header gives users the context about the additional information available inside the panel | `string`           | `''`    |
| `paddingReset`       | `padding-reset`        | When true 16px on right padding instead of 64px                                                | `boolean`          | `false` |


## Events

| Event                 | Description                                                                                                               | Type                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `accordionItemToggle` | Fires after the accordion item is closed or opened, emitting the value (as boolean) of the current state of the accordion | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
