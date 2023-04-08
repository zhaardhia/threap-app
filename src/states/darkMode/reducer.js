import { ActionType } from './action';

function darkModeReducer(darkMode = false, action = {}) {
  switch (action.type) {
    case ActionType.TOGGLE_DARK_MODE:
      return action.payload.isTrue;
    default:
      return darkMode;
  }
}

export default darkModeReducer;
