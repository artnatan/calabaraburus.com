import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { Routes, Route } from "react-router-dom";

import NaviBar from './components/navibar.js';
import ProjectPage from './pages/ProjectPage';
import ProjectsList from './pages/ProjectsList';
import PostsList from './pages/PostsList';
import PostPage from './pages/PostPage';
import Assembly from './pages/Assembly';
import Authentication from './pages/Auth';


function App() {
  return (
    <>
      <NaviBar />

      <Routes> 

        <Route path="/" element={<Assembly />} />

        <Route path="authentication/" element={<Authentication />} />

        <Route path="products/" element={<ProjectsList />} />
        <Route path="products/:id" element={<ProjectPage />} />

        <Route path="posts/" element={<PostsList />} />
        <Route path="posts/:id" element={<PostPage />} />

      </Routes>

    </>
  );
}

export default App;

