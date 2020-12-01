# Scania Digital Design System - Typography package

---

This package contains both SCSS and CSS files available
- Scss available for import
- Css for classes and css variables for typograpjy

How to install with npm
```shell
> npm i @scania/typography
```
How to build
```shell
> npm run build
```

How to use

See all available tokens in digitaldesign.scania.com
```html

// style.scss
// you need to have sass compiler in your application
@import '@scania/typography';

.my-headline {
    @include type-style('token-name');
}

// OR
// use in HTML as a class
//.sdds-{token-name}
<p class=".sdds-headline-01"></p>
```




