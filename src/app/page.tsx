"use client";

import styles from "./page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Services from "../components/services";
import Idea from "../components/idea";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className={styles.main}>
      <div
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="800"
        className={styles.title}
      >
        <div className={styles.imageicon}>
          <Image
            src="/fluuter3.svg"
            width={150}
            height={150}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        <div className={styles.title1}>
          <p>HOME</p>
          <p>SERVICES</p>
          <p>ABOUT</p>
          <p>BLOG</p>
          <p>CONTACT</p>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1500"
        className={styles.partTwo}
      >
        <div className={styles.po}>
          <p>CREATIVE MIND, CREATIVE WORKS.</p>
          <h2>We are digital agency y consultora.</h2>
        </div>
        <div className={styles.pt}>
          <Image
            src="/colibri.svg"
            width={500}
            height={500}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <Idea />
      {/* --------------------------------------------------- */}
      <Services />
    </main>
  );
}
