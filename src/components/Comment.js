/* eslint-disable react/prop-types */
import React from 'react';
import { postedAt } from '../data/index';

const Comment = ({
  id, content, createdAt, owner,
}) => {
  const x = 0;
  return (
    <div className="w-[40%] mx-auto rounded-2xl p-5 flex flex-col gap-2  bg-[#7A7D7D] bg-opacity-70 text-white">
      <h1 className="text-lg font-bold">{owner.name}</h1>
      <p className="text-sm">{content}</p>
      <div className="flex gap-5 text-sm">
        <p>{postedAt(createdAt)}</p>
      </div>
    </div>
  );
};

export default Comment;
