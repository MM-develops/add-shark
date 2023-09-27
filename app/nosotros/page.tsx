import styles from './nosotros.module.scss'
import { Header } from '../components/Header'
import { PillBox } from '../components/PillBox'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { LogoGrid } from '../components/LogoGrid'

export default function Nosotros() {
    return (
        <main>
            <Header/>
            <div className={styles.row1}>
                <p className={styles.tag}>Somos</p>
                <h1>AD Shark<br/>Digital Agency</h1>
                <p>Una agencia de publicidad que navega en las profundidades del oceano digital para ayudar a las empresas a alcanzar su maximo potencial en linea.</p>
            </div>
            <div className={styles.row2}>
                <p>Al igual que los tiburones en el oceano, en Ad Shark nos vemos rapidamente y de manera eficiente para ayudar a las empresas a crecer y alcanzar sus objetivos comerciales. Ofrecemos una amplia gama de servicios de marketing digital, como la gestion de redes sociales, email marketing, SEO y, por supuesto, anuncios pagados. Sin embargo, nuestra pasion y enfoque principal es la generacion de prospectos con anuncios pagados, ya que nos permiten llevar a nuestros clientes hacia el exito en linea</p>
            </div>
            <LogoGrid title="Algunos de nuestros sharks"/>
            <div className={styles.row4}>
                <p>En Ad Shark, nuestro equipo esta compuesto por expertos en publicidad en line, estrategas de marketing, disenadores graficos y especialistas en analisis de datos, todos unidos en una sola direccion: impulsar el crecimiento y el exito de nuestros clientes</p>
                <div className={styles.pillBoxGrid}>
                    <PillBox type="blue">
                        <p>Anuncios pagados / Anuncios en linea</p>
                    </PillBox>
                    <PillBox type="blue">
                        <p>SEO</p>
                    </PillBox>
                    <PillBox type="blue">
                        <p>Email Marketing</p>
                    </PillBox>
                    <PillBox type="blue">
                        <p>Manejo de redes sociales</p>
                    </PillBox>
                </div>
                <Button className={styles.blockCenter}>Conoce mas de nuestros servicios</Button>
            </div>
            <Footer/>
        </main>
    )
}