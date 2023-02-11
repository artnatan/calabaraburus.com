import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Layout from './pages/hoks/Layout.js';
import store from './store';

import NaviBar from './components/navibar.js';
import ProjectPage from './pages/ProjectPage';
import ProjectsList from './pages/ProjectsList';
import PostsList from './pages/PostsList';
import PostPage from './pages/PostPage';
import Assembly from './pages/Assembly';
import { Bottom } from './pages/Bottom';

import PostNewPage from './pages/PostNewPage';
import PostListUpdate from './pages/PostListUpdate';
import PostUpdatePage from './pages/PostUpdatePage';
import CommentsPage from './pages/CommentsPage';
import CommentUpdateDelete from './pages/CommentUpdateDelete';

import Activate from './pages/auth/Activate.js';
import Login from './pages/auth/Login.js';
import ResetPassword from './pages/auth/ResetPassword.js';
import ResetPasswordConfirm from './pages/auth/ResetPasswordConfirm.js';
import Signup from './pages/auth/Signup.js';



const App = () => (
  <Provider store={store}>

    <BrowserRouter>
      <Layout>
        <NaviBar />
        {/* <Provider store={store} > */}
        <Routes>
          {/* maine */}
          <Route path="/" element={<Assembly />} />

          {/* auth */}
          <Route path="login" element={<Login />} />
          <Route path="signup/" element={<Signup />} />
          <Route path="reset-password/" element={<ResetPassword />} />
          <Route path="password/reset/confirm/:uid/:token/" element={<ResetPasswordConfirm />} />
          <Route path="activate/:uid/:token/" element={<Activate />} />

          {/* products */}
          <Route path="products/" element={<ProjectsList />} />
          <Route path="products/:id" element={<ProjectPage />} />

          {/* posts */}
          {/* <Route element={<Layout />}> */}
          <Route path="posts/" element={<PostsList />} />
          <Route path="posts/update" element={<PostListUpdate />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="posts/create" element={<PostNewPage />} />
          <Route path="posts/:id/update" element={<PostUpdatePage />} />
          {/* </Route> */}
          {/* comments */}
          <Route path="posts/:post_id/comments/" element={<CommentsPage />} />
          <Route path="posts/:post_id/comments/create" element={<CommentsPage />} />
          <Route path="posts/:post_id/comments/:id" element={<CommentUpdateDelete />} />
          <Route path="posts/:post_id/comments/:id/update" element={<CommentUpdateDelete />} />
          {/* <Route path="posts/create" element={<PostNewPage />} /> */}

        </Routes>

        <Bottom />
      </Layout>
    </BrowserRouter>

  </Provider>

)

export default App;

