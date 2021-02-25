import { FaHeart } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className='justify-center text-center'>
      <h1 className='text-4xl text-center font-black text-indigo-800'>
        Aspiring Full Stack Developer
      </h1>
      <p className='text-xl font-medium text-indigo-600 mt-5 '>
        <div className='flex flex-row justify-center'>
          I design and code beautifully simple things and{' '}
          <FaHeart className='mx-2 text-red-600' /> what I do!
        </div>
      </p>
    </div>
  );
};

export default Hero;
