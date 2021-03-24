# Simple HTML example

## Navigate to your project folder file using console emulator

    ```shell
    > npm install @scania/components
    > npm install @scania/theme-light
    ```

## Link the packages to your html document like this, depending on file structure

    ```html
    <script src="node_modules/@scania/theme-light/dist/light-theme.js"></script>
    <script src="node_modules/@scania/components/dist/core.js"></script>
    ```

## Add Scania theme inside the start of your body

    ```html
    <sdds-theme name="scania" global="true"></sdds-theme>
    ```

## Insert the components like shown in the index.html example, for example

    ```html
    <sdds-button type="primary" text="Button"></sdds-button>
    ```

## Install `http-start` globally on your computer.

    ```shell
    > npm i http-start -g
    ```


## Run `http-start` in the console emulator on sdds folder level to test.


## You can also download `Live Server` if you are using Visual Studio Code


### *Happy coding!*