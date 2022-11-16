import styles from './Subscription.module.css';

import PricingColumn from '@/components/PricingColumn';
import { diamondTier, freeTier, goldTier } from '@/pricing/pricingTiers';
import { PricingTier } from '@/types/pricingTier';

const Subscription: React.FC = () => {
  return (
    <section className={styles.panel}>
      {[freeTier, goldTier, diamondTier].map((tier: PricingTier) => (
        <PricingColumn key={tier.heading} pricingPlan={tier} />
      ))}
    </section>
  );
};

export default Subscription;
