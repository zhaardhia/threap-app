/* eslint-disable max-len */
/**
 * test scenario for filterCategory
 *
 * - filterCategory function
 *  - should return the initial state when given by unknown action
 *  - should return the category when given by FILTER_CATEGORY action
 *
 */

import getLeaderboardsReducer from './reducer';

describe('getLeaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = getLeaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the category when given by FILTER_CATEGORY action', () => {
    // arrange
    const leaderboards = [
      {
        user: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 10,
      },
      {
        user: {
          id: 'users-2',
          name: 'Jane Doe',
          email: 'jane@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 5,
      },
    ];
    const action = {
      type: 'GET_LEADERBOARDS',
      payload: {
        leaderboards,
      },
    };

    // action
    const nextState = getLeaderboardsReducer(leaderboards, action);
    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
