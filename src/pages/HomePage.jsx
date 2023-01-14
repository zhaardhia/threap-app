/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalThreadActionCreator } from '../states/modalThread/action';
import { asyncPopulateUsersAndForums } from '../states/shared/action';
import { asyncAddForum } from '../states/forums/action';
import Layout from '../components/Layout';
import BtnAddThread from '../components/BtnAddThread';

const ModalAddThread = loadable(() => import('../components/ModalAddThread'));
const ThreadList = loadable(() => import('../components/ThreadList'));

const HomePage = () => {
  const modalThread = useSelector((states) => states.modal);
  const filterCategory = useSelector((states) => states.filterCategory);
  const {
    forums = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndForums());
  }, [dispatch]);

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddForum({ title, body, category }));
  };

  function toggleModal(isOpen) {
    dispatch(toggleModalThreadActionCreator({ isOpen }));
  }

  const forumList = forums.map((forum) => ({
    ...forum,
    user: users.find((user) => user.id === forum.ownerId),
    authUser: authUser.id,
  }));
  const forumFiltered = forumList.filter((forum) => forum.category === filterCategory);

  return (
    <Layout>
      <ModalAddThread open={modalThread} toggleModal={toggleModal} addThread={onAddThread} {...authUser} />
      <BtnAddThread toggleModal={toggleModal} />
      <ThreadList threads={filterCategory ? forumFiltered : forumList} />
    </Layout>
  );
};

export default HomePage;
