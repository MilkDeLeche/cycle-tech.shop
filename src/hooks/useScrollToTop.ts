import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);
};

export default useScrollToTop; 