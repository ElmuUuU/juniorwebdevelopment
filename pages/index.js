import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Junior Web Development</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Test</h1>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
