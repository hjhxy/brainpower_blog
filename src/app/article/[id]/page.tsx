import React, { use } from 'react'
import styles from './index.module.scss';
import jsonData from '../../../../public/article_list.json';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';
import Header from '@/app/myheader';

interface IProps {
    // params: {
    article?: {
        author: string,
        commentsCount: number,
        content: string,
        id: number,
        imgurl: string,
        likeCount: number,
        readCount: number,
        title: string,
    },
    contentHtml: string,
    [key: string]: any, // 索引签名
    // },
}
async function getArticleData(id: string): Promise<IProps> {
    const article = jsonData.list.find((item: any) => item.id == id);
    // 读取 Markdown 文件内容
    const filePath = path.join(process.cwd(), 'public', 'articles', `${id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // 使用 gray-matter 解析 markdown 文件中的元数据
    const { data, content } = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();
    return {
        article,
        contentHtml,
    }
};

export default function index({ params }: { params: { id: string } }) {
    const { article, contentHtml } = use(getArticleData(params.id));
    // console.log('article', params, article, contentHtml);
    if (!article) return (
        <div className={styles.container}>
            <Header></Header>
            <p>Article Not Found</p>
        </div>
    )

    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.body}>
                <div className={styles.controls}>
                    操作按钮
                </div>
                <div className={styles.main}>
                    <div className={styles.article}>
                        <h1 className={styles.title}>{article.title}</h1>
                        <div className={styles.detail}>
                            <a href='#'>{article.author}</a>
                            <span>
                                {/* <i className='iconfont icon-comment'></i> */}
                                👀 {article.readCount}
                            </span>
                            <span>⌚️阅读6分钟</span>
                        </div>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
                    </div>
                    <div className={styles.comment}>
                        评论区
                    </div>
                </div>
                <div className={styles.help}>
                    <div className={styles.aboutAuth}>关于作者</div>
                    <div className={styles.catalogue}>目录</div>
                    <div className={styles.recommend}>推荐文章</div>
                </div>
            </div>
        </div>
    )
}

/* Nextjs 14.2 通过 generateStaticParams+use 动态获取 */
// 使用 generateStaticParams 生成静态路径
export async function generateStaticParams() {
    const paths = jsonData.list.map((article: any) => ({ id: article.id + '' }));
    return paths;
}

// 只有在编译打包代码的时候执行一次，即一次性生成所有页面，后续不运行。
// 缺点是如果数据库有更新的话每次都需要重新打包代码(也可以设置revalidate间隔时间，在指定时间间隔内打包)。
// 但是就算设置了间隔也没有办法保证及时更新，比如有实时点赞，刷新后访问仍然未更新。
// 如果实时性不强推荐使用，渲染效率较高.
// export async function getStaticProps({ params }: any) {
//     const { id } = params;
//     // 请求一次数据
//     const data = jsonData;
//     return {
//         props: {
//             params: jsonData,
//         }
//     }
// }

// 编译的时候不执行，客户端请求当前页面时执行逻辑，并生成页面内容返回。
// 每次动态生成，执行效率略低。但是实时性高
// export async function getServerSideProps({ params }: any) {
//     const { id } = params;
//     // 假设从数据库获取数据
//     const { list } = jsonData;
//     const article = list.find(({ id }) => (id == id));
//     // const article = await import(`../../../public/articles/${id}.md`); // 缺点是可能设计到编码问题

//     // 读取 Markdown 文件内容
//     const filePath = path.join(process.cwd(), 'public', 'articles', `${id}.md`);
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     // const htmlContent = marked(fileContents);

//     // 使用 gray-matter 解析 markdown 文件中的元数据
//     const { data, content } = matter(fileContents);

//     // 使用 remark 将 markdown 转换为 html 字符串
//     const processedContent = await remark()
//         .use(html)
//         .process(content);
//     const contentHtml = processedContent.toString();
//     return {
//         props: {
//             params: {
//                 article,
//                 contentHtml,
//                 ...data,
//             },
//             // fileContents
//         }
//     }
// }