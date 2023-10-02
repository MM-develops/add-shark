import styles from './nosotros.module.scss'
import { Header } from '../components/Header'
import { PillBox } from '../components/PillBox'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Row } from '../components/Row'
import Image from 'next/image'
import { LogoGrid } from '../components/LogoGrid'

export default function Nosotros() {
    return (
        <main>
            <Header/>
            <Row color="blue" className={styles.row1}>
                <p className={styles.tag}>Somos</p>
                <h1>AD Shark<br/>Digital Agency</h1>
                <p className={styles.mainText}>Una agencia de publicidad que navega en las profundidades del oceano digital para ayudar a las empresas a alcanzar su maximo potencial en linea.</p>
            </Row>
            <Row color="blue" className={styles.row2}>
                <p>Al igual que los tiburones en el oceano, en Ad Shark nos vemos rapidamente y de manera eficiente para ayudar a las empresas a crecer y alcanzar sus objetivos comerciales. Ofrecemos una amplia gama de servicios de marketing digital, como la gestion de redes sociales, email marketing, SEO y, por supuesto, anuncios pagados. Sin embargo, nuestra pasion y enfoque principal es la generacion de prospectos con anuncios pagados, ya que nos permiten llevar a nuestros clientes hacia el exito en linea</p>
            </Row>
            <LogoGrid className={styles.logoGrid} title="Nuestro grupo de sharks"/>
            <Row className={styles.row4}>
                <p className={styles.whiteText}>En Ad Shark, nuestro equipo esta compuesto por expertos en publicidad en line, estrategas de marketing, disenadores graficos y especialistas en analisis de datos, todos unidos en una sola direccion: impulsar el crecimiento y el exito de nuestros clientes</p>
                <div className={styles.pillBoxGrid}>
                    <PillBox type="blue">
                        <Image
                            src="/ads.svg"
                            alt="Anuncios pagados y Anuncios en linea"
                            fill
                        />
                    </PillBox>
                    <PillBox type="blue">
                        <Image
                            src="/seo.svg"
                            alt="Seo"
                            fill
                        />
                    </PillBox>
                    <PillBox type="blue">
                        <Image
                            src="/emailmkt.svg"
                            alt="Email Marketing"
                            fill
                        />
                    </PillBox>
                    <PillBox type="blue">
                        <Image
                            src="/socialmedia.svg"
                            alt="Manejo de redes sociales"
                            fill
                        />
                    </PillBox>
                </div>
                <Button className={styles.blockCenter}>Conoce mas de nuestros servicios</Button>
                <p className={styles.secondP}>En el océano digital, la competencia es feroz y sólo los más fuertes sobreviven. En Ad Shark, estamos comprometidos a ayudarte a sobresalir en tu mercado y convertirte en un líder en tu industria. Juntos, podemos hacer que tu empresa destaque entre las olas y conquistar nuevas profundidades</p>
                <div className={styles.secondPillBoxGrid}>
                    <PillBox type="shadow">
                        <b>&quot;Gracias al equipo de Ad Shark, hemos identificado tendencias e insights valiosos que aplican en nuestra industria, el dia de hoy tenemos presencia digital y clientes en todo Estados Unidos gracias a las campañas que hemos realizado en conjunto.&quot;</b>
                        <span>Luis Felipe Osuna, Co-founder<br/>Urban Capital</span>
                    </PillBox>
                    <PillBox type="shadow">
                        <b>&quot;Ad Shark Digital es de las pocas empresas con las que hemos tratado en donde puede comprobar de forma medible los resultados que nos genera. Gracias a sus anuncios pagados en linea, hemos aumentado constantemente nuestra matricula en nuestras insitituciones educativas.&quot;</b>
                        <span>Jorge Velasquez, Director Administrativo<br/>Colegio Real de Minas</span>
                    </PillBox>
                    <PillBox type="shadow">
                        <b>&quot;Tenemos una relacion laboral de casi 3 años, desde el principio Ad Shark ha sido una parte fundamental en nuestras estrategias y planes comerciales para el crecimiento de la marca. Han manejado para nosotros todas nuestras campañas de generación de prospectos, asi como el analisis y la interpretación de toda a la analítica  de algoritmos de las plataformas digitales para nuevas zonas de interés y áreas con oportunidad de expansion.&quot;</b>
                        <span>Fernando Arredondo, Director de Expansión y Crecimiento<br/>SIMAS Farmacias</span>
                    </PillBox>
                </div>
            </Row>
            <Footer/>
        </main>
    )
}