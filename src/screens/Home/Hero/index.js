import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";
const Hero = ({ scrollToRef }) => {
  const [state, setState] = useState({
    days: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
    timeUp: false,
  });

  useEffect(() => {
    setInterval(() => {
      let eventDate = +new Date(1653222277 * 1000);
      let difference = eventDate - +new Date();
      if (difference < 1) {
        setState({ ...state, timeUp: true });
      } else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);
        setState({
          ...state,
          hours: hours > 9 ? hours : `0${hours}`,
          minutes: minutes > 9 ? minutes : `0${minutes}`,
          seconds: seconds > 9 ? seconds : `0${seconds}`,
          days,
        });
      }
    }, 1000);
  });

  const { days, hours, minutes, seconds, timeUp } = state;
  const dayString = days > 1 ? "days" : "day";
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            FOLLOW THE MOVE TREND TO EARN!
          </div>
          <h1 className={cn("h1", styles.title)}>
            Train To Earn FitDoge Token
          </h1>
          <div className={styles.text}>
            A Train-To-Earn protocol that combines DeFi, NFTs and metaverse
            integration. Powered by $FIT.
          </div>
          <div className={styles.btns}>
            <a
              className={cn("button", styles.button)}
              href="https://pinksale.finance/"
            >
              Join to Presale
            </a>
            <a
              className={cn("button-stroke", styles.button)}
              href="https://gitbook.com/"
            >
              Whitepaper
            </a>
          </div>
          <div className={styles.timerContainer}>
            <div className={styles.timerHelper}>
              <div className={styles.pulse} />
              Pinksale presale starts in:
            </div>

            <div className={styles.countdownContainer}>
              {" "}
              {timeUp ? (
                <p>Event in progress</p>
              ) : (
                <>
                  <p className={styles.timerOption}>
                    <span>{days}</span>
                    <span>{dayString}</span>
                  </p>
                  <span>:</span>
                  <p className={styles.timerOption}>
                    <span>{hours}</span>
                    <span>hours</span>
                  </p>
                  <span>:</span>
                  <p className={styles.timerOption}>
                    <span>{minutes}</span>
                    <span>minutes</span>
                  </p>
                  <span>:</span>
                  <p className={styles.timerOption}>
                    <span>{seconds}</span>
                    <span>seconds</span>
                  </p>
                </>
              )}
            </div>
          </div>
        </ScrollParallax>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <Image
              srcSet="/images/content/watch@2x.png 2x"
              srcSetDark="/images/content/watch-dark@2x.png 2x"
              src="/images/content/watch.png"
              srcDark="/images/content/watch-dark.png"
              alt="Watch"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/bottle@2x.png 2x"
              src="/images/content/bottle.png"
              alt="Bottle"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={1200}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball black"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
