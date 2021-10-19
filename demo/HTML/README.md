# HTML demo

To run this project locally you will need to NodeJS and npm.

See the running example on [this link](https://scania.github.io/corporate-ui-angular/).

## Scania Digital Design System

Visit our Design System at [digitaldesign.scania.com](https://digitaldesign.scania.com/) for more information

For more information about how to use SDDS, go to [digitaldesign.scania.com/getting-started/development](https://digitaldesign.scania.com/getting-started/development)

## Getting started

  Navigate to your project folder

  ```shell
  > npm install @scania/components --save-dev
  > npm install @scania/theme-light --save-dev
  ```

## Link the packages to your html document

  ```html
  <head>
    <script src="node_modules/@scania/theme-light/dist/light-theme.js"></script>
    <script src="node_modules/@scania/components/dist/core.js"></script>
  </head>
  ```

## Use Scania theme

  ```html
  <body>
    <sdds-theme></sdds-theme>
  </body>
  ```

## Add component in your html document

  ```html
  <body>
    <sdds-theme></sdds-theme>
    <sdds-dropdown placeholder="Select option">
      <sdds-dropdown-option value="option-1">Option 1</sdds-dropdown-option>
      <sdds-dropdown-option value="option-2">Option 2</sdds-dropdown-option>
      <sdds-dropdown-option value="option-3">Option 3</sdds-dropdown-option>
    </sdds-dropdown>
  </body>
  ```

## Install `http-server` globally on your computer.

  ```shell
  > npm install --global http-server
  ```


## Run `http-server` in the console emulator on sdds/demo/HTML folder level to test.
More settings on [http-server package page](https://www.npmjs.com/package/http-server).

## You can also download `Live Server` in the extensions if you are using Visual Studio Code

### Feel free to reach out about improvements

### *Happy coding!*
