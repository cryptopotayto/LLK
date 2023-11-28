import Layout from '@/components/layout/layout.component';
import '@/styles/globals.css'
import Head from 'next/head';


function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default App;