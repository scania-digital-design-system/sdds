# sdds-accordion-item

```html
<sdds-accordion>
  <sdds-accordion-item header="First item" affix="prefix" tabindex="1">
    This is the panel, which contains associated information with the header.
    Usually it contains text, set in the same size as the header. Lorem ipsum
    doler sit amet.
  </sdds-accordion-item>
  <sdds-accordion-item
    header="Second item"
    affix="suffix"
    expanded="true"
    tabindex="2"
  >
    This is the panel, which contains associated information with the header.
    Usually it contains text, set in the same size as the header. Lorem ipsum
    doler sit amet.
  </sdds-accordion-item>
  <sdds-accordion-item
    header="Disabled item"
    affix="suffix"
    disabled="true"
    expanded="true"
    tabindex="-1"
  >
    This is the disabled panel, which contains associated information with the
    header. Usually it contains text, set in the same size as the header. Lorem
    ipsum doler sit amet.
  </sdds-accordion-item>
</sdds-accordion>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                          | Type      | Default    |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| `affix`    | `affix`    | Icon can be placed after or before accordion header. Values accepted: `prefix` or `suffix` Default value is `suffix` | `string`  | `'suffix'` |
| `disabled` | `disabled` | Disabled option in `boolean`.                                                                                        | `boolean` | `false`    |
| `expanded` | `expanded` | Set to true to expand panel open                                                                                     | `boolean` | `false`    |
| `header`   | `header`   | The header gives users the context about the additional information available inside the panel                       | `string`  | `''`       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
