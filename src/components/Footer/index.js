import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "FIT Farm",
    href: "https://pancakeswap.finance/",
  },
  {
    title: "Whitepaper",
    href: "https://gitbook.com/",
  },
  {
    title: "Roadmap",
    href: "https://gitbook.com/",
  },
  {
    title: "FAQ",
    href: "https://gitbook.com/",
  },
];

const socials = [
  // {
  //   title: "facebook",
  //   size: "16",
  //   url: "https://www.facebook.com/ui8.net/",
  // },
  {
    title: "telegram",
    size: "18",
    viewBox: "0 0 24 24",
    url: "https://t.me/kyneto",
  },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/",
  },
  // {
  //   title: "instagram",
  //   size: "16",
  //   url: "https://www.instagram.com/ui8net/",
  // },
  // {
  //   title: "dribbble",
  //   size: "16",
  //   url: "https://dribbble.com/ui8",
  // },
  // {
  //   title: "behance",
  //   size: "20",
  //   url: "https://www.behance.net/ui8",
  // },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link className={styles.logo} to="/">
                <Image
                  className={styles.pic}
                  src="/images/logo-dark.svg"
                  srcDark="/images/logo-light.svg"
                  alt="Fitness Pro"
                />
              </Link>
            </div>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-bottom" size="9" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) =>
                  x.url ? (
                    <NavLink
                      className={styles.link}
                      activeClassName={styles.active}
                      to={x.url}
                      key={index}
                    >
                      {x.title}
                    </NavLink>
                  ) : (
                    <a
                      className={styles.link}
                      activeClassName={styles.active}
                      href={x.href}
                      key={index}
                    >
                      {x.title}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contact</div>
            <div className={styles.info}>
              <p>43252 Business Bay</p>
              <p>Dubai</p>
              <p>United Arab Emirates</p>
              <p>971-528-4945</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Join Newsletter</div>
            <div className={styles.info}>
              Sign up to receive our weekly newsletter, featuring updates from
              the team.
            </div>
            <Subscription
              className={styles.subscription}
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            Copyright © 2022 Kyneto Technologies. All rights reserved
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} viewBox={x.viewBox} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
