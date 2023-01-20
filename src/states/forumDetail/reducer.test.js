/* eslint-disable max-len */
/**
 * test scenario for forumDetailReducer
 *
 * - forumDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_FORUM_DETAIL action
 *  - should return the threads with the thread voted by the user when given by UP_VOTE_THREAD action
 *
 */

import forumDetailReducer from './reducer';

describe('forumDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = forumDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_FORUM_DETAIL action', () => {
    // arrange
    const forumDetail = [];
    const action = {
      type: 'RECEIVE_FORUM_DETAIL',
      payload: {
        forumDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = forumDetailReducer(forumDetail, action);
    // assert
    expect(nextState).toEqual(action.payload.forumDetail);
  });

  it('should return the threads with the thread liked by the user when given by UP_VOTE_THREAD action', () => {
    // arrange
    const forumDetail = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const downFilter = [];

    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        vote: {
          id: 'vote-1',
          userId: 'users-2',
          threadId: 'thread-1',
          voteType: 1,
        },
      },
    };

    // action: vote thread
    const nextState = forumDetailReducer(forumDetail, action);
    // assert
    expect(nextState).toEqual(
      {
        ...forumDetail,
        upVotesBy: [action.payload.vote.userId, ...forumDetail.upVotesBy],
        downVotesBy: [...downFilter],
      },
    );
  });
});
