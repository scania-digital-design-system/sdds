# Badges


#### Good to know:
+ Please mind that in **With Demo Component** example there are `badges-demo-box`, `badges-demo--default` and `badges-demo--small` classes which are used just for presentation purposes. 
When integrating in own solution, please consider making own classes for correct position of badge component.

+ **Small size** represents just an indicator so value prop is useless in that case.

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                           | Type                | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------------------- | ------------------- | ----------- |
| `isSmall`   | `is-small`   | !!Deprecated!! Use size prop instead. Changes badge from default to small size        | `boolean`           | `false`     |
| `isVisible` | `is-visible` | Changes visibility of badge                                                           | `boolean`           | `true`      |
| `size`      | `size`       | Component is available in size default and small (small dot). Default size is default | `"default" \| "sm"` | `'default'` |
| `value`     | `value`      | Value shown in badge                                                                  | `number \| string`  | `0`         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
