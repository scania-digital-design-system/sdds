import { createStore, combineReducers } from 'redux';

export const actions = {
  SET_THEME: 'SET_THEME',
  ADD_THEME: 'ADD_THEME',
  SET_GLOBAL: 'SET_GLOBAL',
  TOGGLE_NAVIGATION: 'TOGGLE_NAVIGATION',
  TOGGLE_SUB_NAVIGATION: 'TOGGLE_SUB_NAVIGATION',
};

export const store = createStore(reducers());

function theme(state = { current: 'default', global: false, items: {} }, action) {
  switch (action.type) {
    case actions.SET_THEME:
      return { ...state, current: action.current };
    case actions.SET_GLOBAL:
      return { ...state, global: action.global };
    case actions.ADD_THEME:
      return { ...state, items: { ...state.items, ...action.theme } };
    default:
      return state;
  }
}

function navigation(state = { open: true, expanded: undefined }, action) {
  switch (action.type) {
    case actions.TOGGLE_NAVIGATION:
      return { ...state, open: action.open };
    case actions.TOGGLE_SUB_NAVIGATION:
      return { ...state, expanded: action.expanded };
    default:
      return state;
  }
}

function reducers() {
  return combineReducers({
    theme,
    navigation,
  });
}
