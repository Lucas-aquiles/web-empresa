"use client";
import styles from "./page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Services from "../components/services"

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
        <div>
          <p>CUYO</p>
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
            src="/lunes.jpg"
            width={800}
            height={600}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
{/* --------------------------------------------------------------------------- */}
      <div className={styles.concepts}>
        <div data-aos="fade-up"  data-aos-delay="100"
        data-aos-duration="1000"
        className={styles.panel}>
          <Image
            src="/paper-plane.svg"
            width={80}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h2 className={styles.title5}>Pensamos el futuro</h2>
          <div className={styles.hra}></div>
          <p className={styles.parrafo2}>
            Proyectamos el futuro en base a nuestros conocimientos científicos,
            en el marco de la teoría de las Ciencias Sociales, las prácticas
            cotidianas de las personas y el mundo de las tecnologias .
          </p>
        </div>

        <div  className={styles.centrar} data-aos="fade-up"  data-aos-delay="200"
        data-aos-duration="1000">
        <div className={styles.panelM}>

          <Image
            src="/brain.svg"
            width={80}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
            className="iconColor"
          />

          <h2 className={styles.title5}>Grandes Ideas</h2>
          <div className={styles.hra}></div>

          <p className={styles.parrafo2}>
            Aportamos conceptos segun las necesidades de los usuarios y
            emprendedores. Donde cualquier idea puede ser disruptiva.
          </p>
          </div>
          <div className={styles.myelement}></div>

        </div>


        <div className={styles.panel} data-aos="fade-up"  data-aos-delay="300"
        data-aos-duration="1000">
          <Image
            src="/idea.svg"
            width={80}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
            style={{
              color: "red",
            }}
          />
          <h2 className={styles.title5}>Soluciones Creativas</h2>
          <div className={styles.hra}></div>

          <p className={styles.parrafo2}>
            Ya sea que busques transformar industrias enteras o mejorar procesos
            cotidianos, nosotros no solo proporcionamos soluciones; creamos
            experiencias revolucionarias.
          </p>
        </div>
      </div>
      {/* --------------------------------------------------- */}
            <Services/>
    </main>
  );
}
