import { ActionType } from './action';

function modalThreadReducer(modal = false, action = {}) {
  switch (action.type) {
    case ActionType.TOGGLE_MODAL_THREAD:
      return action.payload.isOpen;
    default:
      return modal;
  }
}

export default modalThreadReducer;
