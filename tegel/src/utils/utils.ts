import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import parserHtml from 'prettier/parser-html';
import { Options } from 'prettier';

const prettierOptions: Options = {
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 100,
};

export const formatHtmlPreview = (htmlStr) =>
  prettier.format(htmlStr, {
    parser: 'html',
    plugins: [parserBabel, parserHtml],
    ...prettierOptions,
  });

export function demoFormat(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

/** reference: https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/helpers.ts#L346
 *
 * Appends a hidden input element to allow the component
 * work within and get picked up by a <form>.
 * @param element The element on which the input with be appended.
 * @param name Name of the input.
 * @param value The value of the input.
 * @param disabled Disables the input if true.
 * @param additionalAttributes Additional attributes that should be passed to the input.
 */
export const appendHiddenInput = (
  element: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean,
  additionalAttributes: Array<{ key: string; value: string }>,
) => {
  const input = element.ownerDocument!.createElement('input');
  input.type = 'hidden';
  element.appendChild(input);
  input.disabled = disabled;
  input.name = name;
  input.value = value || '';
  if (additionalAttributes) {
    additionalAttributes.forEach((attr) => input.setAttribute(attr.key, attr.value));
  }
};

export type Attributes = { [key: string]: any };

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (el: HTMLElement, attributes: string[] = []) => {
  const attributeObject: Attributes = {};

  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
};

/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */
const ariaAttributes = [
  'role',
  'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-braillelabel',
  'aria-brailleroledescription',
  'aria-busy',
  'aria-checked',
  'aria-colcount',
  'aria-colindex',
  'aria-colindextext',
  'aria-colspan',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-description',
  'aria-details',
  'aria-disabled',
  'aria-errormessage',
  'aria-expanded',
  'aria-flowto',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-placeholder',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-roledescription',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowindextext',
  'aria-rowspan',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
];

/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 * @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
 * Use this in instances where we manually specify aria attributes on the `<Host>` element.
 */
export const inheritAriaAttributes = (el: HTMLElement, ignoreList?: string[]) => {
  let attributesToInherit = ariaAttributes;
  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter((attr) => !ignoreList.includes(attr));
  }
  return inheritAttributes(el, attributesToInherit);
};

/**
 * Recursively finds the first matching element or child based on a provided condition.
 *
 * @param {HTMLElement} element - The starting element to search from.
 * @param {(el: HTMLElement) => boolean} searchPredicate - The condition to match the element, receives an HTMLElement and returns a boolean.
 * @returns {HTMLElement | null} - The first matching element or child, or null if none is found.
 */
export function dfs(
  element: HTMLElement,
  searchPredicate: (el: HTMLElement) => boolean,
): HTMLElement | null {
  if (searchPredicate(element)) {
    return element;
  }

  const childElements =
    element instanceof HTMLSlotElement
      ? element.assignedElements({ flatten: true })
      : Array.from(element.children);

  let foundElement: HTMLElement | null = null;
  childElements.some((child: HTMLElement) => {
    foundElement = dfs(child, searchPredicate);
    return foundElement !== null;
  });

  return foundElement;
}

// A higher-order function to find the nested child of siblings matching a predicate,
// based on a sibling traversal function (getNextSibling or getPreviousSibling).
function getNestedChildOfSiblingsMatching(
  element: HTMLElement,
  searchPredicate: (el: HTMLElement) => boolean,
  siblingTraversalFn: (el: HTMLElement) => HTMLElement | null,
): HTMLElement | null {
  // Start with the sibling of the provided element.
  let sibling = siblingTraversalFn(element);

  // Iterate through the siblings until there are no more siblings.
  while (sibling) {
    // Use the dfs helper function to find the deeply nested child
    // that matches the given criteria within the current sibling.
    const nestedChild = dfs(sibling, searchPredicate);

    // If a matching deeply nested child is found, return it.
    if (nestedChild) {
      return nestedChild;
    }

    // Move on to the next sibling.
    sibling = siblingTraversalFn(sibling);
  }

  // If no matching deeply nested child is found, return null.
  return null;
}

