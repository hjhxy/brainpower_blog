import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';

interface IProps {
  id: number | string, // 文章 ID
  title: string,
  content: string,
  author: string,
  readCount: number | string, // 阅读数
  likeCount: number | string, // 点赞数
  commentsCount: number | string, // 评论数
  imgurl?: string
}

export default function index(props: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.content}>{props.content}</p>
        <div className={styles.detail}>
          <div className={styles.left_d}>
            <a href="/person">{props.author}</a>
            <a href="">👀{props.readCount}</a>
            <a href="">👍{props.likeCount}</a>
          </div>
          <div className={styles.right_d}>
            <a href="">前端</a>
            <a href="">Vue</a>
            <a href="">React</a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {props.imgurl && <Image src={props.imgurl} alt='文章封面' width={130} height={80}></Image>}
      </div>
    </div>
  )
}
