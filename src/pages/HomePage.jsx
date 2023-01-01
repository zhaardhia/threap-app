/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalThreadActionCreator } from '../states/modalThread/action';
import { asyncPopulateUsersAndForums } from '../states/shared/action';
import { asyncAddForum } from '../states/forums/action';
import Navbar from '../components/Navbar';
import Thread from '../components/Thread';
import Sidebar from '../components/Sidebar';
import ThreadList from '../components/ThreadList';
import BtnAddThread from '../components/BtnAddThread';
import ModalAddThread from '../components/ModalAddThread';
import Tabs from '../components/Tabs';

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
    // @TODO: dispatch async action to add talk
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
  console.log(authUser);
  return (
    <div>
      <Navbar />
      <ModalAddThread open={modalThread} toggleModal={toggleModal} addThread={onAddThread} {...authUser} />
      <BtnAddThread toggleModal={toggleModal} />
      <ThreadList threads={filterCategory ? forumFiltered : forumList} />
    </div>
  );
};

export default HomePage;
