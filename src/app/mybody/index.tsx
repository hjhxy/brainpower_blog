"use client";  // 将这个组件标记为客户端组件

import React from "react";
import styles from "./index.module.scss";
import Card from "../../components/card";
import jsonData from '../../../public/article_list.json';
import Link from "next/link";
import { useRouter } from "next/navigation";

const articles = jsonData.list;

export default function mybody() {
  const router = useRouter();

  const goArticleDetail = (id: number) => {
    router.push(`/article/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          {articles.map((article) => {
            return (
              <div className={styles.card} key={article.id} onClick={() => goArticleDetail(article.id)}>
                <Card {...article}></Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
