import React from 'react';
import PropTypes from 'prop-types';
import Thread from './Thread';

const ThreadList = ({ threads }) => (
  <div className="my-28">
    {
      threads.map((thread) => (
        <Thread key={thread.id} {...thread} />
      ))
    }
  </div>
);

ThreadList.propTypes = {
  // authUser: PropTypes.shape(authUserShape).isRequired,
  threads: PropTypes.func.isRequired,
};

export default ThreadList;