// Functions to get the next and previous sibling elements.
const getNextSibling = (element: HTMLElement) => element.nextElementSibling as HTMLElement;
const getPreviousSibling = (element: HTMLElement) => element.previousElementSibling as HTMLElement;

/**
 * Searches for a next sibling element that has a nested child element matching the provided search predicate.
 * The search starts from the given element and proceeds to its next siblings, diving deep into each sibling's descendants.
 *
 * @param {HTMLElement} element - The starting element to begin the search from.
 * @param {(el: HTMLElement) => boolean} searchPredicate - A predicate function that checks if an element matches the desired condition.
 * @returns {HTMLElement | null} - The matching nested child element, or null if no matching element is found.
 *
 * @example
 * // HTML structure:
 * // <div>
 * //   <h1>Heading 1</h1>
 * //   <ul role="list">
 * //     <li>Item 1</li>
 * //   </ul>
 * // </div>
 * // <div>
 * //   <h2>Heading 2</h2>
 * //   <ul role="list">
 * //     <li>Item 2</li>
 * //   </ul>
 * // </div>
 *
 * const searchPredicate = (el) => el.tagName.toLowerCase() === 'h2';
 * const startingElement = document.querySelector('[role="list"]');
 * const headingEl = getNextNestedChildOfSiblingsMatching(startingElement, searchPredicate);
 * console.log(headingEl); // Logs the <h2>Heading 2</h2> element
 */
export const getNextNestedChildOfSiblingsMatching = (
  element: HTMLElement,
  searchPredicate: (el: HTMLElement) => boolean,
) => getNestedChildOfSiblingsMatching(element, searchPredicate, getNextSibling);

/**
 * Searches for a previous sibling element that has a nested child element matching the provided search predicate.
 * The search starts from the given element and proceeds to its previous siblings, diving deep into each sibling's descendants.
 *
 * @param {HTMLElement} element - The starting element to begin the search from.
 * @param {(el: HTMLElement) => boolean} searchPredicate - A predicate function that checks if an element matches the desired condition.
 * @returns {HTMLElement | null} - The matching nested child element, or null if no matching element is found.
 *
 * @example
 * // HTML structure:
 * // <div>
 * //   <h1>Heading 1</h1>
 * //   <ul role="list">
 * //     <li>Item 1</li>
 * //   </ul>
 * // </div>
 * // <div>
 * //   <h2>Heading 2</h2>
 * //   <ul role="list">
 * //     <li>Item 2</li>
 * //   </ul>
 * // </div>
 *
 * const searchPredicate = (el) => el.tagName.toLowerCase() === 'h2';
 * const startingElement = document.querySelector('[role="list"]');
 * const headingEl = getPreviousNestedChildOfSiblingsMatching(startingElement, searchPredicate);
 * console.log(headingEl); // Logs the <h2>Heading 2</h2> element
 */
export const getPreviousNestedChildOfSiblingsMatching = (
  element: HTMLElement,
  searchPredicate: (el: HTMLElement) => boolean,
) => getNestedChildOfSiblingsMatching(element, searchPredicate, getPreviousSibling);

/**
 * Checks if the given element is a heading element (h1-h6) or has a role of "heading".
 *
 * @param {HTMLElement} el - The element to check.
 * @returns {boolean} - True if the element is a heading element, false otherwise.
 */
export const isHeadingElement = (el: HTMLElement) => {
  const tagName = el.tagName.toLowerCase();
  const role = el.getAttribute('role');
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName) || role === 'heading';
};

/**
 * Loop through the children and add the 'listitem' role if needed.
 * @param {Node} targetNode The node being updated.
 * */
export const updateListChildrenRoles = (targetNode: Node): void => {
  targetNode.childNodes.forEach((node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      if (element.tagName.toLowerCase() !== 'li' && element.getAttribute('role') !== 'listitem') {
        element.setAttribute('role', 'listitem');
      }
    }
  });
};
