import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import Comment from '../components/Comment';
import CommentList from '../components/CommentList';
import AddComment from '../components/AddComment';
import Sidebar from '../components/Sidebar';
import { asyncReceiveForumDetail, asyncAddCommentForum } from '../states/forumDetail/action';
// import { asyncAddTalk } from '../states/talks/action';

const DetailPage = () => {
  const { id } = useParams();
  const {
    forumDetail = null,
    authUser,
  } = useSelector((states) => states); // @TODO: get talkDetail and authUser state from store
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    dispatch(asyncReceiveForumDetail(id));
  }, [id, dispatch]);
  console.log(forumDetail);
  const onComment = (content) => {
    console.log(id, content);
    dispatch(asyncAddCommentForum({ threadId: id, content }));
  };

  if (!forumDetail) {
    return null;
  }
  return (
    <div>
      <Sidebar />
      <ThreadDetail {...forumDetail} authUser={authUser.id} />
      <CommentList {...forumDetail} />
      <AddComment comment={onComment} />
    </div>
  );
};

export default DetailPage;
