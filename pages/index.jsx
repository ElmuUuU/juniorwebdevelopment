import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Junior Web Development</title>
      </Head>

      <main className="max-w-7xl">
        <h1 className={styles.title}>Start game</h1>
      </main>

      <Footer />
    </div>
  );
}
