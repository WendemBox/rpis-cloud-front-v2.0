import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { HomeHeader } from "@/components/HomeHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>RPIS-Cloud</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <main className={styles.main}>
        <h1>Это главная страница</h1>
        <br></br>
        <span>Мы не придумали что тут написать :|</span>
        <p>
          Произведено и разработано специально для летней практики по заказу
          ПГУТИ
        </p>
      </main>
    </>
  );
}
