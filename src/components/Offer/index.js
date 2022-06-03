import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ className }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          don't miss your chance 🔥
        </div>
        <h2 className={cn("h1", styles.title)}>
          Participate in the FitDoge Token Launchpad.
        </h2>
        <div className={styles.text}>
          You will get free access to the platform and be able to farm tokens
          every day!
        </div>
        <a
          className={cn("button", styles.button)}
          href="https://pinksale.finance/"
        >
          Join to Presale
        </a>
      </div>
    </div>
  );
};

export default Offer;
