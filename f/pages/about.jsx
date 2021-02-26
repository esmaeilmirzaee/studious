import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Sign In | Esmaeil MIRZAEE's blog</title>
      </Head>
      <h1 className='mt-6 text-center text-indigo-700 font-bold text-4xl'>
        Resume
      </h1>
      <p className='mb-10 text-red-600 font-black text-center'>
        Now, I am actively looking for a job (remote, permanent).
      </p>
      <iframe
        id='resumePdf'
        src='https://esmaeilmirzaee.herokuapp.com/static/esmaeilmirzaee_resume.pdf'
        className='w-screen h-screen'
      ></iframe>
    </>
  );
}
