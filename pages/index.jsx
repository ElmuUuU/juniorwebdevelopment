import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Image
        className="w-full h-screen"
        src="/background.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <Head>
        <title>Junior Web Development</title>
      </Head>

      <Header className="z-50" />
      <Hero />
      <Footer />
    </div>
  );
}
