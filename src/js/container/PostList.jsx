import React from 'react';
import PropTypes from 'prop-types';
import HeaderPostList from '../components/Header/HeaderPostList';
import PageScroll from '../components/Utils/PageScroll';
import PostsList from '../components/Posts/PostsList';

class PostList extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    if (history.action !== 'POP') {
      const app = document.getElementById('app');
      window.scrollTo(0, app.scrollHeight);
    }
  }

  render() {
    return (
      <div>
        <HeaderPostList {...this.props} />
        <PageScroll />
        <PostsList {...this.props} />
      </div>
    );
  }
}

PostList.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default PostList;
