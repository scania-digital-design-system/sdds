# sdds-banner



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                                                                                                                        | Type                                         | Default               |
| ----------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------- |
| `ariaAtomicValue` | `aria-atomic-value` | NEEDS TO BE ALIGNED WITH THE OTHER COMPONENTS DESCRIPTION                                                                                                                                                                                          | `boolean`                                    | `false`               |
| `ariaLiveValue`   | `aria-live-value`   | NEEDS TO BE ALIGNED WITH THE OTHER COMPONENTS DESCRIPTION                                                                                                                                                                                          | `"assertive" \| "off" \| "polite"`           | `'polite'`            |
| `bannerId`        | `banner-id`         | ID used for internal table functionality and events, must be unique.  **NOTE**: If you're listening for banner close events you need to set this ID yourself to identify the banner, as the default ID is random and will be different every time. | `string`                                     | `crypto.randomUUID()` |
| `header`          | `header`            | Header text.                                                                                                                                                                                                                                       | `string`                                     | `undefined`           |
| `icon`            | `icon`              | Name of the icon for the component. For error and information type the icon is predefined.                                                                                                                                                         | `string`                                     | `undefined`           |
| `linkHref`        | `link-href`         | Href for the link                                                                                                                                                                                                                                  | `string`                                     | `undefined`           |
| `linkTarget`      | `link-target`       | Where to open the linked URL                                                                                                                                                                                                                       | `"_blank" \| "_parent" \| "_self" \| "_top"` | `'_self'`             |
| `linkText`        | `link-text`         | Link text.                                                                                                                                                                                                                                         | `string`                                     | `undefined`           |
| `persistent`      | `persistent`        | Href for the link                                                                                                                                                                                                                                  | `boolean`                                    | `false`               |
| `rel`             | `rel`               | 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'.                                                                                             | `string`                                     | `'noopener'`          |
| `subheader`       | `subheader`         | Subheader text.                                                                                                                                                                                                                                    | `string`                                     | `undefined`           |
| `type`            | `type`              | Type of banner                                                                                                                                                                                                                                     | `"error" \| "information" \| "none"`         | `'none'`              |


## Events

| Event                  | Description                                                     | Type               |
| ---------------------- | --------------------------------------------------------------- | ------------------ |
| `sddsBannerCloseEvent` | Sends unique banner identifier when the close button is pressed | `CustomEvent<any>` |


## Methods

### `hideBanner() => Promise<{ bannerId: string; visible: boolean; }>`

Hides the banner.

#### Returns

Type: `Promise<{ bannerId: string; visible: boolean; }>`



### `showBanner() => Promise<{ bannerId: string; visible: boolean; }>`

Shows the banner

#### Returns

Type: `Promise<{ bannerId: string; visible: boolean; }>`




## Dependencies

### Depends on

- [sdds-icon](../icon)

### Graph
```mermaid
graph TD;
  sdds-banner --> sdds-icon
  style sdds-banner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
