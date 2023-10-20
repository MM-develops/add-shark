'use client'
import './servicios.scss';
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { PillBox } from '../components/PillBox';
import Image from 'next/image';
import { AnchorButton, Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal.jsx';
import { useState } from 'react';
import { seo, emailMarketing, socialMedia } from './serviceData';
import { Waves } from '../components/Graphics';

export default function Servicios() {
    const [isOpen, toggleOpen] = useState(false);
    const [modalContent, setModalContent] = useState({title: "", content: ""});

    const handleMoreInfo = (title: string, content: any) => {
        toggleOpen(true);
        setModalContent({title: title, content: content});
    }

    return (
        <main>
            <Header />
            <Row color="blue" className="services-main-row">
                <h1 className="services-header">Navega con Ad Shark en las profundidades del océano digital</h1>
            </Row>
            <Waves className='wave'/>
            <Row color="blue" className="rocky-row">
                <PillBox>
                    <div className='service-container'>
                        <div className='service-image'>
                            <Image
                                src="/Ads-Test.png"
                                alt=''
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className='services-copy'>
                            <h3>Anuncios Pagados / Publicidad en línea</h3>
                            <p>Somos expertos en Anuncios Pagados, y nos gusta pensar en nosotros mismos como tiburones que nadan en el vasto océano de la publicidad en línea </p>
                            <AnchorButton href="/ads">Conoce Más</AnchorButton>
                        </div>
                    </div>
                    <div className='service-container'>
                        <div className='services-copy'>
                            <h3>SEO (Search Engine Optimization)</h3>
                            <p>Ofrecemos servicios de SEO para ayudar a las empresas a aumentar su tráfico web, mejorar su posición en los resultados de búsqueda y aumentar su presencia en línea.</p>
                            <Button onClick={()=>{handleMoreInfo("SEO", seo)}}>Conoce Más</Button>
                        </div>
                        <Image
                            src="/SEO.png"
                            alt=''
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className='service-container'>
                        <Image
                            src="/Email.png"
                            alt=''
                            width={300}
                            height={300}
                        />
                        <div className='services-copy'>
                            <h3>Email Marketing</h3>
                            <p>Con nuestro servicio de Email Marketing ayudamos a las empresas a llegar a su audiencia de manera más directa.</p>
                            <Button onClick={()=>{handleMoreInfo("Email Marketing", emailMarketing)}}>Conoce Más</Button>
                        </div>
                    </div>
                    <div className='service-container'>
                        <div className='services-copy'>
                            <h3>Manejo de Redes Sociales</h3>
                            <p>Aumentamos la presencia de tu marca en línea, a través de la creación de contenido atractivo y relevante que conecte con tu audiencia.</p>
                            <Button onClick={()=>{handleMoreInfo("Manejo de Redes Sociales", socialMedia)}}>Conoce Más</Button>
                        </div>
                        <Image
                            src="/Redes.png"
                            alt=''
                            width={300}
                            height={300}
                        />
                    </div>
                </PillBox>
            </Row>
            <Footer background="blue"/>
            <Modal title={modalContent.title} isOpen={isOpen} onClose={()=>{toggleOpen(false)}}>{modalContent.content}</Modal>
        </main>
    )
}