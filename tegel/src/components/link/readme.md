# sdds-link



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                            | Type                                         | Default      |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------ |
| `disabled`  | `disabled`  | Disables the link                                                                                                                                      | `boolean`                                    | `false`      |
| `linkHref`  | `link-href` | URL for the link                                                                                                                                       | `string`                                     | `undefined`  |
| `rel`       | `rel`       | 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. | `string`                                     | `'noopener'` |
| `target`    | `target`    | Where to open the linked URL                                                                                                                           | `"_blank" \| "_parent" \| "_self" \| "_top"` | `'_self'`    |
| `underline` | `underline` | Displays the link with an underline.                                                                                                                   | `boolean`                                    | `true`       |


## Dependencies

### Used by

 - [sdds-banner](../banner)

### Graph
```mermaid
graph TD;
  sdds-banner --> sdds-link
  style sdds-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*