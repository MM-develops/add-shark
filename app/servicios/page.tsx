import './servicios.scss';
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { PillBox } from '../components/PillBox';
import Image from 'next/image';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

export default function Servicios() {
    return (
        <main>
            <Header />
            <div className='coral-wall'></div>
            <div className='sharks'></div>
            <Row color="blue">
                <h1 className="services-header">Navega con Ad Shark en las profundidades del océano digital</h1>
            </Row>
            <Row color="blue" className="rocky-row">
                <PillBox>
                    <div className='service-container'>
                        <Image
                            src=""
                            alt=''
                            width={300}
                            height={300}
                        />
                        <div className='services-copy'>
                            <h3>Anuncios Pagados / Publicidad en línea</h3>
                            <p>Somos expertos en Anuncios Pagados, y nos gusta pensar en nosotros mismos como tiburones que nadan en el vasto océano de la publicidad en línea </p>
                            <Button>Conoce Más</Button>
                        </div>
                    </div>
                    <div className='service-container'>
                        <div className='services-copy'>
                            <h3>SEO (Search Engine Optimization)</h3>
                            <p>Ofrecemos servicios de SEO para ayudar a las empresas a aumentar su tráfico web, mejorar su posición en los resultados de búsqueda y aumentar su presencia en línea.</p>
                            <Button>Conoce Más</Button>
                        </div>
                        <Image
                            src=""
                            alt=''
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className='service-container'>
                        <Image
                            src=""
                            alt=''
                            width={300}
                            height={300}
                        />
                        <div className='services-copy'>
                            <h3>Email Marketing</h3>
                            <p>Con nuestro servicio de Email Marketing ayudamos a las empresas a llegar a su audiencia de manera más directa.</p>
                            <Button>Conoce Más</Button>
                        </div>
                    </div>
                    <div className='service-container'>
                        <div className='services-copy'>
                            <h3>Manejo de Redes Sociales</h3>
                            <p>Aumentamos la presencia de tu marca en línea, a través de la creación de contenido atractivo y relevante que conecte con tu audiencia.</p>
                            <Button>Conoce Más</Button>
                        </div>
                        <Image
                            src=""
                            alt=''
                            width={300}
                            height={300}
                        />
                    </div>
                </PillBox>
                <div className={"rock1"}></div>
                <div className={"rock2"}></div>
            </Row>
            <Footer background="blue"/>
        </main>
    )
}