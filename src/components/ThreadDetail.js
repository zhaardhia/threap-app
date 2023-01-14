/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { postedAt } from '../data/index';
import { asyncUpVoteThread, asyncDownVoteThread, asyncNeutralizeVoteThread } from '../states/forumDetail/action';

const ThreadDetail = ({
  authUser, id, title, body, category, createdAt, owner, upVotesBy, downVotesBy,
}) => {
  const dispatch = useDispatch();

  const onUpVote = (threadId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteThread({ threadId }));
    else dispatch(asyncUpVoteThread({ threadId, authUser }));
  };

  const onDownVote = (threadId, isToNeutral) => {
    if (isToNeutral) dispatch(asyncNeutralizeVoteThread({ threadId }));
    else dispatch(asyncDownVoteThread({ threadId }));
  };

  const upVote = upVotesBy?.find((vote) => authUser === vote);
  const downVote = downVotesBy?.find((vote) => authUser === vote);

  return (
    <div className="my-10 xl:w-[60rem] md:w-[80%] mx-auto p-5 flex justify-between text-[#565254] mt-28">

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{body}</p>
        <p className="text-lg">
          #
          {category}
        </p>
        <div className="flex sm:gap-5 gap-2 items-center">
          <p>{postedAt(createdAt)}</p>
          <div className="flex items-center">
            <div className="w-5">
              <img src={owner?.avatar} className="rounded-full w-full" alt="owner avatar" />
            </div>
            <p className="ml-1 sm:text-md text-sm">{owner.name}</p>
          </div>
          {
            upVote
              ? (
                <div className="flex">
                  <Icon
                    width={20}
                    className=""
                    icon="mdi:like"
                    onClick={() => (onUpVote(id, true))}
                  />
                  <p>{upVotesBy.length}</p>
                </div>
              )
              : (
                <div className="flex">
                  <Icon
                    width={20}
                    className="w-5"
                    icon="mdi:like-outline"
                    onClick={() => (onUpVote(id, false))}
                  />
                  <p>{upVotesBy.length}</p>
                </div>
              )
          }
          {
            downVote
              ? (
                <div className="flex">
                  <Icon
                    width={20}
                    className=""
                    icon="mdi:dislike"
                    onClick={() => (onDownVote(id, true))}
                  />
                  <p>{downVotesBy.length}</p>
                </div>
              )
              : (
                <div className="flex">
                  <Icon
                    width={20}
                    className="w-5"
                    icon="mdi:dislike-outline"
                    onClick={() => (onDownVote(id, false))}
                  />
                  <p>{downVotesBy.length}</p>
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

ThreadDetail.propTypes = {
  authUser: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired),
  downVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ThreadDetail;
