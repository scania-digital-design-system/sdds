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
 * @param attributes Other attributes that should be passed to the input.
 */
export const appendHiddenInput = (
  element: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean,
  attributes: Array<{ key: string; value: string }>,
) => {
  const input = element.ownerDocument!.createElement('input');
  input.type = 'hidden';
  element.appendChild(input);
  input.disabled = disabled;
  input.name = name;
  input.value = value || '';
  if (attributes) {
    attributes.forEach((attr) => input.setAttribute(attr.key, attr.value));
  }
};
