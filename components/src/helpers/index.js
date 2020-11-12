
import { applyPolyfills, defineCustomElements as dce } from '../loader';
export { defineCustomElements, addTheme };

function defineCustomElements() {
  fixFouc();

  return applyPolyfills().then(() => dce());
}

function addTheme(_theme) {
  const { store, storeReady } = window.CorporateUi || {};

  if (storeReady) {
    return init(_theme, { detail: { store } });
  }

  // TODO: Maybe this event listener should be accesable from the theme itself?
  document.addEventListener('storeReady', event => init(_theme, event));

  function init(theme, event) {
    const name = Object.keys(theme)[0];
    const store = event.detail.store;
    // need to get store theme through get API to make it work in IE
    const storeTheme = store.get('theme');

    theme[name].components = document.head.attachShadow ? theme[name].components.default : theme[name].components.ie;
    
    storeTheme.items[name] = theme[name];

    store.set('theme', storeTheme);
    
  }
}

function fixFouc() {
  const elm = document.createElement('style');
  const style = document.createTextNode('body { visibility: hidden; }');

  document.head.insertBefore(elm, document.head.firstChild);
  elm.appendChild(style);

  document.addEventListener('DOMContentLoaded', () => {
    // This timeout is to make sure that IE has time to load
    setTimeout(() => {
      if(document.querySelector('c-theme')) return;

      // Used in case a theme element is not rendered
      style.nodeValue = 'body { visibility: visible; }';
    });
  })
}