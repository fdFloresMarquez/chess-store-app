import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.stack}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          Chess is everything: art, science and sport. It is deeply rooted in our global culture.
          Accessible to all; a metaphor for strategic thinking; and a model of civilized conflict
          resolution. We work hard to provide the best user experience.
        </p>
      </div>
      <img alt="" className={styles.image} src="/assets/about.jpg" />
    </section>
  );
};

export default About;
