/* eslint-disable react/require-default-props */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { postedAt, textTruncate } from '../data/index';

const Thread = ({
  id, title, body, category, totalComments, createdAt, user, isUpVote, isDownVote, upVote, downVote, upVotesBy, downVotesBy,
}) => (
  <div className="my-4 lg:w-[50rem] w-[90%] mx-auto shadow-lg flex justify-between rounded-2xl sm:p-5 p-4 text-[#565254] bg-[#fdfdfd] hover:bg-white gap-2">
    <div className="w-12 rounded-full">
      <img src={user.avatar} className="rounded-full" alt="user avatar" />
    </div>
    <div className="flex flex-col gap-3 w-[88%]">
      <Link to={`/threads/${id}`} className="text-xl font-bold underline">{title}</Link>
      <p className="text-sm">{textTruncate(body, 100, '...')}</p>
      <div className="flex gap-2">
        <p>{`#${category}`}</p>
      </div>
      <div className="flex gap-1 text-xs">
        <p>{postedAt(createdAt)}</p>
        <p>|</p>
        <Icon width={20} icon="material-symbols:add-comment-outline" />
        <p>{totalComments}</p>
        <p>|</p>
        <p className="">
          <strong>{user.name}</strong>
        </p>
        <p>|</p>
        {
          isUpVote
            ? (
              <div className="flex">
                <Icon
                  width={20}
                  className=""
                  icon="mdi:like"
                  onClick={() => (upVote(id, true))}
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
                  onClick={() => (upVote(id, false))}
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
                  className=""
                  icon="mdi:dislike"
                  onClick={() => (downVote(id, true))}
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
                  onClick={() => (downVote(id, false))}
                />
                <p>{downVotesBy.length}</p>
              </div>
            )
        }
      </div>
    </div>

  </div>
);

Thread.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isUpVote: PropTypes.string,
  isDownVote: PropTypes.string,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired),
  downVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Thread;
