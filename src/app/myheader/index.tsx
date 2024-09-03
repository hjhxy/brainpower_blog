import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "github",
    link: "https://github.com/hjhxy",
    url: "/icons/github.png",
  },
  {
    label: "关于我们",
    link: "/about",
    // url: "/icons/github.png",
  },
];
const login = {
  label: "登录", // 已登录的用户才可以进入发表文章
  link: "/login",
  // url: "/icons/github.png",
};
const logout = {
  label: "退出登录",
  link: "/logout",
  // url: "/icons/github.png",
}
export default function myheader() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}><Link href="/">Branin Power Blogs</Link></div>
        <div className={styles.right}>
          <div className={styles.search}>
            <input type="text" placeholder="输入文章关键词搜索..." />
          </div>
          <div className={styles.links}>
            {links.map((link) => {
              return (
                <a className={styles.link} key={link.link} href={link.link}>
                  {link.url ? (<Image
                    src={link.url}
                    width={30}
                    height={30}
                    alt="github"
                  ></Image>) : (<span>{link.label}</span>)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
