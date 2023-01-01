import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import Comment from '../components/Comment';
import CommentList from '../components/CommentList';
import AddComment from '../components/AddComment';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { asyncReceiveForumDetail, asyncAddCommentForum } from '../states/forumDetail/action';
// import { asyncAddTalk } from '../states/talks/action';

const DetailPage = () => {
  const { id } = useParams();
  const {
    forumDetail = null,
    authUser,
  } = useSelector((states) => states); // @TODO: get talkDetail and authUser state from store
  const dispatch = useDispatch();
  // console.log({ forumDetail });
  useEffect(() => {
    dispatch(asyncReceiveForumDetail(id));
  }, [id, dispatch]);

  const onComment = (content) => {
    dispatch(asyncAddCommentForum({ threadId: id, content }));
  };

  if (!forumDetail) {
    return null;
  }
  return (
    <div className="">
      <Navbar />
      <ThreadDetail {...forumDetail} authUser={authUser.id} />
      <CommentList {...forumDetail} authUser={authUser.id} />
      <AddComment comment={onComment} />
    </div>
  );
};

export default DetailPage;
