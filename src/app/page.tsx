"use client";

import styles from "./page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState,useEffect } from "react";
import Services from "../components/services";
import Idea from "../components/idea";
import { animated, useSpring } from 'react-spring';
import Footer from "@/components/footer/footer";

export default function Home() {
  const [x, setX] = useState(0);

  const spring = useSpring({
    x: x,
    config: { mass: 1, tension: 170, friction: 40 }, // Adjust animation parameters
  });

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setX(event.clientX / window.innerWidth);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <div  data-aos="fade-zoom-in"  data-aos-offset="500" data-aos-easing="ease-in-sine"
        data-aos-delay="400"
        data-aos-duration="800" className={styles.imageicon}>
          <Image
            src="/fluuter3.svg"
            width={150}
            height={150}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        <div  data-aos="fade-zoom-in"  data-aos-offset="500" data-aos-easing="ease-in-sine"
        data-aos-delay="400"
        data-aos-duration="800" className={styles.title1}>
          <p>SERVICIOS</p>
          <p>CONTACTO</p>
        </div>
         <div className={styles.pt} >
         <animated.img
        style={{ transform: spring.x.interpolate(x => `rotateX(${x * 30}deg)`) }}
        src="/colibri.svg"
        alt="Hummingbird"
        width={800}
        height={800}
      />


        </div> 
      </div>

      <div   
        className={styles.partTwo}
      >
        <div   data-aos="fade-right" data-aos-easing="ease-in-sine"
        data-aos-delay="2000"
        data-aos-duration="2500" className={styles.po}>
        <p>MENTE ALERTA , CREACIONES INNOVADORAS ..</p>
        <h2>Agencia de Software </h2>
        </div>
        <div className={styles.relleno}></div>


         </div>

      
      {/* --------------------------------------------------------------------------- */}
      <Idea />
      {/* --------------------------------------------------- */}
      <Services />
        <Footer/>
    </main>
  );
}
