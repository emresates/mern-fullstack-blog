import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
      // console.log(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header
        page="Home"
        image="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
        slogan="Your Blogging Platform"
      />
      <div className="home">
        <Sidebar />
        <Posts posts={posts} />
      </div>
    </>
  );
}

export default Home;
