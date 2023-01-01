/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Comment from './Comment';
import { asyncUpVoteComment, asyncNeutralizeVoteComment, asyncDownVoteComment } from '../states/forumDetail/action';

const CommentList = ({ id, comments, authUser }) => {
  const dispatch = useDispatch();
  console.log({ comments });
  const onUpVote = (threadId, commentId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteComment({ threadId, commentId }));
    else dispatch(asyncUpVoteComment({ threadId, commentId }));
    // dispatch(asyncUpVoteComment({ threadId, commentId }));
  };

  const onDownVote = (threadId, commentId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteComment({ threadId, commentId }));
    else dispatch(asyncDownVoteComment({ threadId, commentId }));
  };

  return (
    <div className="my-28 flex flex-col gap-2">
      {
        comments.map((comment) => {
          const upVote = comment.upVotesBy.find((vote) => authUser === vote);
          const downVote = comment.downVotesBy.find((vote) => authUser === vote);

          return (
            <Comment key={comment.id} {...comment} threadId={id} isUpVote={upVote} isDownVote={downVote} upVote={onUpVote} downVote={onDownVote} />
          );
        })
      }
    </div>
  );
};

CommentList.propTypes = {
  // authUser: PropTypes.shape(authUserShape).isRequired,
  // comments: PropTypes.func.isRequired,
};

export default CommentList;
