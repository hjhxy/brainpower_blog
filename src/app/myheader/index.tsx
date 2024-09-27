"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";


const baselinks = [
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
]
const loginlink = {
  label: "登录", // 已登录的用户才可以进入发表文章
  link: "/login",
  // url: "/icons/github.png",
};
const logoutlink = {
  label: "退出登录",
  link: "/logout",
  // url: "/icons/github.png",
}
const editarticlelink = {
  label: "编辑文章",
  link: "/edit",
  // url: "/icons/github.png",
}

export default function myheader() {
  const [links, setLinks] = useState(baselinks);
  const [isLogin, setIsLogin] = useState(true); // 假设已登录
  useEffect(() => {
    setLinks([...links, logoutlink, editarticlelink]);
  }, [isLogin])
  return (
    <div className={styles['container-relative']}>
      <div className={styles.position}>
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
    </div>
  );
}
