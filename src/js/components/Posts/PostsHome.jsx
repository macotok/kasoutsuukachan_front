import React from 'react';
import moment from 'moment';
import db from '../../../../api/stub';

const PostsHome = () => (
  <div className="m-postsList m-postsListTop">
    <h2 className="m-title01">
      最新投稿一覧
    </h2>
    <ul className="m-postsList-block">
      {db.post.map(p => (
        <li className="m-postsList-list" key={p.id}>
          <a href={`/${p.ticker}`} className="m-postsList-link02">
            <div className="m-postsList-information">
              <p className="m-postsList-name">
                {p.name}
              </p>
              <p className="m-postsList-updateAt">
                {moment(p.updateAt).format('YYYY/MM/DD/ HH:mm')}
              </p>
            </div>
            <p className="m-postsList-text">
              {p.text}
            </p>
            <div className="m-postsList-reaction">
              <p className="m-postsList-iine">
                いいね
              </p>
              <p className="m-postsList-iineCount">
                {p.good}
              </p>
              <p className={`m-postsList-ticker m-postsList-${p.ticker}`} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default PostsHome;
