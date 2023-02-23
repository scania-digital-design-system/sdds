# sdds-inline-tabs



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                       | Type                       | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `autoHeight`  | `auto-height`  | different height settings. right now only supports "auto", otherwise ignored                      | `boolean`                  | `false`     |
| `defaultTab`  | `default-tab`  | either use this (default-tab="...") or read attribute "default" from one of the slotted children. | `string`                   | `''`        |
| `modeVariant` | `mode-variant` | Variant of the tabs, primary= on white, secondary= on grey50                                      | `"primary" \| "secondary"` | `'primary'` |


## Events

| Event        | Description                     | Type                               |
| ------------ | ------------------------------- | ---------------------------------- |
| `sddsChange` | Emitted when a tab is selected. | `CustomEvent<{ tabKey: string; }>` |


## Methods

### `showTab(key: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
