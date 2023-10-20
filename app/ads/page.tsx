import './ads.scss';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { Waves } from '../components/Graphics';

export default function Servicios() {
    return <main>
        <Header/>
        <Row color='blue'>
            <h1 className='title'>Anuncios Pagados / Publicidad en línea</h1>
            <p>Los Anuncios Pagados son una forma efectiva de llegar a tu audiencia objetivo en las redes sociales y los motores de búsqueda más populares, como Facebook, Google, LinkedIn, Instagram, TikTok y OnlyFans</p>
        </Row>
        <Waves className='wave'/>
        <Row className='row2'>
            <p>Al igual que los tiburones son depredadores eficaces en su entorno, nuestro equipo de expertos en marketing digital utiliza técnicas avanzadas de publicidad para asegurarnos de que tus anuncios pagados lleguen a la audiencia adecuada en el momento adecuado.</p>
            <p>Así como los tiburones necesitan estar siempre en movimiento para encontrar su próxima presa, nosotros monitoreamos constantemente tus campañas publicitarias y las ajustamos en tiempo real para asegurarnos de que obtengas los mejores resultados. Con nuestra experiencia y conocimientos en el mundo de los Anuncios Pagados, podemos crear campañas publicitarias personalizadas y efectivas que maximicen tu inversión publicitaria.</p>
            <p>En Ad Shark, hemos ayudado a +25 clientes a mejorar su presencia en línea con nuestros servicios de Anuncios Pagados. Si estás buscando maximizar tu inversión publicitaria y llegar a tu audiencia de manera más efectiva, ¡contáctanos hoy mismo para saber cómo podemos ayudarte a navegar el vasto océano de la publicidad en línea!</p>
        </Row>
        <Footer/>
    </main>;
}