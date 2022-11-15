import { useState, useEffect } from 'react';

export const useScrollPosition = (): boolean => {
  // setting initial value to true
  const [scroll, setScroll] = useState<boolean>(true);

  // running on mount
  useEffect(() => {
    const onScroll = (): void => {
      const scrollCheck = window.scrollY < 100;

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener('scroll', onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
