/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch } from 'react-redux';
import Thread from './Thread';
import { asyncUpVoteThread, asyncDownVoteThread, asyncNeutralizeVoteThread } from '../states/forums/action';

const ThreadList = ({ threads }) => {
  const dispatch = useDispatch();

  const onUpVote = (threadId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteThread({ threadId }));
    else dispatch(asyncUpVoteThread({ threadId }));
  };

  const onDownVote = (threadId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteThread({ threadId }));
    else dispatch(asyncDownVoteThread({ threadId }));
  };

  return (
    <div className="my-36">
      {
        threads.map((thread) => {
          const upVote = thread.upVotesBy.find((vote) => thread.authUser === vote);
          const downVote = thread.downVotesBy.find((vote) => thread.authUser === vote);
          return (
            <Thread key={thread.id} {...thread} isUpVote={upVote} isDownVote={downVote} upVote={onUpVote} downVote={onDownVote} />
          );
        })
      }
    </div>
  );
};

export default ThreadList;
