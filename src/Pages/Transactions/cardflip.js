import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';   
import styles from './styles.module.css';

export const CardFlip = () => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <animated.div
        className={`${styles.c} ${styles.back}`}
        style={{ transform }}
      />
      <animated.div
        className={`${styles.c} ${styles.front}`}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  )
};
