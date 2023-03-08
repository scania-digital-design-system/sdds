# Tegel Design System - Code conventions

Welcome to the code conventions section of Tegel, a comprehensive design system that aims to provide a unified and consistent visual language for all of your digital products. In this section, we'll cover the coding standards and conventions that are used to build and maintain Tegel components.

## General
 - Use camelCase for variables and functions.
 - Use PascalCase for classes and interfaces.
 - Use template literals instead of concatenation.
 - Use meaningful variable and function names: Name your variables and functions in a way that clearly communicates their purpose.
Avoid using single-letter variable names, index stead of `i` for index, be descriptive and name the variable `index`.
 - Use single quotes (') for strings.

## Component structure
Our component files (e.g. accordion.tsx) should follow the following structure, in order:

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

  /** Comment explaning  the use of the the prop */
  @Prop() prop: string;
 
 /** Comment explaning  the use of the the prop */
  @Prop() secondProp: string;

  @State() state: boolean;

  variable: string

  /** Comment explaning the event. */
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

    /** Comment explaning the method. */
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

