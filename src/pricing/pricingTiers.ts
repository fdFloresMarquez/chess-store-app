import { PricingTier } from '@/types/pricingTier';

export const freeTier: PricingTier = {
  imgUrl: 'icons/icon1.png',
  heading: 'Free Tier',
  features: ['Boost Your Elo', 'Understand the fundamentals'],
  price: 'free',
  buttonText: 'Sign Up',
  isFeatured: false,
};

export const goldTier: PricingTier = {
  imgUrl: 'icons/icon2.png',
  heading: 'Gold Tier',
  features: ['Get Better', 'Acces to video courses and play tournaments'],
  price: '$150',
  buttonText: 'Free Trial',
  isFeatured: true,
};

export const diamondTier: PricingTier = {
  imgUrl: 'icons/icon3.png',
  heading: 'Diamond Tier',
  features: ['Dedicated', 'Access to mentor calls and consulting'],
  price: '$400',
  buttonText: 'Free Trial',
  isFeatured: false,
};
