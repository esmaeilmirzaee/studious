import Head from 'next/head';
import Hero from '../comps/home/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Esmaeil MIRZAEE</title>
        <keyword>Portfolio</keyword>
      </Head>
      <div className='mx-24 my-5'>
        <Hero />
      </div>
    </>
  );
}
