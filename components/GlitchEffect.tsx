import React, { useEffect, useState } from 'react';
import styles from './GlitchEffect.module.css';
import { useInView } from 'react-intersection-observer';

const GlitchEffect = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.25, // Customize the threshold value as needed
  });

  useEffect(() => {
    setIsGlitching(inView);
  }, [inView]);

  return (
    <div>
      {/* Add your other page content */}
      <div>Lorem ipsum dolor sit amet...</div>

      <div ref={ref} className={`${styles.container} ${isGlitching ? styles.glitch : ''}`}></div>
    </div>
  );
};

export default GlitchEffect;
