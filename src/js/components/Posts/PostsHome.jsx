import React from 'react';

const PostsHome = () => (
  <div className="m-postsList m-postsListTop">
    <h2 className="m-title01">
      最新投稿一覧
    </h2>
    <ul className="m-postsList-block">
      <li className="m-postsList-list">
        <a href="/" className="m-postsList-link02">
          <div className="m-postsList-information">
            <p className="m-postsList-name">
            </p>
            <p className="m-postsList-updateAt">
            </p>
          </div>
          <p className="m-postsList-text">
          </p>
          <div className="m-postsList-reaction">
            <p className="m-postsList-iine">
              いいね
            </p>
            <p className="m-postsList-iineCount">
            </p>
            <p className="m-postsList-ticker m-postsList-">
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default PostsHome;
