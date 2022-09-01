import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import TypeAnimation from "react-type-animation";
import { useInView } from "react-intersection-observer";

import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import "./Hero.css";
import Avatar from "../../assets/images/avatar.jpg";

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  height: 100%;
  display: flex;
  align-items: center;
`;

function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <View>
      <motion.div
        className="all-of-text"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <img src={Avatar} className="avatar-image" alt="avatar of me" />
        <h2 className="title">Hi, I'm Shauna! </h2>
        <div className="sub-header-container">
          <h2 className="sub-header-text">
            I'm a
            {
              <div className="typing-container">
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    "React",
                    3000,
                    "Full-Stack",
                    3000,
                    "Javascript",
                    3000,
                  ]}
                  repeat={2}
                />
              </div>
            }
            Developer
          </h2>
          <div className="location-text-container">
            <h2 className="sub-header-text">based in </h2>
            <h2 className="emphasis-text">Manchester</h2>
          </div>
        </div>
        <div className="contact-icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shauna-penistone-aa3437174/"
            rel="noreferrer"
          >
            <TiSocialLinkedin color="gray" className="social-logos" size={25} />
          </a>
          <a
            target="_blank"
            href="https://github.com/shaunapenistone"
            rel="noreferrer"
          >
            <AiFillGithub color="gray" className="social-logos" size={25} />
          </a>
          <a
            target="_blank"
            href="mailto:shauna.penistone@hotmail.com"
            rel="noreferrer"
          >
            <AiOutlineMail color="gray" className="social-logos" size={25} />
          </a>
        </div>
      </motion.div>
    </View>
  );
}

export default Hero;
