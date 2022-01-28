import Head from "next/head";
import Image from "next/image";
import Hero from "/components/Hero";
import styles from '../styles/Home.module.css'

import React from 'react';

function index() {
  return <div className={styles.container}>
  <main className={styles.main}>
  <Hero />
  </main>
  </div>;
}

export default index;

