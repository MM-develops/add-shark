import './contacto.scss';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { PillBox } from '../components/PillBox';
import { Button } from '../components/Button';

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
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre'/>
                <label htmlFor='tel'>Telefono</label>
                <input type='text' name='tel'/>
                <label htmlFor='email'>Correo electronico</label>
                <input type='text' name='email'/>
                <label htmlFor='businessName'>Nombre de tu marca o empresa:</label>
                <input type='text' name='businessName'/>
                <label htmlFor='service'>Servicio</label>
                <select name='service'>
                    <option>Anuncios pagados / Publicidad en linea</option>
	                <option>SEO</option>
                    <option>Email Marketing</option>
                    <option>Manejo de redes sociales</option>
                    <option>Public Relations / Media Purchase Solutions</option>
                    <option>Media Purchase</option>
                </select>
                <label htmlFor='budget'>Presupuesto de inversion</label>
                <select name='budget'>
                    <option>Menor a $20,000 M.N</option>
                    <option>Entre $20,000 M.N - $50,000 M.N</option>
                    <option>Superior a $50,000 M.N</option>
                </select>
                <label htmlFor='message'>Mensaje</label>
                <textarea name='message' rows={5}/>
                <Button className="contact-send">Enviar</Button>
            </PillBox>
        </Row>
        <Footer background="blue"/>
    </main>
}