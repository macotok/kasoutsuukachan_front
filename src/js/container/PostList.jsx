import React from 'react';
import HeaderPostList from '../components/Header/HeaderPostList';
import PageScroll from '../components/PageScroll';

const PostList = props => (
  <div>
    <HeaderPostList {...props} />
    <PageScroll />
  </div>
);

export default PostList;
