import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='text-center h-screen mb-40'>
      <p className='text-center text-indigo-900 font-bold text-4xl mb-16'>
        Not found.
      </p>
      <span className='text-center'>
        Back to{' '}
        <a className='text-indigo-300 underline cursor-pointer mb-2' href='/'>
          home page
        </a>
      </span>
      <div className='flex items-center justify-center mb-16'>
        <img
          className='w-auto mt-10 mb-30'
          src='https://esmaeilmirzaee.herokuapp.com/static/img/not-found.svg'
        />
      </div>
    </div>
  );
};

export default NotFound;
