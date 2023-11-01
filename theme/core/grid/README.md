# SDDS - Grid package

---

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

### Prerequisites

- Node v12+
- Npm 6+

This grid package contains both SCSS and CSS files available
- SCSS mixins to use grid in your SASS/SCSS development
- CSS with grid classes to easily use in application

### How to install with npm

```shell
> npm i @scania/grid
```

### How to use

See implementation in [Tegel Design System](https://tegel.scania.com/foundations/unit-grid-system)

```html

// Use with classes

<div class="sdds-container">
    <div class="sdds-row">
        <div class="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-8 sdds-col-md-8 sdds-col-sm-4"></div>
    </div>
</div>

```




