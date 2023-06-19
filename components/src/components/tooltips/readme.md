# sdds-tooltip

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                                                              | Type                                                                                                                                                                                                         | Default    |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `mouseOverTooltip` | `mouse-over-tooltip` | Allow mouse over tooltip. Useful when tooltip contains clickable elements like link or button.                                                                                           | `boolean`                                                                                                                                                                                                    | `false`    |
| `placement`        | `placement`          | Placement of tooltip. Possible values: auto, auto-start, auto-end, top, top-start, top-end, bottom, bottom-start, bottom-end, right, right-start, right-end, left, left-start, left-end. | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'` |
| `selector`         | `selector`           | CSS selector of element on which tooltip is used on.                                                                                                                                     | `string`                                                                                                                                                                                                     | `''`       |
| `show`             | `show`               | Prop in control of showing and hiding prop                                                                                                                                               | `boolean`                                                                                                                                                                                                    | `false`    |
| `text`             | `text`               | In case tooltip contains only text, no HTML, text can be passed by this prop                                                                                                             | `string`                                                                                                                                                                                                     | `''`       |


## Methods

### `updateTooltip() => Promise<void>`

Updates and rerenders the popover component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
