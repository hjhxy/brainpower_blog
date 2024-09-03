import React from 'react'
import styles from './index.module.scss';
import jsonData from '../../../public/article_list.json';

interface IProps {
    params: object
}

export default function index(props: IProps) {
    console.log('Iprops', props)
    return (
        <div>
            {111}
        </div>
    )
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
// 每次动态生成，执行效率略低。
export async function getServerSideProps({ params }: any) {
    const { id } = params;
    // 假设从数据库获取数据
    const { list } = jsonData;
    const data = list.find(({ id }) => (id == id));
    const article = await import(`../../../public/articles/${id}.md`);
    // console.log('article', article)
    return {
        props: {
            params: data,
        }
    }
}