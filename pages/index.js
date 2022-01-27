import Head from 'next/head';
import Layout from "../src/components/layout";
import Slider from "../src/components/hero";
import HomeContent from "../src/components/contents";

function Home () {
    return (
      <Layout>
          <Head>
              <title>Ninja Studios</title>
              <link rel="icon" href="/favicon.ico"/>
          </Head>
          <Slider />
          <HomeContent />
      </Layout>
    )
}

export default Home