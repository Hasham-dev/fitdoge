import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";
import Image from "../Image";
import Theme from "../Theme";

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "How to Earn",
    href: "https://gitbook.com/",
  },
  {
    title: "FIT Farm",
    href: "https://pancakeswap.finance/",
  },
  {
    title: "Roadmap",
    href: "https://gitbook.com/",
  },
  {
    title: "Team",
    id: "team",
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
];

const handleScroll = (id) => {
  if (!id) return;
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const contact = [
  {
    title: "Montanachester",
    content: "06787 Block Estates",
  },
  {
    title: "Lake Gene",
    content: "167 Emard River",
  },
  {
    title: "North Hassiefort",
    content: "032 Leonora Spurs",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/logo-dark.svg"
            srcDark="/images/logo-light.svg"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              x.content ? (
                <DropdownMenu
                  className={styles.group}
                  item={x}
                  key={index}
                  setValue={setVisibleNav}
                />
              ) : x.url ? (
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={x.url}
                  key={index}
                  onClick={() => setVisibleNav(false)}
                >
                  {x.title}
                </NavLink>
              ) : (
                <a
                  className={styles.link}
                  activeClassName={styles.active}
                  href={x.href}
                  key={index}
                  onClick={() => {
                    if (x.id) handleScroll(x.id);
                    setVisibleNav(false);
                  }}
                >
                  {x.title}
                </a>
              )
            )}
          </nav>
          <div className={styles.details}>
            <div className={styles.contact}>
              {contact.map((x, index) => (
                <div className={styles.element} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
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
            <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/"
            >
              Playground
            </Link>
          </div>
        </div>
        <Theme className={styles.theme} />
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/"
        >
          Playground
        </Link>
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
