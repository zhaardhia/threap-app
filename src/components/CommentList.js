/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="my-28 flex flex-col gap-2">
    {
      comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))
    }
  </div>
);

CommentList.propTypes = {
  // authUser: PropTypes.shape(authUserShape).isRequired,
  // comments: PropTypes.func.isRequired,
};

export default CommentList;
