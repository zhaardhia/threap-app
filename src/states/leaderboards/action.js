import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const ActionType = {
  GET_LEADERBOARDS: 'GET_LEADERBOARDS',
};

function getLeaderBoardsActionCreator(leaderboards) {
  return {
    type: ActionType.GET_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncGetLeaderBoardsActionCreator() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.seeLeaderboards();
      console.log(leaderboards);
      dispatch(getLeaderBoardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  getLeaderBoardsActionCreator,
  asyncGetLeaderBoardsActionCreator,
};
