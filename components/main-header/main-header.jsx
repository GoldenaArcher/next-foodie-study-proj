"use client";

import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path === "/community" ? classes.active : undefined}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
