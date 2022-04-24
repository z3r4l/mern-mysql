import React from 'react';
import Userlist from './component/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUsers from './component/AddUsers';
import EditUser from './component/EditUser';
const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
