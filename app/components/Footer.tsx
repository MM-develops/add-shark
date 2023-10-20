import React from 'react'
import { AnchorButton } from './Button'
import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.scss'
import { Waves } from './Graphics'

export const Footer = (props: { background?: string }) => {
    const backgroundColor = props.background ? props.background : 'white';
    return <>
        <Waves className={styles.waves}/>
        <footer className={`${styles.footer} ${styles[backgroundColor]}`}>
            <div className={styles.backgroundFx}></div>
            <div className={styles.footerContent}>
                <div className={styles.leftBox}>
                    <h2>Déjanos ser tu guía en este océano digital</h2>
                    <AnchorButton href="/contacto" type="secondary">&iexcl;Contactanos&#33;</AnchorButton>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.rightBox}>
                    <nav className={styles.footerNav}>
                        <Link href="/">
                            <Image
                                src="/adshark_logo_footer.png"
                                alt="Add Shark home page"
                                width={250}
                                height={54}
                                loading="lazy"
                            />
                        </Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/servicios">Servicios</Link>
                        <Link href="/contacto">Contacto</Link>
                    </nav>
                </div>
            </div>
            <p className={styles.copyRight}>&copy; Ad shark Digital Agency 2023.</p>
            <div className={styles.footerShark}>
                <Image
                    src="/footer.svg"
                    alt=""
                    fill
                />
            </div>
        </footer>
    </>
}