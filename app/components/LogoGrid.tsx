import React from 'react';
import styles from './LogoGrid.module.scss';
import Image from 'next/image';

const images = require.context('../../public/logos', true);
const imageList = images.keys().map(image => images(image));

export const LogoGrid = props => {
    return <div className={styles.main}>
        <h3>{props.title}</h3>
        <div className={styles.gridcontainer}>
            {imageList.map((image, index) => {
                return <div className={styles.logoContainer}>
                    <Image 
                        key={index}
                        src={image.default}
                        alt=""
                        fill
                    />
                    </div>
            })}
        </div>
    </div>
}