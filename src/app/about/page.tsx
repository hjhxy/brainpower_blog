"use client"; // 申明为客户端组件

import React, { useState } from 'react'
import styles from './index.module.scss';
import MyHeader from '../myheader/index';
import PersonCard from '../../components/personcard';

export default function index() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'zxy', age: 18, school: '深圳大学计算机与软件学院', avatarUrl: '/imgs/testheader.webp', introduce: '' },
    { id: 2, name: 'ind', age: 20, school: '深圳大学计算机与软件学院', avatarUrl: '/imgs/testheader.webp', introduce: '' },
    { id: 3, name: 'Lily', age: 17, school: '深圳大学计算机与软件学院', avatarUrl: '/imgs/testheader.webp', introduce: '' },
    { id: 4, name: 'zxy', age: 18, school: '深圳大学计算机与软件学院', avatarUrl: '/imgs/testheader.webp', introduce: '' },
    { id: 5, name: 'ind', age: 20, school: '深圳大学计算机与软件学院', avatarUrl: '/imgs/testheader.webp', introduce: '' },
    { id: 6, name: 'Lily', age: 17, school: '深圳大学计算机与软件学院', avatarUrl: '/imgs/testheader.webp', introduce: '' },
  ]);
  return (
    <div className={styles.container}>
      <MyHeader />
      <div className={styles.main}>
        <div className={styles.center}>
          {persons.map((p) => (
            <div className={styles.card} key={p.id}>
              <PersonCard detail={p} />
            </div>))}
        </div>
      </div>
    </div>
  )
}
