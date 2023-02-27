# sdds-header

The header is a component that can be used to display a header on the page.

Example:

```html

  <sdds-header>
    <sdds-header-title>
      Example: default
    </sdds-header-title>

    <sdds-header-link href="https://www.scania.com" target="_blank">

    <sdds-header-launcher slot="end">
      <sdds-header-launcher-list-title>Cool apps</sdds-header-launcher-list-title>
      <sdds-header-launcher-list>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
      </sdds-header-launcher-list>
    </sdds-header-launcher>

    <sdds-header-logo slot="end" link-href="https://design.scania.com">
    </sdds-header-logo>

  </sdds-header-link>
  ```

## Header components API:
See [default header story](/info/components-headerv2--default).

## Side menu components API:
See [default header story](/info/components-headerv2--default).


<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
