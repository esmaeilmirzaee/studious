import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Esmaeil MIRZAEE | Posts</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <footer className='absolute sticky left-0 bottom-0'>
        <Footer />
      </footer>
    </>
  );
}

export default MyApp;
