/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { postedAt } from '../data/index';

const Comment = ({
  threadId, id, content, createdAt, owner, isUpVote, isDownVote, upVote, downVote, upVotesBy, downVotesBy,
}) => (
  <div className="w-full mx-auto flex gap-3 bg-opacity-70 text-white">
    <div className="w-[3rem]">
      <img src={owner.avatar} className="rounded-full" alt="user avatar" />
    </div>
    <div className="w-[88%] flex flex-col gap-2">
      <h1 className="text-lg font-bold">{owner.name}</h1>
      <p className="text-sm leading-7">{content}</p>
      <div className="flex gap-5 text-sm">
        <p>{postedAt(createdAt)}</p>
        {
            isUpVote
              ? (
                <div className="flex">
                  <Icon
                    width={20}
                    className="cursor-pointer"
                    icon="mdi:like"
                    onClick={() => (upVote(threadId, id, true))}
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
                    onClick={() => (upVote(threadId, id, false))}
                  />
                  <p>{upVotesBy.length}</p>
                </div>
              )
          }
        {
            isDownVote
              ? (
                <div className="flex">
                  <Icon
                    width={20}
                    className="cursor-pointer"
                    icon="mdi:dislike"
                    onClick={() => (downVote(threadId, id, true))}
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
                    onClick={() => (downVote(threadId, id, false))}
                  />
                  <p>{downVotesBy.length}</p>
                </div>
              )
          }
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  threadId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  isUpVote: PropTypes.string,
  isDownVote: PropTypes.string,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired),
  downVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Comment;
