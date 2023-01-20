/**
 * skenario test
 *
 * - asyncAddForum thunk
 *  - should dispatch action correctly when add forum success
 *  - should dispatch action and call alert correctly when add forum failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';
import { asyncAddForum, addForumActionCreator } from './action';

const thread = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddForum thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._createThread = api.createThread;
  });

  afterEach(() => {
    // restore original implementation
    api.createThread = api._createThread;

    // delete backup
    delete api._createThread;
  });

  it('should dispatch action correctly when add forum success', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(thread);
    // mock dispatch
    const dispatch = jest.fn();
    const title = 'Thread Pertama';
    const body = 'Ini adalah thread pertama';
    const category = 'General';

    // action
    await asyncAddForum({ title, body, category })(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addForumActionCreator(thread));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when add forum failed', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();
    const title = 'Thread Pertama';
    const body = 'Ini adalah thread pertama';
    const category = 'General';
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncAddForum({ title, body, category })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
