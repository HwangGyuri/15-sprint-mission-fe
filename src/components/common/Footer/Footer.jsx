import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import facebook from '../../../assets/img/ic_facebook.svg';
import twitter from '../../../assets/img/ic_twitter.svg';
import youtube from '../../../assets/img/ic_youtube.svg';
import instagram from '../../../assets/img/ic_instagram.svg';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.infoLeft}>©codeit - 2024</div>
        <div className={styles.infoMiddle}>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">FAQ</Link>
        </div>
        <div className={styles.infoRight}>
          <img src={facebook} />
          <img src={twitter} />
          <img src={youtube} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
}
export default Footer;
