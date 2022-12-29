const ActionType = {
  TOGGLE_MODAL_THREAD: 'TOGGLE_MODAL_THREAD',
};

function toggleModalThreadActionCreator({ isOpen }) {
  return {
    type: ActionType.TOGGLE_MODAL_THREAD,
    payload: {
      isOpen,
    },
  };
}

export {
  ActionType,
  toggleModalThreadActionCreator,
};
