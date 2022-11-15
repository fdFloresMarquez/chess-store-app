import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.stack}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos vitae,
          provident doloremque eius expedita iure magnam at deleniti repellendus minus unde iste,
          tempore fugit optio officia dicta error praesentium!
        </p>
      </div>
      <img alt="" className={styles.image} src="/assets/about.jpg" />
    </section>
  );
};

export default About;
