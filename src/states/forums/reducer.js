/* eslint-disable max-len */
/* eslint-disable no-unsafe-optional-chaining */
import { ActionType } from './action';

function forumsReducer(forums = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_FORUMS:
      return action.payload.forums;
    case ActionType.ADD_FORUM:
      return [action.payload.forum, ...forums];
    case ActionType.UP_VOTE:
      return forums.map((forum) => {
        if (forum.id === action.payload.vote.threadId) {
          const downFilter = forum.downVotesBy.filter((vote) => vote !== action.payload.vote.userId);
          return {
            ...forum,
            upVotesBy: [action.payload.vote.userId, ...forum?.upVotesBy],
            downVotesBy: [...downFilter],
          };
        }
        return forum;
      });
    case ActionType.DOWN_VOTE:
      return forums.map((forum) => {
        if (forum.id === action.payload.vote.threadId) {
          const upFilter = forum.upVotesBy.filter((vote) => vote !== action.payload.vote.userId);
          return {
            ...forum,
            upVotesBy: [...upFilter],
            downVotesBy: [action.payload.vote.userId, ...forum?.downVotesBy],
          };
        }
        return forum;
      });
    case ActionType.NEUTRAL_VOTE:
      return forums.map((forum) => {
        if (forum.id === action.payload.vote.threadId) {
          const upFilter = forum.upVotesBy.filter((vote) => vote !== action.payload.vote.userId);
          const downFilter = forum.downVotesBy.filter((vote) => vote !== action.payload.vote.userId);
          return {
            ...forum,
            upVotesBy: [...upFilter],
            downVotesBy: [...downFilter],
          };
        }
        return forum;
      });
    default:
      return forums;
  }
}

export default forumsReducer;
