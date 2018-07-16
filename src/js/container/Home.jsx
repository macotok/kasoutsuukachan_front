import React from 'react';
import Header from '../components/Header';
import ThreadList from '../components/ThreadList';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <ThreadList />
    <Footer
      isBackHome={false}
    />
  </div>
);

export default Home;
