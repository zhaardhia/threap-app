import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const log = 'test';
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-[#565254] items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="70" height="8"></rect>
          <rect y="20" width="70" height="8"></rect>
          <rect y="40" width="70" height="8"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[15vw] bg-white border-2 text-xl  p-10 pl-10 text-[#565254] fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <h3 className="mt-20 font-semibold text-[#565254]">
          Login
        </h3>
        <p className="my-10 font-semibold text-[#565254]">All Threads</p>
        <p className="font-semibold text-[#565254]">Leaderboards</p>
        <hr className="my-7" />
        <p>Category:</p>
        <div className="flex flex-col gap-2 font-thin text-md my-5">
          <p>#kacang</p>
          <p>#helm</p>
          <p>#sukro</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
