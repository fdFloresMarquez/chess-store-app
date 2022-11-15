import styles from './Subscription.module.css';

const Subscription: React.FC = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.pricingPlan}>
        <img alt="pricing-icon-1" className={styles.pricingImg} src="icons/icon1.png" />
        <h2 className={styles.pricingHeader}>Free Tier</h2>
        <ul className={styles.pricingFeatures}>
          <li className={styles.pricingFeaturesItem}>Boost Your Elo</li>
          <li className={styles.pricingFeaturesItem}>Understand the fundamentals</li>
        </ul>
        <span className={styles.pricingPrice}>Free</span>
        <a className={styles.pricingButton} href="#/">
          Sign up
        </a>
      </div>

      <div className={styles.pricingPlan}>
        <img alt="pricing-icon-2" className={styles.pricingImg} src="icons/icon2.png" />
        <h2 className={styles.pricingHeader}>Gold Tier</h2>
        <ul className={styles.pricingFeatures}>
          <li className={styles.pricingFeaturesItem}>Get Better</li>
          <li className={styles.pricingFeaturesItem}>
            Acces to video courses and play tournaments
          </li>
        </ul>
        <span className={styles.pricingPrice}>$150</span>
        <a className={`${styles.pricingButton} + ${styles.isFeatured}`} href="#/">
          Free trial
        </a>
      </div>

      <div className={styles.pricingPlan}>
        <img alt="pricing-icon-3" className={styles.pricingImg} src="icons/icon3.png" />
        <h2 className={styles.pricingHeader}>Diamond Tier</h2>
        <ul className={styles.pricingFeatures}>
          <li className={styles.pricingFeaturesItem}>Dedicated</li>
          <li className={styles.pricingFeaturesItem}>Access to mentor calls and consulting</li>
        </ul>
        <span className={styles.pricingPrice}>$400</span>
        <a className={styles.pricingButton} href="#/">
          Free trial
        </a>
      </div>
    </div>
  );
};

export default Subscription;
