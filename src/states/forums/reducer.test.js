/* eslint-disable max-len */
/**
 * test scenario for forumsReducer
 *
 * - forumsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_FORUMS action
 *  - should return the threads with the new thread when given by ADD_FORUM action
 *  - should return the threads with the thread liked by the user when given by UP_VOTE action
 *
 */

import forumsReducer from './reducer';

describe('forumsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = forumsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_FORUMS action', () => {
    // arrange
    const forums = [];
    const action = {
      type: 'RECEIVE_FORUMS',
      payload: {
        forums: [
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
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = forumsReducer(forums, action);
    // assert
    expect(nextState).toEqual(action.payload.forums);
  });

  it('should return the threads with the new thread when given by ADD_FORUM action', () => {
    // arrange
    const initialState = [
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
    ];

    const action = {
      type: 'ADD_FORUM',
      payload: {
        forum: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = forumsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.forum, ...initialState]);
  });

  it('should return the threads with the thread liked by the user when given by UP_VOTE action', () => {
    // arrange
    const initialState = [
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
    ];
    const downFilter = [];

    const action = {
      type: 'UP_VOTE',
      payload: {
        vote: {
          id: 'vote-1',
          userId: 'users-1',
          threadId: 'thread-1',
          voteType: 1,
        },
      },
    };

    // action: like talk
    const nextState = forumsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.vote.userId, ...initialState[0].upVotesBy],
        downVotesBy: [...downFilter],
      },
    ]);
  });
});
