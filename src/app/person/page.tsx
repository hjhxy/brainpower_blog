import React from 'react'
import style from './index.module.scss';
import MyHeader from '../myheader';
import Card from '../../components/card';
import jsonData from '../../../public/article_list.json';

export default function index() {
  const articles = jsonData.list;
  return (
    <div>
      <MyHeader />
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.left}>
            <div className={style.authordetail}>
              <div className={style.leftimg}>
                <img src="/imgs/testheader.webp" alt="头像" />
              </div>
              <div className={style.rightmsg}>
                <div className={style.name}>伍六七</div>
                <div className={style.school}>🏫：深圳大学</div>
              </div>
            </div>
            <div className={style.articlelist}>
              {articles.map((article) => (<Card {...article} />))}
            </div>
          </div>
          <div className={style.right}>
            <div className={style.about}>
              <div className={style.title}>关于作者</div>
              <div className={style.detail}>
                <li>文章被阅读：1020</li>
                <li>文章被点赞：200</li>
              </div>
            </div>
            <div className={style.publish}>
              <div>
                <span>发布了</span>
                <span>30</span>
              </div>
              <div>
                <span>被订阅</span>
                <span>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
