# sdds-link



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                       | Type                                         | Default               |
| ----------- | ----------- | ----------------------------------------------------------------- | -------------------------------------------- | --------------------- |
| `disabled`  | `disabled`  | Disables the link                                                 | `boolean`                                    | `false`               |
| `href`      | `href`      | URL for the link                                                  | `string`                                     | `undefined`           |
| `linkId`    | `link-id`   | ID for the link. Randomly generated if not specified.             | `string`                                     | `crypto.randomUUID()` |
| `rel`       | `rel`       | The relationship of the linked URL as space-separated link types. | `string`                                     | `'noopener'`          |
| `target`    | `target`    | Where to open the linked URL                                      | `"_blank" \| "_parent" \| "_self" \| "_top"` | `'_self'`             |
| `underline` | `underline` | Displays the link without an underline.                           | `boolean`                                    | `true`                |


## Events

| Event                  | Description                                              | Type                                         |
| ---------------------- | -------------------------------------------------------- | -------------------------------------------- |
| `sddsLinkClickedEvent` | Sends unique link identifier and href when it is clicked | `CustomEvent<{ href: string; id: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
