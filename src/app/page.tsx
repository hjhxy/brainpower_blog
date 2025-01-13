import MyHeader from '../layout/myheader';
import MyBody from '../layout/mybody'
import MyFooter from '../layout/myfooter'
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
