import React from 'react';
import HeaderPostList from '../components/Header/HeaderPostList';
import PageScroll from '../components/Utils/PageScroll';
import PostsList from '../components/Posts/PostsList';

const PostList = props => (
  <div>
    <HeaderPostList {...props} />
    <PageScroll />
    <PostsList {...props} />
  </div>
);

export default PostList;
