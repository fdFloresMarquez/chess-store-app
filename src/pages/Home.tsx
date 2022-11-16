import styles from './Home.module.css';

import HeadingGroup from '@/components/HeadingGroup';

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
        <div className={`container-fluid px-0 ${styles.content}`}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center order-md-2">
              <div className="row justify-content-center">
                <div className={`col-10 col-lg-8 mb-5 mb-md-0 ${styles.blurb}`}>
                  <h2 className={styles.h2}>Openings the right way!</h2>
                  <img className="d-none d-lg-inline" src="assets/crown.png" />
                  <p className={`lead ${styles.p}`}>
                    Have you ever wondered why 1.e4 and 1.d4 are the most popular openings? Would
                    you like to know more about openings? Then this is the site for you! By learning
                    book moves and the idea of chess theory you will start having more success in
                    the opening. Improve your opening knowledge and get great positions from the
                    start of the game!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <img className="img-fluid" src="assets/queen.jpg" />
            </div>
          </div>
        </div>

        <div className={`container-fluid px-0 ${styles.content}`}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <div className="row justify-content-center">
                <div className={`col-10 col-lg-8 mb-5 mb-md-0 ${styles.blurb}`}>
                  <h2 className={styles.h2}>Play the ancient game</h2>
                  <img className="d-none d-lg-inline" src="assets/crown.png" />
                  <p className={`lead ${styles.p}`}>
                    Have you ever had a queen or a rook versus your opponent&apos;s lone king but
                    couldn&apos;t figure out how to win? Have you ever stalemated an opponent&apos;s
                    lone king? Then this course for you! By learning these different types of
                    checkmates you will start winning more of your games!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="assets/knight.jpg" />
            </div>
          </div>
        </div>

        <div className={`container-fluid px-0 ${styles.content}`}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center order-md-2">
              <div className="row justify-content-center">
                <div className={`col-10 col-lg-8 mb-5 mb-md-0 ${styles.blurb}`}>
                  <h2 className={styles.h2}>Become a Master</h2>
                  <img className="d-none d-lg-inline" src="assets/crown.png" />
                  <p className={`lead ${styles.p}`}>
                    From A1 to H8, become familiar with the whole board. Learn the middlegames and
                    endgames like never before. Win tournaments and be the player you always wanted
                    to be.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <img className="img-fluid" src="assets/game.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
