import { store, actions } from './store';

// Polyfill for CustomEvent
(function () {
  if (typeof (<any>window).CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = (<any>window).Event.prototype;

  (<any>window).CustomEvent = CustomEvent;
}());


const detail = { store, actions };
const event = new CustomEvent('storeReady', { detail });
const icons = {};
const fa_icons = {};
const defaultTheme = { default: { icons: {}, components: {}, colors: {} } };

Object.keys(fa_icons).map(key => {
  const item = fa_icons[key];
  // TODO: Would like to combine these two rows somehow...
  const [width, height, attrs, unicode, definition] = item.icon;
  icons[item.iconName] = {
    width, height, attrs, unicode, definition,
  };
});

defaultTheme.default.icons = icons;

(<any>window).CorporateUi = { ...(<any>window).CorporateUi, ...detail };

store.dispatch({ type: actions.ADD_THEME, theme: defaultTheme });

document.dispatchEvent(event);

(<any>window).CorporateUi.storeReady = true;
