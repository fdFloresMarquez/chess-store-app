import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <section>
        <div className="container-fluid px-0 content">
          <div className="row align-items-center">
            <div className="col-6 text-center d-none d-lg-block" id="headingGroup">
              <h1>
                CHESS <span>/</span> AND <span>/</span> KNOWLEDGE
              </h1>
              <h1>
                CHESS <span>/</span> AND <span>/</span> KNOWLEDGE
              </h1>
              <h1>
                CHESS <span>/</span> AND <span>/</span> KNOWLEDGE
              </h1>
              <h1>
                CHESS <span>/</span> AND <span>/</span> KNOWLEDGE
              </h1>
              <h1>
                CHESS <span>/</span> AND <span>/</span> KNOWLEDGE
              </h1>
              <h1>
                CHESS <span>/</span> AND <span>/</span> KNOWLEDGE
              </h1>
              <h1>
                CHESS <span>/</span> AND <span>/</span> KNOWLEDGE
              </h1>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="assets/board.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid px-0 content">
          <div className="row align-items-center">
            <div className="col-md-6 text-center order-md-2">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2>Chess Store</h2>
                  <img className="d-none d-lg-inline" src="assets/crown.png" />
                  <p className="lead">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus
                    enim ratione nisi minus, alias hic eius delectus sit praesentium fuga iure
                    provident, consectetur doloribus maiores. Minus iste fugiat molestias.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <img className="img-fluid" src="assets/queen.jpg" />
            </div>
          </div>
        </div>

        <div className="container-fluid px-0 content">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2>Chess Store</h2>
                  <img className="d-none d-lg-inline" src="assets/crown.png" />
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quo? Id
                    delectus a nesciunt quibusdam explicabo fugit quia perspiciatis, fugiat, nobis
                    expedita molestias ipsum fuga. Repellendus minima officia adipisci dolorum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="assets/knight.jpg" />
            </div>
          </div>
        </div>

        <div className="container-fluid px-0 content">
          <div className="row align-items-center">
            <div className="col-md-6 text-center order-md-2">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2>Chess Store</h2>
                  <img className="d-none d-lg-inline" src="assets/crown.png" />
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, ab! Nemo
                    voluptas illo enim! Officiis corporis, amet est illum optio accusamus eligendi
                    sunt iste vel, incidunt doloribus, aliquid pariatur odit.
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
