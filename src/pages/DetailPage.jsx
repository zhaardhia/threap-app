import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddComment from '../components/AddComment';
import Layout from '../components/Layout';
import { asyncReceiveForumDetail, asyncAddCommentForum } from '../states/forumDetail/action';

const CommentList = loadable(() => import('../components/CommentList'));
const ThreadDetail = loadable(() => import('../components/ThreadDetail'));

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
  console.log(forumDetail);
  return (
    <Layout>
      <ThreadDetail {...forumDetail} authUser={authUser.id} />
      <div className="my-10 md:w-[40rem] w-[80%] mx-auto flex flex-col text-white bg-[#3E4E50B3] mt-10 rounded-2xl sm:p-8 p-5 gap-8 h-[40rem] shadow-xl">
        <h1 className="text-xl">
          Comments
          (
          {forumDetail.comments.length}
          )
        </h1>
        <CommentList {...forumDetail} authUser={authUser.id} />
      </div>
      <AddComment comment={onComment} />
    </Layout>
  );
};

export default DetailPage;

// action created date WEB-862
