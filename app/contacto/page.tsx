import './contacto.scss';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { PillBox } from '../components/PillBox';
import { Button } from '../components/Button';

export default function Contact() {
    return <main>
        <Header/>
        <Row color="blue" className="ocean-background">
            <h1 className="contact-header">¡Descubramos las oportunidades que el océano digital tiene para ti!</h1>
            <p className="contact-tag">¡Nuestro equipo de tiburones del marketing está esperando para hundirse contigo en las profundidades del marketing digital y ayudarte a conquistar tu mercado!</p>
        </Row>
        <Row color="blue">
            <PillBox>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre'/>
                <label htmlFor='tel'>Telefono</label>
                <input type='text' name='tel'/>
                <label htmlFor='email'>Correo electronico</label>
                <input type='text' name='email'/>
                <label htmlFor='service'>Servicio</label>
                <select name='service'>
                    <option>Seo</option>
                    <option>Ads</option>
                    <option>Email marketing</option>
                    <option>Redes sociales</option>
                </select>
                <label htmlFor='budget'>Presupuesto de inversion</label>
                <input type='text' name='budget'/>
                <label htmlFor='message'>Mensaje</label>
                <textarea name='message' rows={5}/>
                <Button className="contact-send">Enviar</Button>
            </PillBox>
        </Row>
        <Footer background="blue"/>
    </main>
}