import styles from './contacto.module.scss';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { PillBox } from '../components/PillBox';
import { ContactForm } from '../components/ContactForm';
import { Waves } from '../components/Graphics';

export default function Contact() {
    return <main>
        <Header/>
        <Row color="cream" className={styles.sharks}>
            <h1 className={styles.contactheader}>¡Descubramos las oportunidades que el océano digital tiene para ti!</h1>
            <p className={styles.contacttag}>¡Nuestro equipo de tiburones del marketing está esperando para hundirse contigo en las profundidades del marketing digital y ayudarte a conquistar tu mercado!</p>
        </Row>
        <Waves className={styles.wave}/>
        <Row className={styles.mainrow}>
            <PillBox>
                <h2 className={styles.formheader}>Cuentanos sobre tu proyecto</h2>
                <ContactForm/>
            </PillBox>
        </Row>
        <Footer background="cream"/>
    </main>
}