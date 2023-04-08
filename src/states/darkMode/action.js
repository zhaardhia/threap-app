const ActionType = {
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
};

function toggleDarkModeActionCreator({ isTrue }) {
  console.log(isTrue);
  return {
    type: ActionType.TOGGLE_DARK_MODE,
    payload: {
      isTrue,
    },
  };
}

export {
  ActionType,
  toggleDarkModeActionCreator,
};
