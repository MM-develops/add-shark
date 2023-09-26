import Image from 'next/image'
import styles from './Home.module.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Row } from './components/Row'
import { Button } from './components/Button'
import { PillBox } from './components/PillBox'
import { LogoGrid } from './components/LogoGrid'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div className={`${styles.row}`}>
        <h1>SUMERGÉTE EN EL OCÉANO DIGITAL CON AD SHARK DIGITAL AGENCY</h1>
        <Button className={styles.blockCenter}>Más información</Button>
        <div className={styles.numberRow}>
          <p className={styles.numberSign}>
            <span>25 +</span><br></br>
            Clientes satisfechos
          </p>
          <p className={styles.numberSign}>
            <span>300 +</span><br></br>
            Campañas exitosas
          </p>
        </div>
        <PillBox>
          <h3>¡Bienvenido a AdShark Digital Agency!</h3>
          <p>Somos una agencia de publicidad que navega en las profundidades del océano digital para ayudar a las empresas a alcanzar su máximo potencial en línea. Somos un equipo de tiburones especializados en el marketing digital enfocándonos en los anuncios pagados.</p>
          <p>En Ad Shark, nuestro equipo está compuesto por expertos en publicidad en línea, estrategas de marketing, diseñadores gráficos y especialistas en análisis de datos, todos unidos en una sola dirección: impulsar el crecimiento y el éxito de nuestros clientes.</p>
          <Button className={`${styles.blockCenter} $`}>Conoce más de AdShark</Button>
          <div className={styles.rock1}></div>
          <div className={styles.rock2}></div>
        </PillBox>
      </div>
      <LogoGrid title="Algunos de nuestros Sharks" />
      <Row>
        <h3>Entre tiburones nos ayudamos</h3>
        <div className={styles.services}>
          <PillBox type="blue" className={styles.pill}>
            <h4>
              <Image
                src="/ads.svg"
                alt=""
                width={50}
                height={50}
              />
              Anuncios pagados / Anuncios en línea
            </h4>
            <p>Somos expertos en Anuncios Pagados, y nos gusta pensar en nosotros mismos como tiburones que nadan en el vasto océano de la publicidad en línea.</p>
          </PillBox>
          <PillBox type="blue" className={styles.pill}>
            <h4>
              <Image
                src="/seo.svg"
                alt=""
                width={50}
                height={50}
              />
              SEO (Search Engine Optimization)
            </h4>
            <p>Ofrecemos servicios de SEO para ayudar a las empresas a aumentar su tráfico web, mejorar su posición en los resultados de búsqueda y aumentar su presencia en línea.</p>
          </PillBox>
          <PillBox type="blue" className={styles.pill}>
            <h4>
              <Image
                src="/emailmkt.svg"
                alt=""
                width={50}
                height={50}
              />
              Email Marketing
            </h4>
            <p>Con nuestro servicio de Email Marketing ayudamos a las empresas a llegar a su audiencia de manera más directa.</p>
          </PillBox>
          <PillBox type="blue" className={styles.pill}>
            <h4>
              <Image
                src="/socialmedia.svg"
                alt=""
                width={50}
                height={50}
              />
              Manejo de redes sociales
            </h4>
            <p>Aumentamos la presencia de tu marca en línea, a través de la creación de contenido atractivo y relevante que conecte con tu audiencia.</p>
          </PillBox>
        </div>
        <Button className={styles.blockCenter}>Conoce más de AdShark</Button>
      </Row>
      <Footer/>
    </main>
  )
}
