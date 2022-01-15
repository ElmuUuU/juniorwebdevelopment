import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Junior Web Development</title>
      </Head>
      <Image
        className="w-full h-screen"
        src="/background.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
