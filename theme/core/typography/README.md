# Tegel Design System - Typography package

---

This package contains both SCSS and CSS files available
- SCSS available for import
- CSS classes to apply typography properties based on tokens
- CSS variables for font-family

### How to install with npm

```shell
> npm i @scania/typography
```

### How to use

See all available tokens in [Tegel Design System](https://tegel.scania.com/foundations/foundation-typography)

```html
// style.scss
// you need to have sass compiler in your application
@import '~node_modules/@scania/typography/dist/scss/mixins';
@import '~node_modules/@scania/typography/dist/scss/tokens';

// use Tegel mixin type-style(token-name) to add specific token properties
.my-headline {
    @include type-style('headline-01');
}

// Result for code above:
.my-headline {
  font-family: "Scania Sans Headline", Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 10rem;
  line-height: 10rem;
  letter-spacing: 0em;
}

// OR
// use in HTML as a class
//.sdds-{token-name}
<p class="sdds-headline-01">
  This is a headline
</p>
```




