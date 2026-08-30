import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoImg from '../../../assets/img/logo_pandaFace.svg';
import { LoginBtn } from '../Button/LoginButton';
import { useDeviceType } from '../../../hooks/useDeviceType';

function Header() {
  const deviceType = useDeviceType();
  return (
    <header className={`${styles.header} ${styles[`header--${deviceType}`]}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerInfo}>
          <Link to="/" className={styles.logo}>
            <img src={logoImg} alt="판다마켓 로고" />
            판다마켓
          </Link>
          <nav className={styles.nav}>
            <Link to="/" className={styles.navContainer}>
              자유게시판
            </Link>
            <Link to="/items" className={styles.navContainer}>
              중고마켓
            </Link>
          </nav>
        </div>
        <LoginBtn />
      </div>
    </header>
  );
}

export default Header;
