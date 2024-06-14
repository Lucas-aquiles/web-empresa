import React from "react";
import styles from "./services.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <div className={styles.generalDiv}>
      <div className={styles.centrar}>
        <div className={styles.lyne}></div>
        <h2 className={styles.title}>Servicios.</h2>
      </div>
      <h4 className={styles.title1}>NUESTROS SERVICIOS PARA LOS CLIENTES</h4>

      <div className={styles.fathercontainer}>
        <div className={styles.container}>
        <div className={styles.containerImage}> 
          <Image
            src="/titulo1.svg"
            width={70}
            height={70}
             layout="responsive"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          </div>
          
          <h3>Soluciones Digitales </h3>
          <p className={styles.parrafo2}>

            Desarrollo de Aplicaciones Web, Software Internos y Aplicaciones
            Móviles
          </p>

          <div className={styles.lineaDiv}></div>
        </div>
        <div className={styles.container}>

        <div className={styles.containerImage}> 

          <Image
            src="/titulo2.svg"
            width={70}
            height={70}
             layout="responsive"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

          <h3>Estrategia Digital</h3>
          <p className={styles.parrafo2}>
            Aprovecha al máximo las oportunidades que ofrece el entorno digital
            para alcanzar tus objetivos comerciales
          </p>
          <div className={styles.lineaDiv}></div>

        </div>

        <div className={styles.container1}>
        <div className={styles.containerImage1}> 

          <Image
            src="/titulo3.svg"
            width={20}
            height={20}
            layout="responsive"

            alt="Screenshots of the dashboard project showing desktop version"
          />
      </div>

          <h3>Diseños UX/IX</h3>
          <p className={styles.parrafo2}>
            Pensamos y diseñamos , productos digitales que sean intuitivos,
            atractivos y satisfactorios para los usuarios
          </p>
          <div className={styles.lineaDiv}></div>

        </div>
      </div>


{/*----------------------------------------------------------------------------------------------------------------------*/}
      <div className={styles.fathercontainer}>
        <div className={styles.container}>
        <div className={styles.containerImage}> 

          <Image
            src="/titulo4.svg"
            width={70}
            height={70}
            layout="responsive"

            alt="Screenshots of the dashboard project showing desktop version"
          />
          </div>
          <h3>Consultoria</h3>
          <p className={styles.parrafo2}>

            Análisis de Mercado y Opinión Pública. Mapeamos el clima social y la
            penetración y aceptación de marcas y productos mediante
            investigación cualitativa y cuantitativa.
          </p>
          <div className={styles.lineaDiv}></div>

        </div>

        <div className={styles.container}>
                  <div className={styles.containerImage}> 

          <Image
            src="/titulo5.svg"
            width={70}
            height={70}
            layout="responsive"

            alt="Screenshots of the dashboard project showing desktop version"
          />

          </div>
          <h3>Automatización </h3>
          <p className={styles.parrafo2}>

            Desarrollar sistemas y flujos de trabajo automatizados para agilizar
            el procesamiento de datos y reducir la intervención humana en tareas
            repetitivas o rutinarias
          </p>
          <div className={styles.lineaDiv}></div>

        </div>

        <div className={styles.container}>
        <div className={styles.containerImage}> 

          <Image
            src="/titulo6.svg"
            width={70}
            height={70}
            layout="responsive"

            alt="Screenshots of the dashboard project showing desktop version"
          />
          </div>
          <h3 >
             Investigación Cualitativa: </h3>
          <p className={styles.parrafo2}> Grupos Focales</p>
          <p className={styles.parrafo2}> Entrevistas en Profundidad </p>
          <h3> Investigación Cuantitativa: </h3>
          <p className={styles.parrafo2}> Entrevistas Domiciliarias</p>
          <p className={styles.parrafo2}> Entrevistas Telefónicas</p>
          <div className={styles.lineaDiv}></div>

        </div>
      </div>
    </div>
  );
}
