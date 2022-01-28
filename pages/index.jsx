import Head from "next/head";
import Image from "next/image";
import Hero from "/components/Hero";
import styles from "../styles/globals.css"

import React from 'react';

function index() {
  return <div className={styles.container}>
  <main >
  <Hero />
  </main>
  </div>;
}

export default index;

