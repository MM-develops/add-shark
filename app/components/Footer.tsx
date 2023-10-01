import React from 'react'
import { Button } from './Button'
import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.scss'

export const Footer = props => {
    const backgroundColor = props.background ? props.background : 'white';
    return <footer className={`${styles.footer} ${styles[backgroundColor]}`}>
        <div className={styles.background}></div>
        <div className={styles.backgroundFx}></div>
        <div className={styles.backgroundCoral}></div>
        <div className={styles.leftBox}>
            <h2>Déjanos ser tu guía en este océano digital</h2>
            <Button type="secondary">&iexcl;Contactanos&#33;</Button>
            <p className={styles.copyRight}>&copy; Ad shark Digital Agency 2023.</p>
        </div>
        <div className={styles.rightBox}>
            <nav className={styles.footerNav}>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/servicios">Servicios</Link>
                <Link href="/contacto">Contacto</Link>

                <Link href="/">
                    <Image
                        src="/adshark_logo_footer.png"
                        alt="Add Shark home page"
                        width={100}
                        height={24}
                        loading="lazy"
                    />
                </Link>
            </nav>
        </div>
    </footer>
}