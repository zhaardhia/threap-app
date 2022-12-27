/**
 * @TODO: Define all the actions (creator) for the talks state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const ActionType = {
  RECEIVE_FORUMS: 'RECEIVE_FORUMS',
  ADD_FORUM: 'ADD_FORUM',
  // TODO: VOTE AND UNVOTE
  // VOTE: 'TOGGLE_LIKE_TALK',
};

function receiveForumsActionCreator(forums) {
  return {
    type: ActionType.RECEIVE_FORUMS,
    payload: {
      forums,
    },
  };
}

function addForumActionCreator(forum) {
  return {
    type: ActionType.ADD_FORUM,
    payload: {
      forum,
    },
  };
}

// function toggleLikeTalkActionCreator({ talkId, userId }) {
//   return {
//     type: ActionType.TOGGLE_LIKE_TALK,
//     payload: {
//       talkId,
//       userId,
//     },
//   };
// }

function asyncAddForum({ title, body, category = '' }) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const forum = await api.createThread({ title, body, category });
      dispatch(addForumActionCreator(forum));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

// function asyncToogleLikeTalk(talkId) {
//   return async (dispatch, getState) => {
//     const { authUser } = getState();
//     dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
//     dispatch(showLoading());
//     try {
//       await api.toggleLikeTalk(talkId);
//     } catch (error) {
//       alert(error.message);
//       dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
//     }
//     dispatch(hideLoading());
//   };
// }

export {
  ActionType,
  receiveForumsActionCreator,
  addForumActionCreator,
  // toggleLikeTalkActionCreator,
  asyncAddForum,
  // asyncToogleLikeTalk,
};
