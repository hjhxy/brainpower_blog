"use client"; // 申明为客户端组件

import React, { useState } from 'react'
import styles from './index.module.scss';
import MyHeader from '../myheader/index';
import PersonCard from '../../components/personcard';

export default function index() {
  const [persons, setPersons] = useState([
    { name: 'zxy', age: 18, school: '深圳大学计算机与软件学院', avatarUrl: '', introduce: '' },
    { name: 'ind', age: 20, school: '深圳大学计算机与软件学院', avatarUrl: '', introduce: '' },
    { name: 'Lily', age: 17, school: '深圳大学计算机与软件学院', avatarUrl: '', introduce: '' },
  ]);
  return (
    <div className={styles.container}>
      <MyHeader />
      <div className={styles.main}>
        {persons.map((p) => (<PersonCard detail={p} />))}
      </div>
    </div>
  )
}
