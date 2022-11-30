# sdds-accordion-item


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute  | Description                                                                                                          | Type                         | Default     |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| `affix`      | `affix`    | Icon can be placed after or before accordion header. Values accepted: `prefix` or `suffix` Default value is `suffix` | `"prefix" \| "suffix"`       | `'suffix'`  |
| `disabled`   | `disabled` | Disabled option in `boolean`.                                                                                        | `boolean`                    | `false`     |
| `expanded`   | `expanded` | Set to true to expand panel open                                                                                     | `boolean`                    | `false`     |
| `header`     | `header`   | The header gives users the context about the additional information available inside the panel                       | `string`                     | `''`        |
| `panelStyle` | --         | Override the style of the panel. Note that it is passed as an object with css properties in camelCase.               | `{ [key: string]: string; }` | `undefined` |


## Events

| Event                 | Description                                                                                                               | Type                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `accordionItemToggle` | Fires after the accordion item is closed or opened, emitting the value (as boolean) of the current state of the accordion | `CustomEvent<boolean>` |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"button"` |             |
| `"panel"`  |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
