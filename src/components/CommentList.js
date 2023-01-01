/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Comment from './Comment';
import { asyncUpVoteComment, asyncNeutralizeVoteComment, asyncDownVoteComment } from '../states/forumDetail/action';

const CommentList = ({ id, comments, authUser }) => {
  const dispatch = useDispatch();

  const onUpVote = (threadId, commentId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteComment({ threadId, commentId }));
    else dispatch(asyncUpVoteComment({ threadId, commentId }));
  };

  const onDownVote = (threadId, commentId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteComment({ threadId, commentId }));
    else dispatch(asyncDownVoteComment({ threadId, commentId }));
  };

  return (
    <div className="mb-36 flex flex-col gap-2">
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
  authUser: PropTypes.string.isRequired,
  comments: PropTypes.array,
  id: PropTypes.string.isRequired,
};

export default CommentList;
