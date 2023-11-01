# SDDS Icons package

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

1. **Migrate to an alternative package**: We strongly encourage you to transition to one of the recommended alternatives mentioned above by following their documentation and migration guides on npm, [SDDS -> TDS migration guide](https://tegel.scania.com/development/migration) and [Tegel installation](https://tegel.scania.com/development/getting-started-development/installation) on the official Tegel website.

2. **Remove the deprecated package**: You can safely remove this package from your project once you have successfully migrated to an alternative solution.

**Thank You!**

We appreciate your support and use of this package. If you have any questions or need further assistance with the deprecation process or migration, feel free to reach out to us by [creating an issue](https://github.com/scania-digital-design-system/tegel/issues/new/choose) in our GitHub repository or contacting [Development support](https://teams.microsoft.com/l/channel/19%3a5e33f67fe502441f914fbcdc6e2548f5%40thread.skype/Development%2520support?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac) channel in Teams.

Again, thank you for being a part of our community, and we hope the recommended alternatives serve your needs effectively.

*Last Updated: October 23rd 2023

---


There are 2 options to use icons package. You can use it as a module or as a webfont. 

### 1. Use as a module with sdds-icon component

This is a good option if your application supports script bundling, and for example you need all resources to be offline or hosted in your own server. To install icons package as a module, install using [npm](https://www.npmjs.com/package/@scania/icons). 

```bash
npm i @scania/icons --save
```

The icons can be used with <sdds-icon> component from `@scania/components`. Make sure you have installed `@scania/components` in your application. The benefits of this method is that it will be dynamically loaded. This solution will enable module bundling tools such as webpack to do dynamic referencing only to the icons used in the application.

```html
<sdds-icon name="scania-truck"></sdds-icon>
```

### 2. Webfont

All icons are available as font icons. Import the font CSS from Scania CDN in your CSS or HTML.

```css
// in CSS
@import url('https://cdn.digitaldesign.scania.com/icons/dist/1.0.0/fonts/css/sdds-icons.css');
```

Or you can add it in the HTML inside `<head>`.

```html
<head>
    <link rel="stylesheet" href="https://cdn.digitaldesign.scania.com/icons/dist/1.0.0/fonts/css/sdds-icons.css">
</head>
```

Then, you can use it as a class in your element. Do not forget to add 'sdds-icon' class before the icon name.

```html
<i class="sdds-icon scania-arrow"></i>
```

Scania icons webfont is also available in the distribution of `@scania/icons` package. If you do not want to connect to Tegel Digital Design CDN, or, you want to go fully offline, you can use this solution. To be able to use it, you can refer to the CSS which is available under `node_modules/@scania/icons`

```html
<head>
    <link rel="stylesheet" href="node_modules/@scania/icons/dist/fonts/css/sdds-icons.css">
</head>
```