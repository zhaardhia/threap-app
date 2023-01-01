/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';
import { postedAt } from '../data/index';

const Comment = ({
  threadId, id, content, createdAt, owner, isUpVote, isDownVote, upVote, downVote, upVotesBy, downVotesBy,
}) => {
  console.log(id, threadId);
  const x = 0;
  return (
    <div className="md:w-[40rem] w-[80%] mx-auto rounded-2xl sm:p-5 p-2 flex justify-between bg-[#7A7D7D] bg-opacity-70 text-white">
      <div className="w-[2rem]">
        <img src={owner.avatar} className="rounded-full" />
      </div>
      <div className="w-[88%] flex flex-col gap-2">
        <h1 className="text-lg font-bold">{owner.name}</h1>
        <p className="text-sm">{content}</p>
        <div className="flex gap-5 text-sm">
          <p>{postedAt(createdAt)}</p>
          {
            isUpVote
              ? (
                <div className="flex">
                  <Icon
                    width={20}
                    className=""
                    icon="mdi:dislike"
                    onClick={() => (upVote(threadId, id, true))}
                  />
                  <p>{upVotesBy.length}</p>
                </div>
              )
              : (
                <div className="flex">
                  <Icon
                    width={20}
                    className="w-5"
                    icon="mdi:dislike-outline"
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
                    className=""
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
                    className="w-5"
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
};

export default Comment;
