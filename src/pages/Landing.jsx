import Layout from '../components/common/Layout/Layout';
import styles from './Landing.module.css';
import imgHomeTop from '@/assets/img/landing/Img_home_top.png';
import imgHome1 from '@/assets/img/landing/Img_home_01.png';
import imgHome2 from '@/assets/img/landing/Img_home_02.png';
import imgHome3 from '@/assets/img/landing/Img_home_03.png';

function LandingSection({ imgSrc, sectionType, sectionText, landingScript }) {
  if (sectionType === 'Search') {
    return (
      <section className={styles.landingSection}>
        <div className={styles.landingSectionContentBox}>
          <div className={styles.landingSectionContent}>
            <p>{sectionType}</p>
            <div className={styles.landingSectionText}>
              <p>{sectionText}</p>
              <p className={styles.landingScript}>{landingScript}</p>
            </div>
          </div>
          <img src={imgSrc} alt="section" />
        </div>
      </section>
    );
  }
  return (
    <section className={styles.landingSection}>
      <div className={styles.landingSectionContentBox}>
        <img src={imgSrc} alt="section" />
        <div className={styles.landingSectionContent}>
          <p>{sectionType}</p>
          <div className={styles.landingSectionText}>
            <p>{sectionText}</p>
            <p className={styles.landingScript}>{landingScript}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Landing() {
  return (
    <Layout>
      <main>
        <section className={styles.banner}>
          <div className={styles.bannerContentBox}>
            <div className={styles.bannerContent}>
              <div className={styles.bannerContentText}>
                일상의 모든 물건을
                <br />
                거래해 보세요
              </div>
              <button>구경하러 가기</button>
            </div>
            <img src={imgHomeTop} alt="배너이미지" />
          </div>
        </section>
        <div className={styles.landingBody}>
          <LandingSection
            imgSrc={imgHome1}
            sectionType="Hot item"
            sectionText={
              <>
                인기 상품을 <br /> 확인해 보세요
              </>
            }
            landingScript={
              <>
                가장 HOT한 중고거래 물품을 <br /> 판다 마켓에서 확인해 보세요
              </>
            }
          />
          <LandingSection
            imgSrc={imgHome2}
            sectionType="Search"
            sectionText={
              <>
                구매를 원하는 <br /> 상품을 검색하세요
              </>
            }
            landingScript={
              <>
                구매하고 싶은 물품은 검색해서 <br /> 쉽게 찾아보세요
              </>
            }
          />
          <LandingSection
            imgSrc={imgHome3}
            sectionType="Register"
            sectionText={
              <>
                판매를 원하는 <br /> 상품을 등록하세요
              </>
            }
            landingScript={
              <>
                어떤 물건이든 판매하고 싶은 상품을 <br /> 쉽게 등록하세요
              </>
            }
          />
        </div>
        <section className={styles.banner}>
          믿을 수 있는 판다마켓 중고 거래
        </section>
      </main>
    </Layout>
  );
}

export default Landing;
