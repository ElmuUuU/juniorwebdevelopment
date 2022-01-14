import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Junior Web Development</title>
      </Head>

      <Header />
      <Hero />
      <Footer />

      <Footer className="justify-center mx-auto max-w-7xl" />
    </div>
  );
}
