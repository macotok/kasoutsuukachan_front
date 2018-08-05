import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import ThreadList from '../components/Thread/ThreadList';
import PostsHome from '../components/Post/PostHome';
import Footer from '../components/Footer';
import LogoutButton from '../components/Utils/LogoutButton';

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
        <LogoutButton />
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
