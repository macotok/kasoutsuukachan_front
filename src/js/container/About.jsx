import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const About = () => (
  <div>
    <Header />
    <div className="l-container">
      <h2 className="m-title01">
        このサイトについて
      </h2>
      <div className="l-container-main02">
        <div className="m-list01">
          <dl className="m-list01-listBlock">
            <dt className="m-list01-listTitle">
              <span className="m-list01-circle">
                1
              </span>
              <span className="m-list01-title">
                仮想通貨ちゃんとは？
              </span>
            </dt>
            <dd className="m-list01-listText">
              仮想通貨に関する情報や心境を共有する無料掲示板・チャットサービスです。
              <br />
              シンプルなUIとチャンネルごとにカテゴライズされたスレッドで意見、記事を読んだり、
              <br />
              情報交換・共有してコミュニケーションを楽しむスペースを提供しています。
            </dd>
            <dt className="m-list01-listTitle">
              <span className="m-list01-circle">
                2
              </span>
              <span className="m-list01-title">
                仮想通貨ちゃんの楽しみ方
              </span>
            </dt>
            <dd className="m-list01-listText">
              <span>
                【投稿してみよう】
              </span>
              仮想通貨に関することならどんなことでも誰でも投稿ができます。
              <br />
              自分が保有しているコインに関する情報から自らの胸の内を明かすことまで、仮想通貨に関することならどんな投稿でも結構です。
              <br />
              各スレッドは1,000件を超えると1番古い投稿のものが削除されます。
            </dd>
          </dl>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default About;
