import { ActionType } from './action';

function forumDetailReducer(forumDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_FORUM_DETAIL:
      return action.payload.forumDetail;
    case ActionType.COMMENT_FORUM:
      return action.payload.commentForum;
    default:
      return forumDetail;
  }
}

export default forumDetailReducer;
