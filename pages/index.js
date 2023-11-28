import Head from 'next/head'
import SubscribeBar from '@/components/subscribe/subscribe.component'



function Home(props) {
  return (
    <>
    
      <Head>
        <title>Lovelace Kendama</title>
        <meta name="description" content="Home of the Love Handle and Love Taq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <LandingBackground /> */}
        <SubscribeBar />
        </main>
    </>
  );
};

export default Home;