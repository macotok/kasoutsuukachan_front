import React from 'react';
import PropTypes from 'prop-types';
import HeaderPostList from '../components/Header/HeaderPostList';
import PageScroll from '../components/Utils/PageScroll';
import PostsList from '../components/Post/PostList';
import { HEADER_HEIGHT } from '../defines/Defines';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerHeightChange: '',
    };
  }

  componentDidMount() {
    const { history } = this.props;
    if (history.action !== 'POP') {
      const app = document.getElementById('app');
      window.scrollTo(0, app.scrollHeight);
    }
    const headerElement = document.querySelector('.m-header02');
    const headerHeight = headerElement.clientHeight;
    if (headerHeight !== HEADER_HEIGHT) {
      this.setState({ headerHeightChange: headerHeight });
    }
  }

  render() {
    const { headerHeightChange } = this.state;
    return (
      <div>
        <HeaderPostList {...this.props} />
        <PageScroll headerHeight={headerHeightChange} />
        <PostsList {...this.props} />
      </div>
    );
  }
}

PostList.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default PostList;
