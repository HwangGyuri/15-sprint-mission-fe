import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useDeviceType } from '@/hooks/useDeviceType';

import facebook from '@/assets/img/ic_facebook.svg';
import twitter from '@/assets/img/ic_twitter.svg';
import youtube from '@/assets/img/ic_youtube.svg';
import instagram from '@/assets/img/ic_instagram.svg';

const mobileFooter = (
  <div className={`${styles.footer} ${styles[`footer--mobile`]}`}>
    <div
      className={`${styles.footerContainer} ${styles[`footerContainer--mobile`]}`}
    >
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
      <div className={`${styles.infoLeft} ${styles[`infoLeft--mobile`]}`}>
        ©codeit - 2024
      </div>
    </div>
  </div>
);

function Footer() {
  const deviceType = useDeviceType();

  // mobile 화면에서 footer 배치 변경
  if (deviceType == 'mobile') {
    return mobileFooter;
  }
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
