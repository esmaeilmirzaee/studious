import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src='/logo512.png' width={64} height={64} />
        {/* <h5 style={{ visibility: 'invisible' }}>Esmaeil MIRZAEE</h5> */}
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.nav__links}>
          <li className={styles.nav__item}>
            <Link href='/about'>About</Link>
          </li>
          <li className={styles.nav__links}>
            <Link href='/posts'>Posts</Link>
          </li>
        </ul>
        <a>
          <button>Sign In</button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
