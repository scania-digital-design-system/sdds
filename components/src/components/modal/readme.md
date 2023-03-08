# sdds-modal

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                 | Type                           | Default |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------ | ------- |
| `prevent`  | `prevent`  | Disables closing modal on clicking on overlay area.                                                         | `boolean`                      | `false` |
| `selector` | `selector` | Target selector that triggers opening of modal, for example button with id="btn1", then selector is "#btn1" | `string`                       | `''`    |
| `size`     | `size`     | Size of modal. Accepted strings are: xs, sm, md, lg.                                                        | `"lg" \| "md" \| "sm" \| "xs"` | `'md'`  |


## Events

| Event       | Description                                                                                             | Type               |
| ----------- | ------------------------------------------------------------------------------------------------------- | ------------------ |
| `sddsClose` | Event the is emitted whenever the modal is closed, either via the x button or by clicking the backdrop. | `CustomEvent<any>` |


## Methods

### `closeModal() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `openModal() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
