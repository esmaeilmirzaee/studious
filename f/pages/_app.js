import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../comps/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
