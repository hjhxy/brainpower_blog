import React, { FC } from 'react'
import styles from './index.module.scss';

interface Iprops {
    detail: {
        name: string,
        age?: number,
        school?: string,
        avatarUrl?: string,
        introduce?: string
    },
    [key: string]: any
}

const PersonCard: FC<Iprops> = (props) => {
    const { detail } = props;
    console.log(detail.avatarUrl)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.avatar} src={detail.avatarUrl} alt="avatar" />
            </div>
            <div className={styles.info}>
                <h2>{detail.name}</h2>
                {<p>Age: {detail.age || "秘"}</p>}
                {<p>School: {detail.school || "秘"}</p>}
                {<p>introduce: {detail.introduce || "暂无"}</p>}
            </div>
        </div >
    )
}

export default PersonCard;