import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import ThreadList from '../components/ThreadList';
import PostsHome from '../components/Posts/PostsHome';
import Footer from '../components/Footer';

class Home extends React.Component {
  componentWillMount() {
    const { history } = this.props;
    if (history.action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ThreadList />
        <PostsHome />
        <Footer
          isBackHome={false}
        />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Home;
