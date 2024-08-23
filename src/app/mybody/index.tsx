import React from "react";
import styles from "./index.module.scss";
import Card from "../../components/card";

const articles = [
  {
    id: 1,
    title:
      "(一)EasyExcel初相识：万字吃透EasyExcel核心API，从此报表处理不再喊难！",
    content:
      "POI是报表处理领域的知名框架，可在大数量级的场景下，性能、资源利用可谓是一言难尽，报表操作一直转圈圈、频繁触发OOM，这让其在处理大文件时显得格外乏力，而EasyExcel则完美的避免了这两类问题~",
    author: "竹子爱熊猫",
    readCount: 10316, // 阅读数
    likeCount: 605, // 点赞数
    imgurl: "/imgs/testbg.webp",
  },
  {
    id: 2,
    title:
      "(一)EasyExcel初相识：万字吃透EasyExcel核心API，从此报表处理不再喊难！",
    content:
      "POI是报表处理领域的知名框架，可在大数量级的场景下，性能、资源利用可谓是一言难尽，报表操作一直转圈圈、频繁触发OOM，这让其在处理大文件时显得格外乏力，而EasyExcel则完美的避免了这两类问题~",
    author: "竹子爱熊猫",
    readCount: 10316, // 阅读数
    likeCount: 605, // 点赞数
    imgurl: "/imgs/testbg.webp",
  },
  {
    id: 3,
    title:
      "(一)EasyExcel初相识：万字吃透EasyExcel核心API，从此报表处理不再喊难！",
    content:
      "POI是报表处理领域的知名框架，可在大数量级的场景下，性能、资源利用可谓是一言难尽，报表操作一直转圈圈、频繁触发OOM，这让其在处理大文件时显得格外乏力，而EasyExcel则完美的避免了这两类问题~",
    author: "竹子爱熊猫",
    readCount: 10316, // 阅读数
    likeCount: 605, // 点赞数
    imgurl: "/imgs/testbg.webp",
  },
  {
    id: 4,
    title:
      "(一)EasyExcel初相识：万字吃透EasyExcel核心API，从此报表处理不再喊难！",
    content:
      "POI是报表处理领域的知名框架，可在大数量级的场景下，性能、资源利用可谓是一言难尽，报表操作一直转圈圈、频繁触发OOM，这让其在处理大文件时显得格外乏力，而EasyExcel则完美的避免了这两类问题~",
    author: "竹子爱熊猫",
    readCount: 10316, // 阅读数
    likeCount: 605, // 点赞数
    imgurl: "/imgs/testbg.webp",
  },
];

export default function mybody() {
  console.log(styles)
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          {articles.map((article) => {
            return (
              <div className={styles.card} key={article.id}>
                <Card {...article}></Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
