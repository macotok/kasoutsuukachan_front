import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const Contact = () => (
  <div>
    <Header />
    <div className="l-container">
      <h2 className="m-title01">
        お問い合わせ
      </h2>
      <div className="l-container-main02">
        <div className="m-list01">
          <dl className="m-list01-listBlock">
            <dt className="m-list01-listTitle">
              <span className="m-list01-circle">
                1
              </span>
              <span className="m-list01-title">
                お問い合わせについて
              </span>
            </dt>
            <dd className="m-list01-listText">
              本サイトへのお問い合わせは、
              <a href="mailto:kasoutsuukachan@gmail.com" className="m-list01-link">
                kasoutsuukachan@gmail.com
              </a>
              までメールをお送りください。
              <br />
              お問い合わせ内容を拝見し、本サイト運営者が回答が必要と判断した場合には、合理的な期間内に対応させていただきます。
              <br />
              それ以外にも運営者への要望、指摘などありましたらお寄せください。
              <br />
              回答をお約束できるものではございませんが、いただいたご意見を拝見し、今後の運営の参考とさせていただきます。
            </dd>
            <dt className="m-list01-listTitle">
              <span className="m-list01-circle">
                2
              </span>
              <span className="m-list01-title">
                削除要請について
              </span>
            </dt>
            <dd className="m-list01-listText">
              本サイトの投稿への削除要請がございましたら、「スレッドのタイトル」「URL」「削除を要請する理由」の3点をご記入の上、
              <a href="mailto:kasoutsuukachan@gmail.com" className="m-list01-link">
                kasoutsuukachan@gmail.com
              </a>
              までメールをお送りくださいませ。
              <br />
              メールを拝見し、違法もしくは不適切な投稿であると判断できましたら、早急に削除などの対応をいたします。
            </dd>
          </dl>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Contact;
