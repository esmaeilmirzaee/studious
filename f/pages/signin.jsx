const signin = () => {
  return (
    <div className='flex justify-center my-10'>
      <div className='w-96 border-2 border-indigo-400 rounded-lg p-10'>
        <img src='/logo512.png' className='w-15' />
        <div className=''>
          <input type='email' />
          <span></span>
          <label>Email</label>
        </div>
        <div className=''>
          <input type='password' />
          <span></span>
          <label>Password</label>
        </div>
        <div className=''>Forgot your password?</div>
        <input type='submit' className='' value='Login' />
      </div>
    </div>
  );
};

export default signin;
