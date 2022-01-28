import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Hero />
      </main>
    </div>
  );
}
