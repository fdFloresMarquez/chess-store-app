import styles from './Home.module.css';

import HeadingGroup from '@/components/HeadingGroup';
import { sections } from '@/data/getHomeSections';
import HomeSection from '@/components/HomeSection';
import { Section } from '@/types/section';

const Home: React.FC = () => {
  const headingsAmount: number = 7;

  return (
    <>
      <section>
        <div className={`container-fluid px-0 ${styles.content}`}>
          <div className="row align-items-center">
            <HeadingGroup commitedFieldsToAdd={headingsAmount} />
            <div className="col-lg-6">
              <img className="img-fluid" src="assets/board.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section>
        {sections.map((section: Section, index: number) => {
          const direction = index % 2 === 0 ? 'left' : 'right';

          return <HomeSection key={index} imgDirection={direction} section={section} />;
        })}
      </section>
    </>
  );
};

export default Home;
