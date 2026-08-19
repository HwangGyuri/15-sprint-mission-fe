import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export function LoginBtn() {
  return (
    <>
      <Link to="/" className={styles.BtnLogIn}>
        로그인
      </Link>
    </>
  );
}
