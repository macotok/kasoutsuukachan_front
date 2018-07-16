import React from 'react';
import Header from '../components/Header';
import ThreadList from '../components/ThreadList';
import PostsHome from '../components/Posts/PostsHome';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <ThreadList />
    <PostsHome />
    <Footer
      isBackHome={false}
    />
  </div>
);

export default Home;
