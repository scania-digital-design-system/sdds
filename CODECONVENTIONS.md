# Tegel Design System - Code conventions

Welcome to the code conventions section of Tegel, a comprehensive design system that aims to provide a unified and consistent visual language for all of your digital products. In this section, we'll cover the coding standards and conventions that are used to build and maintain Tegel components.

## Component structure

Our component files (e.g. accordion.tsx) should all follow the following structure:

 - @Component decorator with the component specific arguments.
 - Component props.
 - Component state.
 - Component host/parent/child element(s).
 - Component variables.
 - Component methods that are exposed on the component (@Method)
 - Events that are emitted from the component. 
 - Event listeners (@Listen)
 - Lifecycle methods (connectedCallback, componentWillLoad, componentDidRender, etc)
 - Methods that are used within the component.
 - Render method.

### Example: 

```jsx
 
@Component({
  tag: 'sdds-component',
  styleUrl: 'sdds-component.scss',
  shadow: true,
})
export class SddsComponent {
  /** Comment explaning  the use of the the prop */
  @Prop() prop: string;
 
 /** Comment explaning  the use of the the prop */
  @Prop() secondProp: string;

  @State() state: boolean;

  @Element() host: HostElement;

  parentElement: HTMLSddsComponentParentElement;

  /** Comment explaning the method. */
  @Method()
  async handleComponent(){
  }

  /** Comment explaning the event. */
  @Event({
    eventName: 'sddsEvent',
    composed: true ,
    cancelable: true,
    bubbles: true,
  })
  sddsEvent: EventEmitter<{}>;

  @Listen('sddsEvent', { target: 'body' })
  handleListener(){}

  connectedCallback(){
  }

  componentWillLoad() {
  }

  handleClick(){}

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

In other JSX-environments (apart from React) these events can be listened to by prefixing them with an `on` directly on the component:
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

