import React from 'react'
import ReactDOM from 'react-dom';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import Home from './components/Home';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default function Main() {
  return (
    <BrowserRouter>

      <nav  className="container text-center">
        <Link to="/dynamic" className>Home</Link> | {' '}
        <Link to="/dynamic/userlist">User list</Link>
      </nav>

     <Routes>
        <Route path="/dynamic" element={<Home />} />
        <Route path="/dynamic/userlist" element={<UserList />} />
        <Route path="/dynamic/profile/:id" element={<UserProfile />} />
      </Routes>

  </BrowserRouter>
  )
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
