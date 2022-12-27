import { ActionType } from './action';

function forumsReducer(forums = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_FORUMS:
      return action.payload.forums;
    case ActionType.ADD_FORUM:
      return [action.payload.forum, ...forums];
    // case ActionType.TOGGLE_LIKE_TALK:
    //   return talks.map((talk) => {
    //     if (talk.id === action.payload.talkId) {
    //       return {
    //         ...talk,
    //         likes: talk.likes.includes(action.payload.userId)
    //           ? talk.likes.filter((id) => id !== action.payload.userId)
    //           : talk.likes.concat([action.payload.userId]),
    //       };
    //     }
    //     return talk;
    //   });
    default:
      return forums;
  }
}

export default forumsReducer;
