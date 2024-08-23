import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const links = [
  {
    label: "github",
    link: "https://github.com/hjhxy",
    url: "/icons/github.png",
  },
];
export default function myheader() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>Branin Power Blogs</div>
        <div className={styles.right}>
          <div className={styles.search}>
            <input type="text" placeholder="输入文章关键词搜索..." />
          </div>
          <div className={styles.links}>
            {links.map((link) => {
              return (
                <a className={styles.link} key={link.link} href={link.link}>
                  <Image
                    src={link.url}
                    width={30}
                    height={30}
                    alt="github"
                  ></Image>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
