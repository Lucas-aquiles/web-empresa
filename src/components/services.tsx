import React from "react";
import styles from "./services.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <div className={styles.generalDiv}>
      <div className={styles.centrar}>
        <div className={styles.lyne}></div>
        <h3 className={styles.title}>Servicios.</h3>
      </div>
      <h3 className={styles.title1}>NUESTROS SERVICIOS PARA LOS CLIENTES</h3>

      <div className={styles.fathercontainer}>
        <div className={styles.container}>
          <Image
            src="/titulo1.svg"
            width={70}
            height={70}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3>Soluciones Digitales </h3>
          <p>
            Desarrollo de Aplicaciones Web, Software Internos y Aplicaciones
            Móviles
          </p>

          <div className={styles.lineaDiv}></div>
        </div>
        <div className={styles.container}>
          <Image
            src="/titulo2.svg"
            width={70}
            height={70}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3>Estrategia Digital</h3>
          <p>
            Aprovecha al máximo las oportunidades que ofrece el entorno digital
            para alcanzar tus objetivos comerciales
          </p>
          <div className={styles.lineaDiv}></div>

        </div>

        <div className={styles.container1}>
          <Image
            src="/titulo3.svg"
            width={70}
            height={70}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3>Diseños UX/IX</h3>
          <p>
            Pensamos y diseñamos , productos digitales que sean intuitivos,
            atractivos y satisfactorios para los usuarios
          </p>
          <div className={styles.lineaDiv}></div>

        </div>
      </div>

      <div className={styles.fathercontainer}>
        <div className={styles.container}>
          <Image
            src="/titulo4.svg"
            width={70}
            height={70}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3>Consultoria</h3>
          <p>
            {" "}
            Análisis de Mercado y Opinión Pública. Mapeamos el clima social y la
            penetración y aceptación de marcas y productos mediante
            investigación cualitativa y cuantitativa.
          </p>
          <div className={styles.lineaDiv}></div>

        </div>

        <div className={styles.container}>
          <Image
            src="/titulo5.svg"
            width={70}
            height={70}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3>Automatización </h3>
          <p>
            Desarrollar sistemas y flujos de trabajo automatizados para agilizar
            el procesamiento de datos y reducir la intervención humana en tareas
            repetitivas o rutinarias
          </p>
          <div className={styles.lineaDiv}></div>

        </div>

        <div className={styles.container}>
          <Image
            src="/titulo6.svg"
            width={70}
            height={70}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h3> Investigación Cualitativa: </h3>
          <p> Grupos Focales</p>
          <p> Entrevistas en Profundidad </p>
          <h3> Investigación Cuantitativa: </h3>
          <p> Entrevistas Domiciliarias</p>
          <p> Entrevistas Telefónicas</p>
          <div className={styles.lineaDiv}></div>

        </div>
      </div>
    </div>
  );
}
