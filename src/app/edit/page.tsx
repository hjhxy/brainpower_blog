import React from 'react'
import styles from './index.module.scss';
import MyHeader from '../myheader';

export default function index() {
    return (
        <div className={styles.container}>
            <MyHeader />
            <div className={styles.main}>
                <div className={styles.richtext}>
                    <div className={styles.header}>
                        这是富文本的操作栏
                        <div className={styles.toolbar}>
                            <button>插入图片</button>
                            <button>插入表格</button>
                            <button>插入代码</button>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.editor}>
                            <textarea placeholder="在此输入文字"></textarea>
                        </div>
                        <div className={styles.preview}>
                            <div className={styles.preview_content}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
