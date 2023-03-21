<!-- TODO: add release -->
<!-- [![Github release](https://img.shields.io/npm/v/@scania/components?color=1081C2)](https://www.npmjs.com/package/@scania/components)
[![Github release](https://img.shields.io/github/v/release/scania-digital-design-system/sdds?color=1081C2)](https://github.com/scania-digital-design-system/sdds/releases) -->
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://img.shields.io/github/license/scania-digital-design-system/sdds)
[![Getting Started](https://img.shields.io/badge/Available%20components-tegel.scania.com-orange)](https://tegel.scania.com/getting-started/development)

# Tegel Design System - Components

**Technical documentation**

Check out [Tegel Design System](https://tegel.scania.com/) for implementation and technical documentation.


[comment]: <> (Needs to be updated once a stable version is released.)
## Installation
### React

#### with Typescript

1. Run `npm install @scania/tegel`
2. src folder create a file called `register-webcomponents.ts`
3. Paste the following into that file:
```ts
import { defineCustomElements, JSX as LocalJSX } from '@scania/tegel/loader';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type StencilProps<T> = {
    [P in keyof T]?: Omit<T[P], 'ref'> | HTMLAttributes<T>;
  };
  
  type ReactProps<T> = {
    [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
  };
  
  type StencilToReact<T = LocalJSX.IntrinsicElements, U = HTMLElementTagNameMap> = StencilProps<T> &
    ReactProps<U>;
  
  declare global {
    export namespace JSX {
      interface IntrinsicElements extends StencilToReact { }
    }
  }
  
defineCustomElements(window)
```
4. In your index.tsx import `register-webcomponents.ts`
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './register-webcomponents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```
5. In your global css file (usually `App.css`) import the tegel stylesheet.
```css
@import url('@scania/tegel/dist/tegel/tegel.css');
```

#### with Javascript
1. Run `npm install @scania/tegel`
2. In your index.jsx define the custom components:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {defineCustomElements} from '@scania/tegel/loader'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
defineCustomElements()
```
3. In your global css file (usually `App.css`) import the tegel stylesheet.
```css
@import url('@scania/tegel/dist/tegel/tegel.css');
```

### Angular

1. Run `npm install @scania/tegel`
2. In your `main.ts` import and call the function `defineCustomElements()`:

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import  { defineCustomElements } from '@scania/tegel/loader'
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineCustomElements(window);
```
3. In your `app.module.ts` import `CUSTOM_ELEMENTS_SCHEMA`:
```ts
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```
4. In your global css file (`styles.css`) import the tegel stylesheet.
```css
@import url('@scania/tegel/dist/tegel/tegel.css');
```

### HTML

1. Run `npm init` to generate a package.json
2. Run `npm install @scania/tegel`
3. Import the package and its style in your `<head>`:
```html
 <script type="module">
        import { defineCustomElements } from "./node_modules/@scania/tegel/loader/index.es2017.js";
        defineCustomElements();
</script>
<link rel="stylesheet" href="./node_modules/@scania/tegel/dist/tegel/tegel.css">
```




See all available components in the [Tegel Design System](https://tegel.scania.com/components/overview).

## Events

The tegel components emit custom events to allow the users to repond to changes/updates in the components. These are all named using the 
sdds-prefix. This is done in order to not have conflicting events and to make it clear to the user the specified event is something that is emitted
from a tegel component.

The events are named according to our naming convention: 'sdds' + event.
For a click event this would result in the event being called `sddsClick`. To listen for these events in vanilla JS the event name
should be passed to the `addEventListener` function as the first argument:
```javascript
document.addEventListener('sddsClick', (event) => {
  // Do something with/based on the event.
})
```

In React these events needs to be listened to by adding an event listener to the element that emits the event. This can be easily done by
grabbing a reference to the element and adding the event listener inline:

This solution is a workaround based on how React handles events, you can read more on this [here.](https://reactjs.org/docs/events.html)

```jsx
<sdds-textfield
  ref={element => element.addEventListener('sddsClick', (event) => {
    {/* Do something with/based on the event. */}
    })
  }
  >
</sdds-textfield>
```

In other JSX-enviroments (apart from React) these events can be listened to by prefixing them with an `on` directly on the component:
```jsx
<sdds-textfield
  onSddsChange={(event) => {/* Do something with/based on the event. */}}
  >

</sdds-textfield>
```


What is attached to the event object is highlighted in our storybook. Under the docs tab of each component the events are outlined,
inluding what data is passed with the event to the user.

### Internal events

Some of the component are using event to communicate with its parent/child. These events are not recommended to use in any way since
they might change without notice. Their payload might also be changed based on refactoring of components. These events are prefixed
with 'internal'. This is to make it as clear as possible to a user that this is an internal event that the components are using,
but the user should not interact with it. E.g. `internalSddsPropsChange`.

## Browser support

See the browser support section on [the Tegel website](https://tegel.scania.com/development/getting-started-development/introduction#browser-support).

## Contributing

Please read through our [contributing guidelines](https://github.com/scania-digital-design-system/sdds/blob/master/CONTRIBUTING.md) for the directions to **develop components**, **create a pull request** and **coding standard**.

- [Report bug](https://github.com/scania-digital-design-system/sdds/issues)
- [Request feature](https://github.com/scania-digital-design-system/sdds/issues/new)


## Code conventions

TODO - Needs the correct link.
The code conventions used in (and enforced by) Tegel is documented [here](www.TBD.se).

### Setting up the development environment

1. Make sure you are using the required node.js version specified in `tegel/package.json` (node 16 at the time of writing).
2. Run `npm install` in the /tegel directory.
3. Create a `.env` file in the /tegel directory with the following contents:

  ```
  STORYBOOK_ENV=development
  ```
4. Make sure you are in the /tegel directory, and start the dev server with `npm run tegel`.

## Community

Get in touch with the team and the community:

- [Teams](https://teams.microsoft.com/l/team/19%3a1257007a64d44c64954acca27a9d4b46%40thread.skype/conversations?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac)

## License

All CSS, HTML and JS code are available under the MIT license. The Scania brand identity, logos and photographs found in this repository are copyrighted Scania CV AB and are not available on an open source basis or to be used as examples or in any other way, if not specifically ordered by Scania CV AB.
