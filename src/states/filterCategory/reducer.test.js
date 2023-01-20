/* eslint-disable max-len */
/**
 * test scenario for filterCategory
 *
 * - filterCategory function
 *  - should return the initial state when given by unknown action
 *  - should return the category when given by FILTER_CATEGORY action
 *  - should return the threads with the right category when given by FILTER_CATEGORY action
 *
 */

import filterCategory from './reducer';

describe('filterCategory function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = filterCategory(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the category when given by FILTER_CATEGORY action', () => {
    // arrange
    const forums = [];
    const action = {
      type: 'FILTER_CATEGORY',
      payload: {
        category: 'Testing',
      },
    };

    // action
    const nextState = filterCategory(forums, action);
    // assert
    expect(nextState).toEqual(action.payload.category);
  });

  it('should return the threads with the right category when given by FILTER_CATEGORY action', () => {
    // arrange
    const forums = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'Testing',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'FILTER_CATEGORY',
      payload: {
        category: 'Testing',
      },
    };

    // action
    const nextState = filterCategory(forums, action);
    const filtered = forums.filter((val) => val.category.toLowerCase() === nextState.toLowerCase());
    // assert
    expect(filtered).toEqual([{
      id: 'thread-2',
      title: 'Thread Kedua',
      body: 'Ini adalah thread kedua',
      category: 'Testing',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-2',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    }]);
  });
});
