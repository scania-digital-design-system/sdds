# SDDS - Typography package

---

# Deprecation Notice

**This package has been deprecated and is no longer actively maintained.**

**Why is this package deprecated?**

This package has reached the end of its development lifecycle, and we have decided to discontinue active support and updates for it. We recommend that you consider alternative solutions for your project to ensure ongoing compatibility, security, and stability.

**Recommended Alternatives**

We suggest exploring the Tegel Design System, which is the successor of SDDS and is actively maintained:

- [@scania/tegel](https://www.npmjs.com/package/@scania/tegel): One package for the entire Tegel design system. Based on web components.
- [@scania/tegel-react](https://www.npmjs.com/package/@scania/tegel-react): Version of @scania/tegel that provides React component wrappers.
- [@scania/tegel-angular](https://www.npmjs.com/package/@scania/tegel-angular): Version of @scania/tegel that provides Angular component wrappers.

**What should you do now?**

1. **Migrate to an alternative package**: We strongly encourage you to transition to one of the recommended alternatives mentioned above by following their documentation and migration guides on npm, [SDDS -> TDS migration guide](https://tegel.scania.com/development/migration) and [Tegel installation](https://tegel.scania.com/development/getting-started-development/installation) on the official Tegel website.

2. **Remove the deprecated package**: You can safely remove this package from your project once you have successfully migrated to an alternative solution.

**Thank You!**

We appreciate your support and use of this package. If you have any questions or need further assistance with the deprecation process or migration, feel free to reach out to us by [creating an issue](https://github.com/scania-digital-design-system/tegel/issues/new/choose) in our GitHub repository or contacting [Development support](https://teams.microsoft.com/l/channel/19%3a5e33f67fe502441f914fbcdc6e2548f5%40thread.skype/Development%2520support?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac) channel in Teams.

Again, thank you for being a part of our community, and we hope the recommended alternatives serve your needs effectively.

*Last Updated: October 23rd 2023

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




