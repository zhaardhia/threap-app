/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import { postedAt } from '../data/index';

const Thread = ({
  id, title, body, category, createdAt, user,
}) => {
  const log = 'wkwk';
  return (
    <a href={`/threads/${id}`} className="my-10 w-[40%] mx-auto border-2 rounded-2xl p-5 flex flex-col gap-4 text-[#565254] bg-white">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm">{body}</p>
      <div className="flex gap-2">
        <p>{`#${category}`}</p>
      </div>
      <div className="flex gap-5">
        <p>{postedAt(createdAt)}</p>
        <p className="">
          Dibuat oleh
          {' '}
          <strong>{user.name}</strong>
        </p>
      </div>
    </a>
  );
};

export default Thread;
