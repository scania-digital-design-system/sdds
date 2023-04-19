# sdds-side-menu

The side menu is a container for navigation items. It can be collapsed on desktop screens and opened and closed on mobile screens.

Example:

```html
<sdds-side-menu id="sidemenu" aria-label="Side menu">
  <sdds-side-menu-overlay slot="overlay" onclick="getElementById('sidemenu').open = false;"></sdds-side-menu-overlay>

  <sdds-side-menu-close-button slot="close-button" onclick="getElementById('sidemenu').open = false;"></sdds-side-menu-close-button>

  <sdds-side-menu-item>
    <button>
      <sdds-icon slot="icon" name="star" size="24"></sdds-icon>
      About us
    </button>
  </sdds-side-menu-item>

  <sdds-side-menu-item slot="end">
    <button>
      <sdds-side-menu-user heading="Name Namesson" subheading="Company name">
        <img
          slot="image"
          src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
          alt="User menu."
        />
      </sdds-side-menu-user>
    </button>
  </sdds-side-menu-item>
</sdds-side-menu>
```


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                     | Type      | Default |
| ------------ | ------------ | ------------------------------------------------------------------------------- | --------- | ------- |
| `collapsed`  | `collapsed`  | If the side menu is collapsed. Only a persistent desktop menu can be collapsed. | `boolean` | `false` |
| `open`       | `open`       | If the side menu is open or not.                                                | `boolean` | `false` |
| `persistent` | `persistent` | If the side menu should always be shown on desktop screens to the side.         | `boolean` | `false` |


## Events

| Event                   | Description                                     | Type                          |
| ----------------------- | ----------------------------------------------- | ----------------------------- |
| `sddsSideMenuCollapsed` | Broadcasts collapsed state to child components. | `CustomEvent<CollapsedEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
