import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src='/logo512.png' width={64} height={64} />
        <h3>Esmaeil MIRZAEE</h3>
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
