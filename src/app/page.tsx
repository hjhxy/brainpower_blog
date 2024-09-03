import MyHeader from './myheader';
import MyBody from './mybody'
import MyFooter from './myfooter'
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.header}>
        <MyHeader></MyHeader>
      </div>
      <div className={styles.body}>
        <MyBody></MyBody>
      </div>
      {/* <MyFooter></MyFooter> */}
    </main>
  );
}
