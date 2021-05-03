# Scania Icons package

---

## Usage

The icons can be used with <sdds-icon> component from `@scania/components` or by importing it as a module. The benefits of these methods is that it will be dynamically loaded. This solution will enable module bundling tools such as webpack to do dynamic referencing only to the icons used in the application.
Other alternative is to use the font icons version, which will load all icons as a webfont.

1. Download package

```shell
npm i @scania/icons
```

2. Use with sdds-icon components from @scania/components

```html
<sdds-icon name="scania-truck">
</sdds-icon>
```

3. Use webfont

Import webfont css in your css file

```css
@import '@scania/icons/icons.css';
```

Use in html via classes

```html
<head>
  <link href="/your-path-to-sdds-icons/css/all.css" rel="stylesheet"> <!--load all styles -->
</head>
<i class="sdds-icon-truck"></i>
```
