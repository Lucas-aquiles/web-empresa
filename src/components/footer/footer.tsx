import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <Image
        src="/fluuter3.svg"
        width={150}
        height={150}
        alt="Screenshots of the dashboard project showing desktop version"
      />

      <div className={styles.ver}>
        <div className={styles.row}>
          <Image
            src="/telefono.svg"
            width={60}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
          /> 
           <h3>Contacto : 2613130594</h3>
        </div>

        <div className={styles.row}>
          <Image
            src="/correo.svg"
            width={60}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3>rootsoftware@gmail.com</h3>
        </div>

        <div className={`${styles.row} ${styles.myAdditionalClass}`}>
          <Image
            src="/ubicacion.svg"
            width={40}
            height={40}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3>Mendoza, Argentina</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
