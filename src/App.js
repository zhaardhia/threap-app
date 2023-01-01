import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import Loading from './components/Loading';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Leaderboard from './pages/Leaderboard';
// import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncPopulateUsersAndForums } from './states/shared/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncGetLeaderBoardsActionCreator } from './states/leaderboards/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states); // @TODO: get authUser and isPreLoad state from store
  // console.log(authUser);
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPopulateUsersAndForums());
    dispatch(asyncPreloadProcess());
    dispatch(asyncGetLeaderBoardsActionCreator());
  }, [dispatch]);

  const onLogOut = () => dispatch(asyncUnsetAuthUser());

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        {/* <Loading /> */}
        <main>
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      {/* <Loading /> */}
      <div className="font-navbar">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/leaderboards" element={<Leaderboard />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
