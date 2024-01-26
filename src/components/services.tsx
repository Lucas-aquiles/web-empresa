import React from "react";
import styles from "./services.module.css";
export default function Services() {
  return (
    <div className={styles.generalDiv}>
      
      <div className={styles.centrar}> 
      <div className={styles.lyne}></div>
      <h3 className={styles.title}>Services.</h3>
      </div>
      <h3 className={styles.title1}>OUR SERVICES FOR CLIENTES</h3>

      <div className={styles.fathercontainer} >

        <div className={styles.container}>
          <p>Digital Strategy</p>
        </div>

        <div className={styles.container}>
          <p>UX Designs</p>
        </div>

        <div className={styles.container}>
          <p>Social Media</p>
        </div>
      </div>


      <div className={styles.fathercontainer}>
        <div className={styles.container}>
          <p>Design Concept</p>
        </div>

        <div className={styles.container}>
          <p>Consultoria</p>
        </div>

        <div className={styles.container}>
          <p>UX Designs</p>
        </div>
      </div>
    </div>
  );
}
