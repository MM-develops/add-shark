import Link from "next/link"
import React from "react"
import styles from './Header.module.scss'
import { Button } from './Button'
import Image from "next/image"

export const Header = () => {

    const hamburgerMenu = <div className={styles.hamButton}></div>
    return <header className={styles.header}>
        <Link href="/">
            <Image
                src="/adshark_logo_navbar.svg"
                alt="Addshark home page"
                className={styles.logo}
                width={100}
                height={24}
                priority
            />
        </Link>
        {hamburgerMenu}
        <nav className={styles.desktopNav}>
            <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
            <Link href="/servicios" className={styles.navLink}>Servicios</Link>
            <Link href="/contacto" className={styles.navLink}>Contacto</Link>
            <Button className={styles.navButton}>Quiero trabajar con ustedes</Button>
        </nav>
    </header>
}