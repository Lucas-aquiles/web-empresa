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
          <p>INICIO</p>
          <p>SERVICIOS</p>
          <p>CONTACTO</p>
        </div>
         <div className={styles.pt} >
          <Image
            src="/colibri.svg"
            width={800}
            height={800}
            
            alt="Screenshots of the dashboard project showing desktop version"
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
    </main>
  );
}
