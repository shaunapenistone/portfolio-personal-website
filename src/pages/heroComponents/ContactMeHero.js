import React, { useEffect} from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  height: 100%;
  display: flex; 
  align-items: center;
`

function ContactMeHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 100},
    visible: { opacity: 1, y: 0 }
  }

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <View>
      <motion.h2
        className='section-header'
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        Get in Touch!
      </motion.h2>
    </View>
  )
}

export default ContactMeHero
