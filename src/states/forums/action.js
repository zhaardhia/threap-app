/**
 * @TODO: Define all the actions (creator) for the talks state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const ActionType = {
  RECEIVE_FORUMS: 'RECEIVE_FORUMS',
  ADD_FORUM: 'ADD_FORUM',
  // TODO: VOTE AND UNVOTE
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
  NEUTRAL_VOTE: 'NEUTRAL_VOTE',
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

function upVoteThread(vote) {
  return {
    type: ActionType.UP_VOTE,
    payload: {
      vote,
    },
  };
}

function downVoteThread(vote) {
  return {
    type: ActionType.DOWN_VOTE,
    payload: {
      vote,
    },
  };
}

function neutralizeVoteThread(vote) {
  return {
    type: ActionType.NEUTRAL_VOTE,
    payload: {
      vote,
    },
  };
}

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

function asyncUpVoteThread({ threadId }) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const vote = await api.upVoteThread(threadId);
      dispatch(upVoteThread(vote));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncDownVoteThread({ threadId }) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const vote = await api.downVoteThread(threadId);
      dispatch(downVoteThread(vote));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThread({ threadId }) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const vote = await api.neutralizeVoteThread(threadId);
      dispatch(neutralizeVoteThread(vote));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveForumsActionCreator,
  addForumActionCreator,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  asyncAddForum,
  // asyncToogleLikeTalk,
};
