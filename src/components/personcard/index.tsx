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
    return (
        <div className={styles.container}>

        </div>
    )
}

export default PersonCard