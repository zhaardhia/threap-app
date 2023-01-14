import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const ActionType = {
  RECEIVE_FORUM_DETAIL: 'RECEIVE_FORUM_DETAIL',
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
  NEUTRAL_VOTE: 'NEUTRAL_VOTE',
  COMMENT_FORUM: 'COMMENT_FORUM',
  UP_VOTE_COMMENT: 'UP_VOTE',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE',
  NEUTRAL_VOTE_COMMENT: 'NEUTRAL_VOTE',
};

function receiveForumDetailActionCreator(forumDetail) {
  return {
    type: ActionType.RECEIVE_FORUM_DETAIL,
    payload: {
      forumDetail,
    },
  };
}

function addCommentForumActionCreator(commentForum) {
  return {
    type: ActionType.COMMENT_FORUM,
    payload: {
      commentForum,
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

function upVoteComment(vote) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      vote,
    },
  };
}

function downVoteComment(vote) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      vote,
    },
  };
}

function neutralizeVoteComment(vote) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT,
    payload: {
      vote,
    },
  };
}

function asyncReceiveForumDetail(threadId) {
  return async (dispatch) => {
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveForumDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThread({ threadId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.upVoteThread(threadId);
      dispatch(upVoteThread(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThread({ threadId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.downVoteThread(threadId);
      dispatch(downVoteThread(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThread({ threadId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.neutralizeVoteThread(threadId);
      dispatch(neutralizeVoteThread(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddCommentForum({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentForumActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment({ threadId, commentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.upVoteComment(threadId, commentId);
      dispatch(upVoteComment(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment({ threadId, commentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.downVoteComment(threadId, commentId);
      dispatch(downVoteComment(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteComment({ threadId, commentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.neutralizeVoteComment(threadId, commentId);
      dispatch(neutralizeVoteComment(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveForumDetailActionCreator,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  addCommentForumActionCreator,
  asyncReceiveForumDetail,
  asyncAddCommentForum,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};
