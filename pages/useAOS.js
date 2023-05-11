import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      // Configure your AOS options here
      // For example:
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return null;
};

export default useAOS;
