"use client";

import styles from "./page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import Services from "../components/services";
import Idea from "../components/idea";
import { animated, useSpring } from "react-spring";
import Footer from "@/components/footer/footer";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Head from 'next/head'


export default function Home() {
  const [x, setX] = useState(0);
  const [scrollTo, setScrollTo] = useState(null);

  const spring = useSpring({
    x: x,
    config: { mass: 10, tension: 300, friction: 40 }, // Adjust animation parameters
  });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setX(event.clientX / window.innerWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: any) => {
    console.log(to);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className={styles.main}>
       <Head>
          <title>Root Software</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Root Software" />
        <meta name="author" content="Lucas Echegaray" />
        <meta name="twitter:title" content="Root Software" />
        </Head>
      <div className={styles.title}>
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-delay="400"
          data-aos-duration="800"
          className={styles.imageicon}
        >
          <Image
            src="/fluuter3.svg"
            layout="responsive"
            width={20}
            height={20}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-delay="400"
          data-aos-duration="800"
          className={styles.title1}
        >
          <Link
            activeClass="active"
            to="test2"
            spy={true}
            smooth={true}
            duration={3000}
            onSetActive={handleSetActive}
          >
            <p className={styles.texto}>SERVICIOS</p>
          </Link>

          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            duration={3000}
            onSetActive={handleSetActive}
          >
            <p className={styles.texto}>CONTACTO</p>
          </Link>
        </div>
        <div className={styles.pt}>
          <animated.img
            style={{
              transform: spring.x.interpolate((x) => `rotateX(${x * 30}deg)`),
            }}
            src="/colibri.svg"
            alt="Hummingbird"
          />
        </div>
      </div>

      <div className={styles.partTwo}>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2000"
          data-aos-duration="2500"
          className={styles.po}
        >
          <p>MENTE ALERTA , CREACIONES INNOVADORAS ..</p>
          <h2>Agencia de Software </h2>
        </div>
        <div className={styles.relleno}></div>
      </div>

      {/* --------------------------------------------------------------------------- */}
      <Idea />
      {/* --------------------------------------------------- */}
      <Element name="test2" className="element">
        <Services />
      </Element>

      <Element name="test1" className="element">
        <Footer />
      </Element>
    </main>
  );
}
