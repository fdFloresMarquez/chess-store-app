import styles from './PricingColumn.module.css';

import { PricingTier } from '@/types/pricingTier';

type Props = {
  pricingPlan: PricingTier;
};

const PricingColumn: React.FC<Props> = ({ pricingPlan }) => {
  const { imgUrl, heading, features, isFeatured, price, buttonText } = pricingPlan;

  return (
    <div className={styles.pricingPlan}>
      <img alt="pricing-icon-1" className={styles.pricingImg} src={imgUrl} />
      <h2 className={styles.pricingHeader}>{heading}</h2>
      <ul className={styles.pricingFeatures}>
        {features.map((feature) => (
          <li key={feature} className={styles.pricingFeaturesItem}>
            {feature}
          </li>
        ))}
      </ul>
      <span className={styles.pricingPrice}>{price}</span>
      <a
        className={
          isFeatured ? `${styles.pricingButton} ${styles.isFeatured}` : styles.pricingButton
        }
        href="#/"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PricingColumn;
