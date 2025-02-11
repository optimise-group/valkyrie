import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector('body')?.scrollIntoView({ behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
