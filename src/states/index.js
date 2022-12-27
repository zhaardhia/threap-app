import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import forumDetailReducer from './forumDetail/reducer';
import forumsReducer from './forums/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    forums: forumsReducer,
    forumDetail: forumDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
