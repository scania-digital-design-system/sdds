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


## Enforced lint rules:
- no-lonely-if: "off"
  - This rule disallows `if` statements as the only statement in `else` blocks of `if` statements. However, it is turned off in this configuration.
- indent: "off"
  - This rule enforces a consistent indentation style. However, it is turned off in this configuration.
- spaced-comment: "warn"
  - This rule enforces consistent spacing after the `//` or `/*` characters at the beginning or end of a comment. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- camelcase: "warn"
  - This rule enforces the use of camelcase when naming variables, objects, and functions. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- no-var: "warn"
  - This rule disallows the use of `var` and encourages the use of `let` or `const`. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- lines-between-class-members: "warn"
  - This rule enforces empty lines between class members. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- prefer-arrow-callback: "warn"
  - This rule enforces the use of arrow functions for callbacks when possible. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- arrow-body-style: "warn"
  - This rule enforces the use of curly braces for arrow function bodies when necessary. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- prefer-template: "warn"
  - This rule encourages the use of template literals instead of concatenation when possible. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- import/no-extraneous-dependencies: "off"
  - This rule disallows the import of external modules that are not declared in the package.json file's dependencies, devDependencies, or optionalDependencies object. However, it is turned off in this configuration.
- import/prefer-default-export: "off"
  - This rule encourages the use of a default export when only one thing is being exported from a module. However, it is turned off in this configuration.
- no-underscore-dangle: "warn"
  - This rule disallows the use of underscores in variable and method names, except in specific situations. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- import/no-unresolved: "warn"
  - This rule disallows importing modules that cannot be resolved by the specified paths. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- no-return-assign: "warn"
  - This rule disallows assignments in `return` statements. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- class-methods-use-this: "warn"
  - This rule requires the use of `this` in class methods that use the class instance. It is set to warn, meaning it will not cause the build to fail but will still generate a warning.
- array-callback-return: ["warn", { "checkForEach": false }]
  - This rule requires a `return` statement in array methods such as `map`, `filter`, and `reduce
- "consistent-return": "warn"
  - This rule requires functions that have a return statement to always return a value of a consistent type.
- "no-unused-expressions": "warn"
  - This rule disallows unused expressions. This can help catch typos and other potential errors.
- "import/no-dynamic-require": "warn"
  - This rule disallows the use of dynamic require() calls, which can make it harder to analyze code and can be a security risk.
- "prefer-destructuring": "warn", // TODO: Turn this on?
  - This rule encourages the use of destructuring assignments whenever possible, as they can help make code more readable and maintainable.
- "object-shorthand": "warn"
  - This rule requires the use of shorthand syntax when defining object literals, which can help make code more concise and readable.
- "eqeqeq": "warn"
  - This rule requires the use of strict equality (=== and !==) instead of loose equality (== and !=), which can help avoid unexpected type coercion.
- "prefer-const": "warn"
  - This rule encourages the use of const instead of let or var for variables that are not reassigned, as it can help catch potential bugs and make code more readable.
- "no-empty-pattern": "warn"
  - This rule disallows empty destructuring patterns, which can help avoid potential errors and make code more readable.
- "import/newline-after-import": "warn"
  - This rule requires a newline after import statements, which can help make code more readable.
- "vars-on-top": "warn"
  - This rule requires all variable declarations to be at the top of their containing scope (e.g., at the top of a function or file), which can help avoid hoisting-related bugs.
- "no-shadow": "warn"
  - This rule disallows variable declarations that shadow an existing variable in an outer scope, which can help avoid potential bugs and make code more readable.
- "no-restricted-globals": "warn"
  - This rule disallows the use of specified global variables, which can help avoid potential security vulnerabilities and make code more maintainable.
- "no-prototype-builtins": "warn"
  - This rule disallows the use of certain Object.prototype methods, which can help avoid potential bugs and make code more maintainable.
- "no-useless-concat": "warn"
  - This rule disallows unnecessary string concatenation, which can help make code more efficient and readable.
- "no-unneeded-ternary": "warn"
  - This rule disallows unnecessary ternary expressions, which can help make code more concise and readable.
- "no-useless-escape": "warn"
  - This rule disallows unnecessary escape characters in string literals, which can help avoid potential bugs and make code more readable.
- "no-await-in-loop": "warn"
  - This rule disallows the use of await inside loops, which can help avoid potential performance issues and make code more maintainable.
- "curly": "warn"
  - This rule requires the use of curly braces for all control statements (e.g., if, else, while), which can help avoid potential bugs and make code more readable.
- "no-unused-vars": "warn"
  - This rule disallows unused variables, which can help catch typos and other potential errors.
- "no-nested-ternary": "warn"
  - This rule disallows nested ternary expressions, which can help make code more readable.
- "import/order": "warn"
  - This rule enforces a consistent ordering for import statements, which
- "no-restricted-syntax": "warn"
  - This rule is used to specify certain types of syntax that should be avoided, and warns when they are used. It can be configured to disable specific syntax like `for-in`, which can be error-prone.
- "default-case-last": "warn"
  - This rule requires that the `default` case of a `switch` statement comes after all other cases. This helps avoid accidental fall-throughs, where multiple cases are executed in sequence.
- "no-restricted-exports": "warn"
  - This rule is used to specify certain exports that should be avoided, and warns when they are used. For example, it can be used to disallow the use of certain functions or variables that are considered unsafe or deprecated.
- "radix": ["error", "as-needed"]
  - This rule requires that the `parseInt()` function always be called with a radix parameter, to avoid unexpected behavior when parsing strings to numbers. The `"as-needed"` option allows `parseInt()` to be called without a radix parameter only when the number is already in base 10.
- "no-use-before-define": "off"
  - This rule disallows the use of variables before they are defined, which can help catch common programming errors. However, it can also be overly strict in some cases, especially with function declarations. This option turns off the rule entirely.
- "no-console": "off"
  - This rule disallows the use of `console.log()` and other similar functions, which can help prevent debugging information from being included in production code. However, it can be useful during development and testing, so this option turns off the rule entirely.
- "no-undef": "off"
  - This rule warns when a variable or function is used without being defined, which can help catch typos and
- "function-paren-newline": "off"
  - This rule controls whether or not to enforce a newline between the function name and its parameters in function definitions. When set to "off", no newline is required.
- "dot-notation": "off"
  - This rule requires that object properties be accessed using dot notation whenever possible. When set to "off", the rule is disabled and bracket notation can be used instead.
- "no-plusplus": "off"
  - This rule prohibits the use of the increment and decrement operators. When set to "off", the rule is disabled and these operators can be used.
- "no-param-reassign": ["error", { "props": false }]
  - This rule prohibits reassigning function parameters. When set to ["error", { "props": false }], the rule is still enforced but allows for object properties to be reassigned.
