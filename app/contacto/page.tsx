import './contacto.scss';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { PillBox } from '../components/PillBox';
import { ContactForm } from '../components/ContactForm';

export default function Contact() {
    return <main>
        <Header/>
        <Row color="blue">
            <h1 className="contact-header">¡Descubramos las oportunidades que el océano digital tiene para ti!</h1>
            <p className="contact-tag">¡Nuestro equipo de tiburones del marketing está esperando para hundirse contigo en las profundidades del marketing digital y ayudarte a conquistar tu mercado!</p>
        </Row>
        <Row color="blue" className='main-row'>
            <PillBox>
                <h2 className="form-header">Cuentanos sobre tu proyecto</h2>
                <ContactForm/>
            </PillBox>
        </Row>
        <Footer background="blue"/>
    </main>
}