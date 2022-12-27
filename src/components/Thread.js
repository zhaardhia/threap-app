/* eslint-disable max-len */
import React from 'react';

const Thread = () => {
  const log = 'wkwk';
  return (
    <div className="my-10 w-[40%] mx-auto border-2 rounded-2xl p-5 flex flex-col gap-4 text-[#565254] bg-white">
      <h1 className="text-xl font-bold">Pengalaman menggunakan kacang kulit sebagai helm beroda empat</h1>
      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eveniet. Asperiores, ex tempora nihil quod praesentium, alias expedita minima</p>
      <div className="flex gap-2">
        <p>#kacang</p>
        <p>#helm</p>
      </div>
      <div className="flex gap-5">
        <p>44 hari lalu</p>
        <p className="">
          Dibuat oleh
          {' '}
          <strong>Dicoding</strong>
        </p>
      </div>
    </div>
  );
};

export default Thread;
