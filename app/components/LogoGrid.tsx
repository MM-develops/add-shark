import React from 'react';
import styles from './LogoGrid.module.scss';
import Image from 'next/image';
import { Waves } from './Graphics';

const images = require.context('../../public/logos', true);
const imageList = images.keys().map(image => images(image));
//console.log(images.keys())

export const LogoGrid = (props: { className?: string; title?: string, waveClass?: string }) => {
    return <>
        <Waves className={`${styles.wave1} ${props.waveClass}`}/>
        <div className={`${styles.main} ${props.className}`}>
            <h3>{props.title}</h3>
            <div className={styles.gridContainer}>
                {imageList.map((image, index) => {
                    //console.log(image)
                    return <div key={index} className={styles.logoContainer}>
                        <Image 
                            src={image.default}
                            alt=""
                            fill
                            loading="lazy"
                        />
                        </div>
                })}
            </div>
        </div>
        <Waves className={`${styles.wave2} ${props.waveClass}`}/>
    </>
}