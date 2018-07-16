import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="m-header01">
      <div className="m-header01-inner">
        <p className="m-header01-title">
          <Link to="/">
            <img src="../images/logo.gif" width="300" alt="仮想通貨ちゃん" />
          </Link>
        </p>
        <h1 className="m-header01-subTitle">
          「仮想通貨ちゃん」は主要通貨はもちろん、今後上がるかもしれないマニアックな草コイン、トークンについて情報交換するサイトだよ
        </h1>
      </div>
    </header>
  </div>
);

export default Header;
