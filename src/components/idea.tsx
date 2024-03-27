import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./idea.module.css";

export default function Idea() {
  return (
    <div className={styles.father}>
      <div className={styles.concepts}>
        {/*  -----------------     */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1500"
          className={styles.panel}
        >
          <Image
            src="/paper-plane.svg"
            width={80}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h2 className={styles.title5}>Pensamos el futuro</h2>
          <div className={styles.hra}></div>
          <p className={styles.parrafo2}>
            Convierte conocimientos en soluciones para el mañana, combinando
            ciencia, sociedad y tecnología en cada paso.
          </p>
        </div>
        {/*  -----------------     */}
        700
        <div
          className={styles.panelM}
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1500"
        >
          <Image
            src="/brain.svg"
            width={80}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
          />

          <h2 className={styles.title5}>Grandes Ideas</h2>
          <div className={styles.hra}></div>

          <p className={styles.parrafo2}>
            Generamos ideas que se adaptan a las necesidades de usuarios y
            emprendedores. Aquí, cada concepto tiene el potencial de ser
            revolucionario.
          </p>
          
        </div>
        
        {/*  -----------------     */}
        <div
          className={styles.panel}
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1500"
        >
          <Image
            src="/idea.svg"
            width={80}
            height={60}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <h2 className={styles.title5}>Soluciones Creativas</h2>
          <div className={styles.hra}></div>

          <p className={styles.parrafo2}>
            Busques transformar industrias enteras o mejorar procesos
            cotidianos, aquí no solo te ofrecemos soluciones; creamos
            experiencias.
          </p>
        </div>
      </div>
     
    </div>
  );
}
