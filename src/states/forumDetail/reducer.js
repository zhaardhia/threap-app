/* eslint-disable no-param-reassign */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
import { ActionType } from './action';

function forumDetailReducer(forumDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_FORUM_DETAIL:
      return action.payload.forumDetail;
    case ActionType.UP_VOTE:
      if (forumDetail.id === action.payload.vote.threadId) {
        const obj = { ...forumDetail };
        const downFilter = forumDetail.downVotesBy.filter((vote) => vote !== action.payload.vote.userId);

        obj.upVotesBy = [action.payload.vote.userId, ...forumDetail?.upVotesBy];
        obj.downVotesBy = [...downFilter];
        forumDetail = { ...obj };
      }
      return forumDetail;
    case ActionType.DOWN_VOTE:
      // return forumDetail.map((forum) => {
      if (forumDetail.id === action.payload.vote.threadId) {
        const obj = { ...forumDetail };
        const upFilter = forumDetail.upVotesBy.filter((vote) => vote !== action.payload.vote.userId);

        obj.upVotesBy = [...upFilter];
        obj.downVotesBy = [action.payload.vote.userId, ...forumDetail?.downVotesBy];
        forumDetail = { ...obj };
      }
      return forumDetail;
      // });
    case ActionType.NEUTRAL_VOTE:
      // return forumDetail.map((forum) => {
      if (forumDetail.id === action.payload.vote.threadId) {
        const obj = { ...forumDetail };
        const upFilter = forumDetail.upVotesBy.filter((vote) => vote !== action.payload.vote.userId);
        const downFilter = forumDetail.downVotesBy.filter((vote) => vote !== action.payload.vote.userId);

        obj.upVotesBy = [...upFilter];
        obj.downVotesBy = [...downFilter];
        forumDetail = { ...obj };
      }
      return forumDetail;
      // });
    case ActionType.COMMENT_FORUM:
      return { ...forumDetail, comments: [action.payload.commentForum, ...forumDetail?.comments] };
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...forumDetail,
        comments:
          forumDetail?.comments?.map((commentVal) => {
            if (commentVal.id === action.payload.vote.commentId) {
              const downFilter = commentVal.downVotesBy.filter((vote) => vote !== action.payload.vote.userId);
              return {
                ...commentVal,
                upVotesBy: [action.payload.vote.userId, ...commentVal.upVotesBy],
                downVotesBy: [...downFilter],
              };
            }
            return commentVal;
          }),
      };
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...forumDetail,
        comments:
          forumDetail?.comments?.map((commentVal) => {
            if (commentVal.id === action.payload.vote.commentId) {
              const upFilter = commentVal.upVotesBy.filter((vote) => vote !== action.payload.vote.userId);
              return {
                ...commentVal,
                downVotesBy: [action.payload.vote.userId, ...commentVal.upVotesBy],
                upVotesBy: [...upFilter],
              };
            }
            return commentVal;
          }),
      };
    case ActionType.NEUTRAL_VOTE_COMMENT:
      return {
        ...forumDetail,
        comments:
          forumDetail?.comments?.map((commentVal) => {
            if (commentVal.id === action.payload.vote.commentId) {
              const downFilter = commentVal.downVotesBy.filter((vote) => vote !== action.payload.vote.userId);
              const upFilter = commentVal.upVotesBy.filter((vote) => vote !== action.payload.vote.userId);

              return {
                ...commentVal,
                upVotesBy: [...upFilter],
                downVotesBy: [...downFilter],
              };
            }
            return commentVal;
          }),
      };
    default:
      return forumDetail;
  }
}

export default forumDetailReducer;
