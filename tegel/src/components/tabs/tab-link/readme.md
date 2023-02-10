# sdds-tab-link



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                            | Type                                         | Default      |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------ |
| `disabled`   | `disabled`    | Disables the tab.                                                                                                                                      | `boolean`                                    | `false`      |
| `linkHref`   | `link-href`   | Href for the link                                                                                                                                      | `string`                                     | `undefined`  |
| `linkTarget` | `link-target` | Where to open the linked URL                                                                                                                           | `"_blank" \| "_parent" \| "_self" \| "_top"` | `'_self'`    |
| `rel`        | `rel`         | 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. | `string`                                     | `'noopener'` |
| `selected`   | `selected`    | Marks the tab as the selected one.                                                                                                                     | `boolean`                                    | `false`      |


## Methods

### `setTabWidth(width: number) => Promise<void>`

Method to set the width of the tab. Used by the <sdds-folder-tabs>

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
