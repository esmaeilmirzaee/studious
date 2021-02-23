import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='logo'>
        <h1>Ninja List</h1>
      </div>
      <div className={styles.nav__item}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
