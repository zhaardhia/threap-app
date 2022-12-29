import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const ActionType = {
  RECEIVE_FORUM_DETAIL: 'RECEIVE_FORUM_DETAIL',
  COMMENT_FORUM: 'COMMENT_FORUM',
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

// function toggleLikeTalkDetailActionCreator(userId) {
//   return {
//     type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
//     payload: {
//       userId,
//     },
//   };
// }

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

function asyncAddCommentForum({ threadId, content }) {
  console.log(threadId, content);
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ threadId, content });
      console.log({ comment });
      dispatch(addCommentForumActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

// function asyncToogleLikeTalkDetail() {
//   return async (dispatch, getState) => {
//     const { authUser, talkDetail } = getState();
//     dispatch(toggleLikeTalkDetailActionCreator(authUser.id));
//     dispatch(showLoading());
//     try {
//       await api.toggleLikeTalk(talkDetail.id);
//     } catch (error) {
//       alert(error.message);
//     }
//     dispatch(hideLoading());
//   };
// }

export {
  ActionType,
  receiveForumDetailActionCreator,
  addCommentForumActionCreator,
  asyncReceiveForumDetail,
  asyncAddCommentForum,
};
