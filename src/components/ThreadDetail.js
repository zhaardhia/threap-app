/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { postedAt } from '../data/index';
import { asyncUpVoteThread, asyncDownVoteThread, asyncNeutralizeVoteThread } from '../states/forumDetail/action';

const ThreadDetail = ({
  authUser, id, title, body, category, createdAt, owner, upVotesBy, downVotesBy,
}) => {
  const dispatch = useDispatch();

  const onUpVote = (threadId, isToNeutral) => {
    console.log(threadId, isToNeutral);
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
    <div className="my-10 mt-28">
      <div className="md:w-[40rem] w-[80%] mx-auto rounded-2xl sm:pb-8 pb-5 flex flex-col gap-4 text-white bg-[#3E4E50B3] shadow-xl">
        <div className="w-full rounded-2xl mx-auto flex gap-2 items-center sm:p-6 px-3 py-5 bg-slate-400 shadow-xl">
          <div className="w-[3rem]">
            <img src={owner?.avatar} className="rounded-full w-full" alt="owner avatar" />
          </div>
          <div className="flex flex-col">
            <p className="sm:text-2xl text-xl">{owner.name}</p>
            <div className="flex items-center">
              <Icon icon="material-symbols:clock-loader-40" />
              <p className="ml-1 text-sm">
                {moment(createdAt).format('lll')}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:px-8 px-5">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="sm:text-lg text-md font-thin leading-8">{body}</p>
          <p className="text-lg font-light">
            #
            {category}
          </p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-slate-400 rounded-lg"
              onClick={() => (upVote ? onUpVote(id, true) : onUpVote(id, false))}
            >
              {
            upVote
              ? (
                <div className="flex">
                  <Icon
                    width={20}
                    className="cursor-pointer"
                    icon="mdi:like"
                  />
                  <p>{upVotesBy.length}</p>
                </div>
              )
              : (
                <div className="flex">
                  <Icon
                    width={20}
                    className="w-5 cursor-pointer"
                    icon="mdi:like-outline"
                    // onClick={() => (onUpVote(id, false))}
                  />
                  <p>{upVotesBy.length}</p>
                </div>
              )
            }
            </button>
            <button
              className="px-4 py-2 bg-slate-400 rounded-lg"
              onClick={() => (downVote ? onDownVote(id, true) : onDownVote(id, true))}
            >
              {
            downVote
              ? (
                <div className="flex">
                  <Icon
                    width={20}
                    className="cursor-pointer"
                    icon="mdi:dislike"
                  />
                  <p>{downVotesBy.length}</p>
                </div>
              )
              : (
                <div className="flex">
                  <Icon
                    width={20}
                    className="w-5 cursor-pointer"
                    icon="mdi:dislike-outline"
                    // onClick={() => (onDownVote(id, false))}
                  />
                  <p>{downVotesBy.length}</p>
                </div>
              )
          }
            </button>

          </div>
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
