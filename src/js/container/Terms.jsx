import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BackHome from '../components/BackHome';
import Footer from '../components/Footer';

const Terms = () => (
  <div>
    <Header />
    <div className="l-container">
      <h2 className="m-title01">
        利用規約
      </h2>
      <div className="l-container-main02">
        <div className="m-list01">
          <dl className="m-list01-listBlock">
            <dt className="m-list01-listTitle">
              第1条（総則）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.この利用規約（以下「本利用規約」といいます）は、本ウェブサイト「仮想通貨.ch」（以下「本サイト」といいます）上で提供するサービスを
                  ユーザーが利用する際の一切の行為に適用されます。
                </li>
                <li className="m-list01-listText02">
                  2.本利用規約は、本サービスの利用条件を定めるものです。ユーザーは、本利用規約に従い本サービスを利用するものとします。
                </li>
                <li className="m-list01-listText02">
                  3.ユーザーは、本サービスを利用することにより、本利用規約の全ての記載内容について同意したものとみなされます。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第2条（定義）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本利用規約において使用する用語の意義は、次の各号に定めるとおりとします。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a.本サイト：ウェブサイト「仮想通貨.ch」（
                      <Link to="/" className="m-list01-link">
                        https://kasoutsuukachan.com/
                      </Link>
                      ）をいいます。
                    </li>
                    <li className="m-list01-listText02">
                      b.本サービス：本サイト上で提供される全てのサービスをいいます。
                    </li>
                    <li className="m-list01-listText02">
                      c.ユーザー：本サイトを閲覧した者をいいます。
                    </li>
                    <li className="m-list01-listText02">
                      d.コメント等の情報：テキスト、URL、画像など、本サービスを利用して投稿できる情報をいいます。
                    </li>
                    <li className="m-list01-listText02">
                      e.投稿：ユーザーが本サイトにコメント等の情報をアップロードする行為をいいます。
                    </li>
                  </ul>
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第3条（本利用規約の範囲）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サイトには、本利用規約及び関連する諸規定、諸通知が適用されます。本利用規約以外にも、
                  本サイトが随時ユーザーに対して通知した諸規定、諸通知は、通知の時点で本規約の一部を構成するものとし、ユーザーはこれを承諾するものとします。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第4条（本利用規約の変更）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サイトは、本サイト運営者の判断により、本利用規約をいつでも任意の理由で変更することができるものとします。
                </li>
                <li className="m-list01-listText02">
                  2.変更後の利用規約は、本サイトが別途定める場合を除いて、本サイト上に表示した時点より効力を生じるものとします。
                </li>
                <li className="m-list01-listText02">
                  3.ユーザーが、本利用規約の変更の効力が生じた後に本サービスをご利用になる場合には、変更後の利用規約の全ての記載内容に同意したものとみなされます。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第5条（プライバシー）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.個人情報の取り扱い
                  <br />
                  本サイトは、取得した個人情報を以下の目的のために利用いたします。
                  <br />
                  ただし、個人情報保護法第16条第3項各号に該当する場合は、 あらかじめ特定し公表した利用目的の達成に必要な範囲を超えてユーザーの個人情報を取り扱うことがあります。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a.IDの表示：本サイトでは、コメント等の情報を投稿する際のID表示に、IPアドレス等の接続元情報を使用いたします。
                    </li>
                    <li className="m-list01-listText02">
                      b.アクセス解析：本サイトでは、Google Analyticsをはじめとするアクセス解析を利用いたします。
                      <br />
                      本サイトを経由してアクセス解析に収集されたデータは、アクセス解析を提供する各社のプライバシーポリシーに基づいて管理されます。
                    </li>
                    <li className="m-list01-listText02">
                      c.広告表示：本サイトでは、Googleを含む第三者の広告配信事業者がCookieを使用して、ユーザーのウェブサイトでの閲覧履歴に基づく広告を配信します。
                      <br />
                      Cookieを使用することにより、広告配信事業者およびそのパートナーは本サイトや他のサイトへのアクセス情報に基づいた広告をユーザーに表示いたします。
                    </li>
                    <li className="m-list01-listText02">
                      d.規約違反への対処：本サイトでは、本規約に違反するコメント等の情報が投稿された場合、
                      アクセス禁止措置、投稿禁止措置、コメント等の情報の全部もしくは一部を削除することがあります。
                    </li>
                    <li className="m-list01-listText02">
                      e.違法行為への対処：本サイトでは、違法行為とみられるコメント等の情報が投稿された場合、
                      IPアドレス等の接続元情報を元に関係機関と連携し法的措置を取ることがあります。
                    </li>
                    <li className="m-list01-listText02">
                      f.その他、本サイトが対処が必要であると判断する行為があった場合
                    </li>
                  </ul>
                </li>
                <li className="m-list01-listText02">
                  2.本サイトでは、ユーザーの個人情報について、ユーザー本人の同意を得ずに第三者に提供することは原則としておこないません。
                  <br />
                  ただし、以下の場合はこの限りではありません。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a.法令に基づく場合
                    </li>
                    <li className="m-list01-listText02">
                      b.人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき
                    </li>
                    <li className="m-list01-listText02">
                      c.公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき
                    </li>
                    <li className="m-list01-listText02">
                      d.国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、
                      ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                    </li>
                    <li className="m-list01-listText02">
                      e.本サイトが業務を委託する他の事業者に対し、個人情報保護法第23条4項1号に基づいて利用目的に必要な範囲で情報を預託するとき
                    </li>
                  </ul>
                </li>
                <li className="m-list01-listText02">
                  3.以下の場合は、第三者による個人情報の取得に関し、本サイトは何らの責任を負いません。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a.ユーザー本人が本サイトの機能または別の手段を用いて第三者に個人情報を明らかにした場合
                    </li>
                    <li className="m-list01-listText02">
                      b.ユーザー本人が本サイトに入力し公開した情報等により、個人が識別できてしまった場合
                    </li>
                  </ul>
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第6条（通信の秘密）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サイトは、電気通信事業法（昭和59年法律第86号）第4条に基づき、ユーザーの通信の秘密を守ります。
                </li>
                <li className="m-list01-listText02">
                  2.本サイトは、次の各号に掲げる場合には、当該各号に定める範囲内において前項の守秘義務を負わないものとします。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a.刑事訴訟法（昭和23年法律第131号）又は犯罪捜査のための通信傍受に関する法律（平成11年法律第137号）の定めに基づく
                      強制の処分又は裁判所の命令が行われた場合、当該処分又は裁判所の命令の定める範囲内
                    </li>
                    <li className="m-list01-listText02">
                      b.法令に基づく強制的な処分が行われた場合、当該処分又は命令の定める範囲内
                    </li>
                    <li className="m-list01-listText02">
                      c.特定電気通信役務提供者の損害賠償責任の制限及び発信者情報の開示に関する法律（平成13年法律第137号）第4条に基づく
                      開示請求の要件が充足されたと本サイトが判断した場合、当該開示請求の範囲内
                    </li>
                    <li className="m-list01-listText02">
                      d.他人の生命、身体又は財産の保護のために必要があると本サイトが判断した場合、他人の生命、身体又は財産の保護のために必要な範囲内
                    </li>
                  </ul>
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第7条（本サービスの利用環境の整備）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.ユーザーは、本サービスを利用するにあたり、あらゆる機器、ソフトウェア、通信手段を自己の責任と費用において、適切に整備するものとします。
                </li>
                <li className="m-list01-listText02">
                  2.ユーザーは自己の利用環境に応じて、コンピューター・ウィルスの感染の防止、不正アクセス及び情報漏洩の防止等のセキュリティ対策を講じるものとします。
                </li>
                <li className="m-list01-listText02">
                  3.本サイトはユーザーの利用環境について一切関与せず、また一切の責任を負いません。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第8条（ユーザーの責任）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.ユーザーは、ユーザー自身の自己責任において本サービスを利用するものとし、本サービスを利用してなされた一切の行為及びその結果について一切の責任を負います。
                </li>
                <li className="m-list01-listText02">
                  2.本サービスを利用してユーザーが投稿したコメント等の情報に関する責任は、ユーザー自身にあります。
                  <br />
                  本サイトはユーザーが本サービスを利用して投稿したコメント等の情報の内容について、一切責任を負いません。
                </li>
                <li className="m-list01-listText02">
                  3.ユーザーが他人の名誉を毀損した場合、プライバシー権を侵害した場合、許諾なく第三者の個人情報を開示した場合、
                  著作権法（昭和45年法律第48号）に違反する行為を行った場合その他他人の権利を侵害した場合には、
                  当該ユーザーは自身の責任と費用において解決しなければならず、本サイトは一切の責任を負いません。
                </li>
                <li className="m-list01-listText02">
                  4.ユーザーは、ユーザーが本サービスを利用して投稿したコメント等の情報について本サイトに保存義務がないことを認識し、
                  必要なコメント等の情報については適宜バックアップをとるものとします。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第9条（禁止事項）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.ユーザーは、本サービスの利用に際して、以下に定める行為を行ってはならないものとします。
                  <br />
                  禁止事項に違反した場合には、アクセス禁止措置、投稿禁止措置、コメント等の情報の全部もしくは一部の削除、又は公開範囲の変更等の不利益な措置を採ることがあります。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a.本サイトもしくは他者の著作権、商標権等の知的財産権を侵害する行為、又は侵害するおそれのある行為。
                    </li>
                    <li className="m-list01-listText02">
                      b.本サイトもしくは他者の財産、プライバシーもしくは肖像権を侵害する行為、又は侵害するおそれのある行為。
                    </li>
                    <li className="m-list01-listText02">
                      c.本サイトもしくは他者を不当に差別もしくは誹謗中傷し、他者への不当な差別を助長し、又はその名誉もしくは信用を毀損する行為。
                    </li>
                    <li className="m-list01-listText02">
                      d.自分以外の人物を名乗ったり、代表権や代理権がないにもかかわらずあるものと装ったり、
                      又は他の人物や組織と提携、協力関係にあると偽って本サービスを利用する行為。
                    </li>
                    <li className="m-list01-listText02">
                      e.詐欺、規制薬物の濫用、児童売買春、預貯金口座及び携帯電話の違法な売買等の犯罪に結びつく、又は結びつくおそれのある行為。
                    </li>
                    <li className="m-list01-listText02">
                      f.わいせつ、児童ポルノ又は児童虐待に相当するコメント等の情報を投稿、販売、広告又は表示する行為を行うこと。
                    </li>
                    <li className="m-list01-listText02">
                      g.性行為、わいせつな行為等を目的として利用する行為。
                    </li>
                    <li className="m-list01-listText02">
                      h.面識のない異性との出会い等を目的として利用する行為。
                    </li>
                    <li className="m-list01-listText02">
                      i.青少年の家出を誘引・助長する行為。
                    </li>
                    <li className="m-list01-listText02">
                      j.違法な賭博・ギャンブルを行わせ、又は違法な賭博・ギャンブルへの参加を勧誘する行為。
                    </li>
                    <li className="m-list01-listText02">
                      k.違法行為（けん銃等の譲渡、爆発物の製造、児童ポルノの提供、公文書偽造、殺人、脅迫等）を請け負い、仲介し、又は誘引する行為。
                    </li>
                    <li className="m-list01-listText02">
                      l.他人を自殺に誘引又は勧誘する行為。
                    </li>
                    <li className="m-list01-listText02">
                      m.残虐行為（人の殺害、傷害、その他残虐な行為）に相当するコメント等の情報を投稿し、又は表示する行為。
                    </li>
                    <li className="m-list01-listText02">
                      n.商業用の広告、宣伝又は勧誘を目的とするコメント等の情報
                      （アフィリエイト、無限連鎖講（ネズミ講）、チェーンメール、MLM、リードメール、アダルトサイト、ワンクリック詐欺サイト、
                      ウィルス等の有害なコンピュータプログラム等を流布させることを目的とするサイト等を含む）、
                      その他本サイトが不適切と判断するコメント等の情報を投稿し、又は表示する行為。
                    </li>
                    <li className="m-list01-listText02">
                      o.自己または第三者の住所、電話番号、メールアドレス等の個人が特定される連絡先を投稿する行為。
                    </li>
                    <li className="m-list01-listText02">
                      p.スパムコメント、スパムトピック投稿及びその他本サイトがスパムと判断する行為。
                    </li>
                    <li className="m-list01-listText02">
                      q.本サイトの設備に蓄積された情報を不正に書き換え、又は消去する行為。
                    </li>
                    <li className="m-list01-listText02">
                      r.ウィルス等の有害なコンピュータプログラム等を送信又は掲載する行為。
                    </li>
                    <li className="m-list01-listText02">
                      s.本サイト又は他者のサーバーに負担をかける行為、もしくは、本サービスの運営やネットワーク・システムに支障を与える行為、又はこれらのおそれのある行為。
                    </li>
                    <li className="m-list01-listText02">
                      t.その行為が前各号のいずれかに該当することを知りつつ、その行為を助長する目的でリンクを貼る行為。
                    </li>
                    <li className="m-list01-listText02">
                      u.法令、公序良俗又は本利用規約に違反し、又は他者の権利を侵害すると本サイトが判断する行為。
                    </li>
                    <li className="m-list01-listText02">
                      v.その他、本サイトが不適切と判断する行為。
                    </li>
                  </ul>
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第10条（サービスの追加・変更等）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サイトは、本サービスをいつでも任意の理由で追加、変更、中断、終了することができます。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第11条（利用料金）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サイトおよび本サービスは無料とします。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第12条（コメント等の情報に関する権利）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サービスを利用してコメント等の情報を投稿するユーザーは、本サイトに対し、当該コメント等の情報が第三者の権利を侵害していないことを保証するものとします。
                  <br />
                  万一、第三者との間で何らかの紛争が発生した場合には、当該ユーザーの費用と責任において問題を解決するとともに、本サイトに何等の迷惑又は損害を与えないものとします。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第13条（コメント等の情報の使用許諾等）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サービスを利用して投稿されたコメント等の情報の権利（著作権および著作者人格権等の周辺権利）は、創作したユーザーに帰属します。
                </li>
                <li className="m-list01-listText02">
                  2.本サイトにコメント等の情報を投稿したユーザーは、本サイトの運営者および運営者が許諾した第三者に対し、
                  自身が投稿したコメント等の情報の二次利用（引用、転載、複製、翻案、研究・開発・調査のための利用等）を許諾するものとします。
                </li>
                <li className="m-list01-listText02">
                  3.本サイトが前項に定める形でコメント等の情報を使用するにあたっては、情報の一部を省略することができるものとします。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第14条（免責事項）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サイトは、ユーザーの通信や活動に関与しません。万一ユーザー間の紛争があった場合でも、当該ユーザー間で解決するものとし、本サイトはその責任を負いません。
                </li>
                <li className="m-list01-listText02">
                  2.本サイトは、本サービスの内容の追加、変更、又は本サービスの中断、終了によって生じたいかなる損害についても、一切責任を負いません。
                  <br />
                  アクセス過多、その他予期せぬ要因で表示速度の低下や障害等が生じた場合も同様とします。
                </li>
                <li className="m-list01-listText02">
                  3.本サイトは、ユーザーによって投稿されるコメント等の情報を監視したり、保存する義務を負いません。
                </li>
                <li className="m-list01-listText02">
                  4.本サイトは、ユーザーによって投稿されるコメント等の情報の合法性、道徳性、信頼性、正確性について責任を負いません。
                  <br />
                  ユーザーによって投稿されるコメント等の情報が、当該ユーザーが所属する法人・団体等の内部規則等に適合することについても、責任を負いません。
                  <br />
                  本サイトは、本利用規約に違反する行為又はそのおそれのある行為が行われたと信じるに足りる相当な理由があると判断した場合には、
                  当該行為を行ったユーザーのアクセス禁止措置、投稿禁止措置、コメント等の情報の全部もしくは一部の削除、
                  及び公開範囲の変更等を行う場合がありますが、それによって生じたいかなる損害についても、一切責任を負いません。
                </li>
                <li className="m-list01-listText02">
                  5.本利用規約が消費者契約法（平成12年法律第61号）第2条第3項の消費者契約に該当する場合には、
                  本利用規約のうち、本サイトの損害賠償責任を完全に免責する規定は適用されないものとします。
                  <br />
                  この場合においてユーザーに発生した損害が本サイトの債務不履行又は不法行為に基づくときは、本サイトは、
                  当該ユーザーが直接被った損害を上限として損害賠償責任を負うものとします。
                  <br />
                  ただし、本サイトに故意又は重過失がある場合に限ります。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第15条（本サイトの削除権限）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本サイトは、次に掲げる場合には、コメント等の情報の違法性・規約違反の有無に関わらず、関連するコメント等の情報について、
                  その全部もしくは一部の削除又は公開範囲の変更等の不利益な措置を行うことができるものとします。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a.人（実在の人物であるか否かを問わず、漫画・アニメ等のキャラクターを含みます）の裸体（着衣の全部又は一部を欠くものをいいます）を
                      撮影・描写したコメント等の情報が投稿された場合。
                    </li>
                    <li className="m-list01-listText02">
                      b.公的な機関又は専門家（国、地方公共団体、特定電気通信役務提供者の損害賠償責任の制限及び発信者情報の開示に関する法律のガイドラインに
                      規定された信頼性確認団体、インターネット・ホットラインセンター、弁護士等をいいます）から、コメント等の情報について、
                      違法、公序良俗違反又は他人の権利を侵害する等の指摘・意見表明があった場合。
                    </li>
                    <li className="m-list01-listText02">
                      c.権利者と称する者から、コメント等の情報が自分の権利を侵害する旨の申告があった場合。
                      <br />
                      ただし、権利者と称する者から、権利者であることを合理的に判断できる資料を提示され、本サイトにて慎重に検討した結果、
                      権利者であると本サイトが判断した場合に限る。
                    </li>
                  </ul>
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第16条（本利用規約の有効性）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本利用規約の規定の一部が法令に基づいて無効と判断されても、本利用規約のその他の規定は有効とします。
                </li>
                <li className="m-list01-listText02">
                  2.利用規約等の規定の一部があるユーザーとの関係で無効とされ、又は取り消された場合でも、利用規約等はその他のユーザーとの関係では有効とします。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第17条（本利用規約の違反行為等への対処）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本利用規約に違反する行為を発見した場合には、「お問い合わせ」から通報してください。
                </li>
                <li className="m-list01-listText02">
                  2.ユーザーが本利用規約に違反したと認められる場合、その他本サイトが必要と認める場合は、本サイトは当該ユーザーに対し以下の対処を講ずることがあります。
                  <ul className="m-list01-listBLock03">
                    <li className="m-list01-listText02">
                      a本利用規約に違反する行為等を止め、同様の行為を繰り返さないことを要求すること。
                    </li>
                    <li className="m-list01-listText02">
                      b.コメント等の情報の全部もしくは一部を削除し、公開範囲を変更し、又は閲覧できない状態（非公開）にすること。
                    </li>
                    <li className="m-list01-listText02">
                      c.アクセス禁止措置、投稿禁止措置を取ること。
                    </li>
                    <li className="m-list01-listText02">
                      d.IPアドレス等の接続元情報を元に関係機関と連携し法的措置を取ること。
                    </li>
                    <li className="m-list01-listText02">
                      3.ユーザーは、本サイトが第9条、第15条および本条第2項の規定に基づいて行った本利用規約に違反する行為等への対処について、
                      異議を申し立てることはできないものとします。
                    </li>
                  </ul>
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第18条（準拠法）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.本利用規約の準拠法は、日本法とします。
                </li>
              </ol>
            </dd>
            <dt className="m-list01-listTitle">
              第19条（管轄裁判所）
            </dt>
            <dd className="m-list01-listText">
              <ol className="m-list01-listBLock02">
                <li className="m-list01-listText02">
                  1.ユーザーと本サイトの間で訴訟の必要が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </li>
              </ol>
            </dd>
          </dl>
          <p className="m-list01-text">
            制定日 平成30年2月1日
          </p>
        </div>
      </div>
      <BackHome />
      <Footer />
    </div>
  </div>
);

export default Terms;
