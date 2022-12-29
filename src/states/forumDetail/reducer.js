/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
import { ActionType } from './action';

function forumDetailReducer(forumDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_FORUM_DETAIL:
      return action.payload.forumDetail;
    case ActionType.COMMENT_FORUM:
      return { ...forumDetail, comments: [action.payload.commentForum, ...forumDetail?.comments] };
    default:
      return forumDetail;
  }
}

export default forumDetailReducer;
