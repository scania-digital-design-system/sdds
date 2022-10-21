export function themeStyle(currentTheme, tagName, styleThis, el) {
  /*
    Helper function that will appened a stylesheet with scoped styling for specific component
    either in the shadowRoot with adoptedStyleSheet API
    or with a fallback method (IE,Old edge and so on)
  */

  let style;

  const css =
    currentTheme && currentTheme.components[tagName]
      ? currentTheme.components[tagName]
      : '';

  // Fallback for currentTheme, initially empty or the currentTheme doesn't contain a version property
  if (!currentTheme || !currentTheme.version || !styleThis) {
    return;
  }

  // If the browser has support for adoptedStyleSheet (Chromium)
  if (el.shadowRoot.adoptedStyleSheets) {
    style = new CSSStyleSheet();
    style.replaceSync(css);
    // TODO: We should not take first index we should all except the previous style
    el.shadowRoot.adoptedStyleSheets = [
      el.shadowRoot.adoptedStyleSheets[0],
      style,
    ];
  } else {
    // Fallback for browsers without adoptedStyleSheet API suppport
    const node = el.shadowRoot || el;
    style = el.querySelector('#themeStyle') || document.createElement('style');
    // style.appendChild(document.createTextNode(css));
    // style.innerHTML = css;
    style.id = 'themeStyle';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    if (!node.querySelector('#themeStyle')) {
      node.insertBefore(style, node.firstChild.nextSibling);
    }
  }
}
