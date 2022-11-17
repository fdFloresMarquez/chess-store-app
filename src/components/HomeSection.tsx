import styles from './HomeSection.module.css';

import { Section } from '@/types/section';

type Props = {
  section: Section;
  imgDirection: 'left' | 'right';
};

const HomeSection: React.FC<Props> = ({ section, imgDirection }) => {
  const { blurb, heading, imgUrl } = section;

  return (
    <div className={`container-fluid px-0 ${styles.content}`}>
      <div className="row align-items-center">
        <div className={`col-md-6 text-center ${imgDirection === 'left' ? 'order-md-2' : ''}`}>
          <div className="row justify-content-center">
            <div className={`col-10 col-lg-8 mb-5 mb-md-0 ${styles.blurb}`}>
              <h2 className={styles.h2}>{heading}</h2>
              <img className="d-none d-lg-inline" src="assets/crown.png" />
              <p className={`lead ${styles.p}`}>{blurb}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <img className="img-fluid" src={imgUrl} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
