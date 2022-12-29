/* eslint-disable react/prop-types */
import React from 'react';
import { postedAt } from '../data/index';

const ThreadDetail = ({
  id, title, body, category, createdAt, owner, comments,
}) => {
  const x = 0;
  return (
    <div className="my-10 w-[50%] mx-auto border-2 rounded-b-3xl p-5 flex flex-col gap-4 text-[#565254] bg-white">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm">{body}</p>
      <div className="flex gap-2">
        <p>
          #
          {category}
        </p>
      </div>
      <div className="flex gap-5">
        <p>{postedAt(createdAt)}</p>
        <p className="">
          Dibuat oleh
          {' '}
          <strong>{owner.name}</strong>
        </p>
      </div>
    </div>
  );
};

export default ThreadDetail;
