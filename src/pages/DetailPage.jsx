import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';
import AddComment from '../components/AddComment';
import Layout from '../components/Layout';
import { asyncReceiveForumDetail, asyncAddCommentForum } from '../states/forumDetail/action';

const DetailPage = () => {
  const { id } = useParams();
  const {
    forumDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

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
    <Layout>
      <ThreadDetail {...forumDetail} authUser={authUser.id} />
      <div className="my-10 xl:w-[60rem] md:w-[80%] mx-auto p-5 flex justify-between text-[#565254] mt-10">
        <h1 className="text-xl">Comments: </h1>
      </div>
      <CommentList {...forumDetail} authUser={authUser.id} />
      <AddComment comment={onComment} />
    </Layout>
  );
};

export default DetailPage;
