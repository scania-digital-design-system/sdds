# From Corporate UI to SDDS

Bootstrap was a core technology in Corporate UI solution. In SDDS, we have decided to move away from Bootstrap and build everything from scratch. The reason is, there are too many overrides we need to apply on top of Bootstrap to make it looks like Scania UI. Building everything from scratch provide more flexibility and control over sdds solution.

### Migrating from Corporate UI to SDDS

If your current application use Corporate UI 4, and you want to upgrade your UI to follow the latest sdds solution, you don't have to worry. You can do upgrade to your UI gradually following our releases. All components that previously available in Corporate UI will be replaced by new UI and we will do gradual releases for those components.
We provide a css file that can help you maintain the UI of the components that has not been released yet.

### Breaking changes

1. Bootstrap 4 CSS and JS have been removed from sdds solution. See step by step **how to do migration** below.

2. Base unit has been changed 4px. It means 1rem = 4px. If you use rem in your application, make sure to upgrade the value. For components from Corporate UI 4, all global-style values have been adjusted. You can apply new values by importing global-style.css in your application..

### How to do migration from Corporate UI to sdds:

1. Install sdds components and theme (Installation process is the same as Corporate UI 4)
   
   ```shell
   npm i @scania/components @scania/theme-light --save
   ```

2. Remove corporate ui from your package dependency

   ```shell
   npm uninstall corporate-ui
   npm uninstall scania-theme
   ```

3. Update components and theme import to the new package

   ```js
   import { defineCustomElements, addTheme } from '@scania/components';
   import { theme as scania } from '@scania/theme-light';
   ```

4. We are not providing Bootstrap 4 CSS and JS anymore. Import them separately from [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/). Either by using `<link>` in the head, or import package in your application. You need to add both Bootstrap CSS and JS.

5. Import a helper CSS called `global-style.css` from @scania/theme-light in your main css file, that will help retain the UI for old components. Make sure to import global-style after bootstrap.

   ```css
   @import 'bootstrap/dist/css/bootstrap';
   @import '@scania/theme-light/dist/styles/global-style';
   ```

6. Update components with the new sdds classess or replace with web component. All available components and how to add them, can be seen in https://tegel.scania.com/ . For example, you need to update button classes from Bootstrap to sdds.

   ```html
    <!-- Before -->
    <button type="button" class="btn btn-primary">Primary</button>

    <!-- After -->
    <button type="button" class="sdds-btn sdds-btn-primary">Primary</button>

   ```

Follow SDDS [Team's channel](https://teams.microsoft.com/l/team/19%3a1257007a64d44c64954acca27a9d4b46%40thread.skype/conversations?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac) for more component updates!




