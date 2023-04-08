import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import forumDetailReducer from './forumDetail/reducer';
import forumsReducer from './forums/reducer';
import usersReducer from './users/reducer';
import modalThreadReducer from './modalThread/reducer';
import filterCategoryReducer from './filterCategory/reducer';
import getLeaderboardsReducer from './leaderboards/reducer';
import darkModeReducer from './darkMode/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    forums: forumsReducer,
    forumDetail: forumDetailReducer,
    loadingBar: loadingBarReducer,
    modal: modalThreadReducer,
    darkMode: darkModeReducer,
    filterCategory: filterCategoryReducer,
    leaderboards: getLeaderboardsReducer,
  },
});

export default store;
