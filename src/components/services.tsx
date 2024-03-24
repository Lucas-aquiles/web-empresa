import React from "react";
import styles from "./services.module.css";
export default function Services() {
  return (
    <div className={styles.generalDiv}>
      
      <div className={styles.centrar}> 
      <div className={styles.lyne}></div>
      <h3 className={styles.title}>Servicios.</h3>
      </div>
      <h3 className={styles.title1}>NUESTROS SERVICIOS PARA LOS CLIENTES</h3>

      <div className={styles.fathercontainer} >

        <div className={styles.container}>
          <p>Estrategia Digital</p>
        </div>

        <div className={styles.container}>
          <p>Diseños UX/IX</p>
        </div>

        <div className={styles.container}>
          <p>Redes Sociales</p>
        </div>
      </div>


      <div className={styles.fathercontainer}>
        <div className={styles.container}>
          <p>Diseño Conceptual</p>
        </div>

        <div className={styles.container}>
          <p>Consultoria</p>
        </div>

        <div className={styles.container}>
          <p>Estadisticas</p>
        </div>
      </div>
    </div>
  );
}
