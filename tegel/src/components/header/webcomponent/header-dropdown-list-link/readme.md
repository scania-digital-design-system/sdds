# sdds-header-dropdown-list-link

The header dropdown list link is a component that can be used to display a link in a header dropdown list.


<!-- Auto Generated Below -->


## Properties

| Property            | Attribute  | Description                                                                                                 | Type           | Default      |
| ------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| `download`          | `download` | Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. | `string`       | `undefined`  |
| `href` _(required)_ | `href`     | The link URL                                                                                                | `string`       | `undefined`  |
| `hreflang`          | `hreflang` | Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. | `string`       | `undefined`  |
| `rel`               | `rel`      | Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. | `string`       | `'noopener'` |
| `selected`          | `selected` | If the link should appear selected.                                                                         | `boolean`      | `false`      |
| `target`            | `target`   | Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. | `string`       | `undefined`  |
| `type`              | `type`     | The type of the list.                                                                                       | `"lg" \| "md"` | `'md'`       |


## Dependencies

### Used by

 - [sdds-header-launcher-list-link](../header-launcher-list-link)

### Graph
```mermaid
graph TD;
  sdds-header-launcher-list-link --> sdds-header-dropdown-list-link
  style sdds-header-dropdown-list-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
