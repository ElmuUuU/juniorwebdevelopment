import Head from "next/head";
import Hero from "../components/Hero";
import Searchinput from "../components/Searchinput";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Hero />
      <Searchinput />
    </div>
  );
}
