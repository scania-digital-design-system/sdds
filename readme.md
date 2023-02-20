 ![GitHub release (latest by date)](https://img.shields.io/github/v/release/scania-digital-design-system/sdds) ![GitHub last commit](https://img.shields.io/github/last-commit/scania-digital-design-system/sdds)

# Tegel Design System

[https://tegel.scania.com/](https://tegel.scania.com/)

The design system supports the design and development of digital solutions at Scania. The purpose is to secure a coherent and premium brand and user experience across all of Scania's digital touchpoints.

- [Browser Support](#browser-support)
- [Getting started](#getting-started)
- [Framework demos](#framework-demos)
- [Local environment](#run-local-environment)
  - [Commands](#commands-to-start)
  - [Debugging local environment](#debugging-local-environment)
- [Migration](#migration)
- [Contributing](#contributing)

## Browser Support

- Chrome
- Firefox
- Safari
- Edge (chromium)

## Getting started

You can use Tegel CSS custom properties to use the design tokens for colour, typography, spacing, and logotype. To have all CSS custom properties available, you need to install both compoonents and scania-theme. And then you need to include `sdds-theme` component in your application. Check instruction below on how to install components and scania-theme.

- [How to install components](https://github.com/scania-digital-design-system/sdds/blob/master/components/readme.md)
- [How to install scania-theme](https://github.com/scania-digital-design-system/sdds/blob/master/theme/light/readme.md)

You can also install a standalone package for different part. These are available packages:

| Package Name                                    | Description                                         |
| ----------------------------------------------- | --------------------------------------------------- |
| [`@scania/components`](./components)            | Scania reusable web components built with StencilJS |
| [`@scania/theme-light`](./theme/light)          | Scania default theming                              |
| [`@scania/typography`](./theme/core/typography) | Scania official typography styling package          |
| [`@scania/colour`](./theme/core/colour)         | Scania official colour scale package                |
| [`@scania/grid`](./theme/core/grid)             | Scania official grid package                        |
| [`@scania/icons`](./theme/core/icons)           | Scania official pictograms & icons package          |

You can find everything in [NPM](https://www.npmjs.com/org/scania)

## Framework demos
Clone this repo to run framework demo applications locally. Demos are available Angular, React, Vue and HTML. Each application needs to be installed individually before use. Installing creates a `node_modules` directory with modules needed to run the application as they're listed in the `package.json`-file of each app directory.

Note 1: If you install and start from root level, you will access a local copy of Tegel UI library in Storybook.

Note 2: `npm start` not applicable for HTML demo 

```shell
> git clone https://github.com/scania-digital-design-system/sdds.git
> cd {app-directory}
> npm i
> npm start
```


## Run local environment

- You can run everything locally with storybook to view the UI elements.
- Start everything from root folder
- Everything we develop is published on public [npmjs.com](https://www.npmjs.com/search?q=%40scania)
- We are developing in both windows and macOS
- Components and Theme package will start watchers for the whole setup, and on top of that storybook will start
- Core packages don't have watchers (right now), so you have to build
- First time you run this project npm prepare command will install husky but also `npm run build`. To make sure everything is built for the first time
- Windows have some hiccups, right now. If you are using imports you need to **save the main file** where it is being imported
- If you add a new file, **make sure the rights are correct for both mac and windows**
- Find all commands in the root package.json or in each of our packages
- If any problem occurs, read the debug below or report them in our issue tab

##### Commands to start:

```shell
> npm i
> npm start
```

##### Debugging local environment

- Windows and MacOS behave differently
- If npm throws error either in `npm install` or `npm build` make sure network settings is correct\*\*
- Use `npm run build` first before `npm start`
- Try each commands on its own if a problem occurs
- Make sure you have the correct proxy settings \*\*
- Debug in the correct package if a problem occurs
- You can run each package separately
- Make sure the core packages are built
- Run node v12 or later
- if changes doesn't get display, save the main files if there are files related with imports

\*\* Proxy/network/vpn setting might interfere with the download process so make sure you have everything correctly set on your computer or try doing the commands outside office/vpn network

## Migration

You can find out how to migrate by reading our [`MIGRATION.md`](https://github.com/scania-digital-design-system/sdds/blob/master/MIGRATION.md) file in this repository.

If you are still using older component while migrate and still need the old documentation you can visit these links

- [Corporate-UI 3](https://cdn.digitaldesign.scania.com/old-docs/cui/index.html)
- [Corporate-UI 4](https://digitaldesign.devtest.aws.scania.com/)

## Contributing

This repository is a place for all Front End Developers to join the UI Development at Scania. It is us together that develop and maintain this repository as well as the documentation. Check out our [Contributing Guide](CONTRIBUTING.md) and help us improving the design system technical solution!
