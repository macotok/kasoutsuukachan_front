import PropTypes from 'prop-types';
import React from 'react';
import HeaderPostList from '../components/Header/HeaderPostList';
import PostsList from '../components/Post/PostList';
import PageScroll from '../components/Utils/PageScroll';
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
    // ページ最下部から表示
    if (history.action !== 'POP') {
      const app = document.getElementById('app');
      window.scrollTo(0, app.scrollHeight);
    }
    // ヘッダーの高さによってページスクロールと投稿一覧の位置を調整
    const headerHeight = document.querySelector('.m-header02').clientHeight;
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
        <PostsList
          headerHeight={headerHeightChange}
          {...this.props}
        />
      </div>
    );
  }
}

PostList.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default PostList;
