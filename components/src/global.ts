import store from './store';

// Polyfill for CustomEvent
(function () {
  if (typeof (<any>window).CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  CustomEvent.prototype = (<any>window).Event.prototype;

  (<any>window).CustomEvent = CustomEvent;
})();

const detail = { store };
const event = new CustomEvent('storeReady', { detail });
const icons = {};
const fa_icons = {};
const defaultTheme = { light: { icons: {}, components: {}, colors: {} } };

// FIXME: We don't use FA_icons
Object.keys(fa_icons).map((key) => {
  const item = fa_icons[key];
  // TODO: Would like to combine these two rows somehow...
  const [width, height, attrs, unicode, definition] = item.icon;
  icons[item.iconName] = {
    width,
    height,
    attrs,
    unicode,
    definition,
  };
});

(<any>window).CorporateUi = { ...(<any>window).CorporateUi, ...detail };

const newValue = store.get('theme');

newValue.items['light'] = defaultTheme.light;

store.set('theme', newValue);

document.dispatchEvent(event);

(<any>window).CorporateUi.storeReady = true;
