import React from 'react';

const Sns = () => (
  <div className="m-snsArea01">
    <ul className="m-snsArea01-listBlock">
      <li className="m-snsArea01-list m-snsArea01-twitter">
        <a
          href="https://twitter.com/intent/follow?screen_name=kasouchan_bot"
          target="_blank"
          onClick={() => {
            window.open(
              this.href,
              'window',
              'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes',
            );
            return false;
          }}
        >
          <div className="m-snsArea01-icon">
            &#xf243;
          </div>
          <p className="m-snsArea01-text">
            フォローする
          </p>
        </a>
      </li>
      <li className="m-snsArea01-list m-snsArea01-twitter">
        <a
          href="http://twitter.com/share?text=%e3%80%8c%e4%bb%ae%e6%83%b3%e9%80%9a%e8%b2%a8%e3%81%a1%e3%82%83%e3%82%93%e3%80%8d%e3%81%af%e4%b8%bb%e8%a6%81%e9%80%9a%e8%b2%a8%e3%81%af%e3%82%82%e3%81%a1%e3%82%8d%e3%82%93%e3%80%81%e4%bb%8a%e5%be%8c%e4%b8%8a%e3%81%8c%e3%82%8b%e3%81%8b%e3%82%82%e3%81%97%e3%82%8c%e3%81%aa%e3%81%84%e3%83%9e%e3%83%8b%e3%82%a2%e3%83%83%e3%82%af%e3%81%aa%e8%8d%89%e3%82%b3%e3%82%a4%e3%83%b3%e3%80%81%e3%83%88%e3%83%bc%e3%82%af%e3%83%b3%e3%82%92%e3%83%81%e3%83%a3%e3%83%83%e3%83%88%e3%81%a7%e3%81%bf%e3%82%93%e3%81%aa%e3%81%a8%e6%83%85%e5%a0%b1%e4%ba%a4%e6%8f%9b%e3%81%a7%e3%81%8d%e3%82%8b%e3%82%b5%e3%82%a4%e3%83%88%e3%81%a0%e3%82%88%e3%80%82&amp;url=https://kasoutsuukachan.com/&amp;hashtags=%e4%bb%ae%e6%83%b3%e9%80%9a%e8%b2%a8,%e3%83%93%e3%83%83%e3%83%88%e3%82%b3%e3%82%a4%e3%83%b3"
          target="_blank"
        >
          <div className="m-snsArea01-icon">
            &#xf243;
          </div>
          <p className="m-snsArea01-text">
            ツイートする
          </p>
        </a>
      </li>
      <li className="m-snsArea01-list m-snsArea01-facebook">
        <a
          href="http://www.facebook.com/share.php?u=https://kasoutsuukachan.com/"
          onClick={() => {
            window.open(
              this.href,
              'FBwindow',
              'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes',
            );
            return false;
          }}
        >
          <div className="m-snsArea01-icon">
            &#xf231;
          </div>
          <p className="m-snsArea01-text">
            シェアする
          </p>
        </a>
      </li>
      <li className="m-snsArea01-list m-snsArea01-line">
        <a
          href="http://line.me/R/msg/text/?%e3%80%8c%e4%bb%ae%e6%83%b3%e9%80%9a%e8%b2%a8%e3%81%a1%e3%82%83%e3%82%93%e3%80%8d%e3%81%af%e4%b8%bb%e8%a6%81%e9%80%9a%e8%b2%a8%e3%81%af%e3%82%82%e3%81%a1%e3%82%8d%e3%82%93%e3%80%81%e4%bb%8a%e5%be%8c%e4%b8%8a%e3%81%8c%e3%82%8b%e3%81%8b%e3%82%82%e3%81%97%e3%82%8c%e3%81%aa%e3%81%84%e3%83%9e%e3%83%8b%e3%82%a2%e3%83%83%e3%82%af%e3%81%aa%e8%8d%89%e3%82%b3%e3%82%a4%e3%83%b3%e3%80%81%e3%83%88%e3%83%bc%e3%82%af%e3%83%b3%e3%82%92%e3%83%81%e3%83%a3%e3%83%83%e3%83%88%e3%81%a7%e3%81%bf%e3%82%93%e3%81%aa%e3%81%a8%e6%83%85%e5%a0%b1%e4%ba%a4%e6%8f%9b%e3%81%a7%e3%81%8d%e3%82%8b%e3%82%b5%e3%82%a4%e3%83%88%e3%81%a0%e3%82%88%e3%80%82https://kasoutsuukachan.com/"
        >
          <div className="m-snsArea01-icon">
            <img src="../images/icon_l.svg" width="30" height="30" alt="LINEで送る" />
          </div>
          <p className="m-snsArea01-text">
            友だちに教える
          </p>
        </a>
      </li>
    </ul>
  </div>
);

export default Sns;
