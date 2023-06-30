import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import SharedLayout from '../Pages/SharedLayout/SharedLayout';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Find from '../Pages/Find/Find';
import Login from '../Pages/Login/Login';
import Sign from '../Pages/Sign/Sign';
import Admin from '../Pages/Admin/Admin';

const Content: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/about" element={<About />} />
          <Route index element={<Home />} />
          <Route path="/find" element={<Find />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Content;
