# SDDS - Colour package

# Deprecation Notice

**This package has been deprecated and is no longer actively maintained.**

**Why is this package deprecated?**

This package has reached the end of its development lifecycle, and we have decided to discontinue active support and updates for it. We recommend that you consider alternative solutions for your project to ensure ongoing compatibility, security, and stability.

**Recommended Alternatives**

We suggest exploring the Tegel Design System, which is the successor of SDDS and is actively maintained:

- [@scania/tegel](https://www.npmjs.com/package/@scania/tegel): One package for the entire Tegel design system. Based on Web Components.
- [@scania/tegel-react](https://www.npmjs.com/package/@scania/tegel-react): Version of @scania/tegel that provides React component wrappers.
- [@scania/tegel-angular](https://www.npmjs.com/package/@scania/tegel-angular): Version of @scania/tegel that provides Angular component wrappers.

**What should you do now?**

1. **Migrate to an alternative package**: We strongly encourage you to transition to one of the recommended alternatives mentioned above by following their documentation and migration guides on npm or [official Tegel website](https://tegel.scania.com/development/getting-started-development/installation). 

2. **Remove the deprecated package**: You can safely remove this package from your project once you have successfully migrated to an alternative solution.

**Thank You!**

We appreciate your support and use of this package. If you have any questions or need further assistance with the deprecation process or migration, feel free to reach out to us by [creating an issue](https://github.com/scania-digital-design-system/tegel/issues/new/choose) in our GitHub repository or contacting [Development support](https://teams.microsoft.com/l/channel/19%3a5e33f67fe502441f914fbcdc6e2548f5%40thread.skype/Development%2520support?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac) channel in Teams.

Again, thank you for being a part of our community, and we hope the recommended alternatives serve your needs effectively.

*Last Updated: October 23rd 2023



---

This package contains both SCSS and CSS files available
- SCSS available for import in your sass development
- CSS classes for text and background
- CSS custom properties / CSS variables available through scania-theme

### How to install with npm

```shell
> npm i @scania/colour
```

### How to use

See all available tokens in [tegel.scania.com](https://tegel.scania.com/foundations/foundation-colors/specification)

```html
// style.scss
// you need to have sass compiler in your application
@import '~node_modules/@scania/colour/dist/scss/colour';

// use get-colour(token-name) function to get colour from Tegel colour scale
.my-div {
  color: get-colour(grey-500);
}

// OR
// use in HTML as a class
// property available: text and background
//.sdds-{property}-{token-name}
<p class="sdds-text-blue-900 sdds-background-grey-200">
  An example paragraph
</p>
```




