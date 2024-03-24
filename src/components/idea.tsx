import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./idea.module.css";


export default function Idea(){

    return( 
        <div className={styles.father}>
    <div className={styles.concepts}>
        {/*  -----------------     */}
    <div data-aos="fade-up"  data-aos-delay="700"
    data-aos-duration="1500"
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
        {/*  -----------------     */}
        700
    <div  className={styles.panelM} data-aos="fade-up"  data-aos-delay="700"
    data-aos-duration="1500">

      <Image
        src="/brain.svg"
        width={80}
        height={60}
        alt="Screenshots of the dashboard project showing desktop version"
      />

      <h2 className={styles.title5}>Grandes Ideas</h2>
      <div className={styles.hra}></div>

      <p className={styles.parrafo2}>
        Aportamos conceptos segun las necesidades de los usuarios y
        emprendedores. Donde cualquier idea puede ser disruptiva.
      </p>

    </div>

        {/*  -----------------     */}

    <div className={styles.panel} data-aos="fade-up"  data-aos-delay="700"
    data-aos-duration="1500">
      <Image
        src="/idea.svg"
        width={80}
        height={60}
        alt="Screenshots of the dashboard project showing desktop version"
       
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
      <div className={styles.myelementFather}>
        <div className={styles.myelement}> </div>
      </div>

  </div>

    )
}