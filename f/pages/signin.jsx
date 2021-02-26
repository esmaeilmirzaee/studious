const signin = () => {
  return (
    <div className='flex justify-center my-10'>
      <div className='w-96 border-2 shadow-2xl rounded-lg p-10'>
        <img src='/logo512.png' className='justify-self-center w-15 mb-20' />
        <div className='block'>
          <span></span>
          <input
            type='email'
            className='form-input block mt-1 w-full p-2 border-2 border-indigo-100 rounded-lg'
            placeholder='Email'
          />
        </div>
        <div className='block mt-4'>
          <span></span>
          <input
            className='form-input block mt-1 w-full p-2 border-2 border-indigo-100 rounded-lg'
            type='password'
            placeholder='Password'
          />
        </div>
        <div className='mt-5 text-indigo-600 cursor-pointer hover:text-indigo-900 text-center'>
          Forgot your password?
        </div>
        <input
          type='submit'
          className='w-full text-indigo-100 bg-indigo-800 px-10 py-2 rounded-lg mt-10 cursor-pointer hover:bg-indigo-100 hover:text-indigo-800 transition ease-linear duration-75'
          value='Login'
        />
      </div>
    </div>
  );
};

export default signin;
