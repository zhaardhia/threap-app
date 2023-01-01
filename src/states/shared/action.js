import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';
import { receiveForumsActionCreator } from '../forums/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndForums() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const forums = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveForumsActionCreator(forums));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndForums };
