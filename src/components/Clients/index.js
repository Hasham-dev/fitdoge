import React from "react";
import cn from "classnames";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const list = [
  {
    title: "certik",
    url: "/images/content/certik.svg",
  },
  {
    title: "gsr",
    url: "/images/content/gsr.svg",
  },
  {
    title: "parafi",
    url: "/images/content/parafi.svg",
  },
  {
    title: "delphi",
    url: "/images/content/delphi.svg",
  },
  {
    title: "forbes",
    url: "/images/content/forbes.svg",
  },
  {
    title: "bsc",
    url: "/images/content/bsc.svg",
  },
];

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.title}>
          Trusted by more partners in crypto community
        </ScrollParallax>
        <div className={styles.list}>
          {list.map((x, index) => (
            <div className={styles.logo} key={index}>
              <img src={x.url} alt={x.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
