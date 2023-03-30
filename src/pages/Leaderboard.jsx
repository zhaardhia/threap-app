import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '../components/Tabs';
import Layout from '../components/Layout';
import { asyncGetLeaderBoardsActionCreator } from '../states/leaderboards/action';

const Leaderboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderBoardsActionCreator());
  }, [dispatch]);

  const leaderboards = useSelector((states) => states.leaderboards);

  let boardsDesc = [...leaderboards];
  boardsDesc = boardsDesc.sort((a, b) => (+a.score - +b.score));
  let boardsAsc = [...leaderboards];
  boardsAsc = boardsAsc.sort((a, b) => (+b.score - +a.score));

  return (
    <Layout>
      <div className="my-36 md:w-[50rem] w-[90%] mx-auto">
        <h4 className="text-center text-2xl text-white">Leaderboards of Threap App</h4>
        <Tabs boardsDesc={boardsDesc} boardsAsc={boardsAsc} />
      </div>
    </Layout>
  );
};

export default Leaderboard;
