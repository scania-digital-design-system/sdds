# Tegel Design System - Code conventions

Welcome to the code conventions section of Tegel, a comprehensive design system that aims to provide a unified and consistent visual language for all of your digital products. In this section, we'll cover the coding standards and conventions that are used to build and maintain Tegel components.

## General
 - Use camelCase for variables and functions.
 - Use PascalCase for classes and interfaces.
 - Use template literals instead of concatenation.
 - Use meaningful variable and function names: Name your variables and functions in a way that clearly communicates their purpose.
Avoid using single-letter variable names, instead of `i` for index, be descriptive and name the variable `index`.
 - Use single quotes (') for strings.


## Folder structure

All components are located in the `src/components` directory. Each component in this folder has a dedicated folder named as the
componenet minus the `sdds`-prefix. For our button the file path is `src/components/button`. This folder should have two subdirectories,
one for the web component and one for the HTML/CSS version of the component. For the `<sdds-button>` this is be
`src/components/button/web-component` and for the HTML/CSS version of this component it is `src/components/button/css-component`. Since
these components share some css variables, these are located in a scss file in the `src/components/button` directory. The name of the variables
file is 'component-name'-vars.scss (`button-vars.scss`).

### File naming

For all components that are pure HTML/CSS components their files should be prefixed with `css-`. This is to clearly separeate what files are part
of our web components and which are only used for HTML/CSS components. For our button the means that the styling related to the HTML/CSS version 
of our component the file name is `css-button.scss`. 

### Example - folder structure for button

```
├── src
│   ├── components
│   │   ├── button
│   │   │   ├──button-vars.scss
│   │   │   │
│   │   │   ├──web-component
│   │   │   │   ├──button.tsx
│   │   │   │   ├──button.scss
│   │   │   │
│   │   │   ├──css-component
│   │   │   │   ├──css-button.scss
```


## Component structure

Our component files (e.g. button.tsx) should follow the following structure, in order:

1. Props, state and variables
   - @Component decorator with the component specific arguments.
   - Host element for the component (@Element). 
   - Component props.
   - Component state.
   - Private variables.
2. Event, emitters and listeners
   - Events emitters (@Event).
   - Event listeners (@Listen)
3. Methods
   - Props and state watchers (@Watch)
   - Public methods (@Method)
   - Private methods
   - Lifecycle methods
   - Render method. 



### Example: 
```jsx
 
@Component({
  tag: 'sdds-component',
  styleUrl: 'sdds-component.scss',
  shadow: true,
})
export class SddsComponent {
  @Element() host: HostElement;

  /** Comment explaining the use of the the prop */
  @Prop() prop: string;
 
  /** Comment explaining the use of the the prop */
  @Prop() secondProp: string;

  @State() state: boolean;

  variable: string

  /** Comment explaining the event. */
  @Event({
    eventName: 'sddsEvent',
    composed: true ,
    cancelable: true,
    bubbles: true,
  })
  sddsEvent: EventEmitter<{}>;

  @Listen('sddsEvent', { target: 'body' })
  handleListener(){
  }

  @Watch('prop')
  handlePropChange(){
  }

  /** Comment explaining the method. */
  @Method()
  async handleComponent(){
  }

  handleClick(){
  }

  connectedCallback(){
  }

  componentWillLoad() {
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }
}

```

## Events
The tegel components emit custom events to allow the users to repond to changes/updates in the components. These are all named using the 
sdds-prefix. This is done in order to not have conflicting events and to make it clear to the user the specified event is something that is emitted
from a tegel component.

The events are named according to our naming convention: 'sdds' + event. For a click event this would result in the event being called `sddsClick`. 

### Internal events
Some of the component are using event to communicate with its parent/child. These events are not recommended to use in any way since
they might change without notice. Their payload might also be changed based on refactoring of components. These events are prefixed
with 'internal'. This is to make it as clear as possible to a user that this is an internal event that the components are using,
but the user should not interact with it. E.g. `internalSddsPropsChange`.

