/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs({ boardsAsc, boardsDesc }) {
  const order = {
    'Best Score': [...boardsAsc],
    'Least Score': [...boardsDesc],
  };

  return (
    <div className="px-2 py-16 sm:px-0 mx-auto -z-1">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(order).map((list) => (
            <Tab
              key={list}
              className={({ selected }) => classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#3E4E50]',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              )}
            >
              {list}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(order).map((lists, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              )}
            >
              <ul>
                {lists.map((list) => (
                  <li
                    key={list.user.id}
                    className="relative rounded-md p-3 hover:bg-gray-100 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <img src={list.user.avatar} className="w-10 rounded-full" alt="user avatar" />
                      <h3 className="text-sm font-medium leading-5">
                        {list.user.name}
                      </h3>
                    </div>

                    <h3 className="text-sm font-medium leading-5">
                      {list.score}
                    </h3>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:-z-1 focus:outline-none focus:ring-2',
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
