import styles from '../styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <h1>Welcome</h1>
        <img src='/logo512.png' />
        <div className={styles.inputs}>
          <input type='email' />
          <span></span>
          <label>Email</label>
        </div>
        <div className={styles.inputs}>
          <input type='password' />
          <span></span>
          <label>Password</label>
        </div>
        <div className={styles.pass}>Forgot your password?</div>
        <input type='submit' className={styles.button} value='Login' />
      </div>
    </div>
  );
};

export default Login;
