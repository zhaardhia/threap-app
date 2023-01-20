/**
 * skenario test
 *
 * - asyncReceiveForumDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';
import { receiveForumDetailActionCreator, asyncReceiveForumDetail } from './action';

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

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveForumDetail thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    // restore original implementation
    api.getThreadDetail = api._getThreadDetail;

    // delete backup
    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(forumDetail);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveForumDetail('thread-1')(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveForumDetailActionCreator(forumDetail));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReceiveForumDetail('thread-1')(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
