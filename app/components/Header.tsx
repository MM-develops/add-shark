'use client'
import Link from "next/link"
import React, { useState } from "react"
import styles from './Header.module.scss'
import { Button } from './Button'
import Image from "next/image"

export const Header = () => {
    const [menu, toggleMenu] = useState(false);
    const onToggleClick = () => {
        toggleMenu(!menu);
    }
    const hamburgerMenu = <div className={styles.hamButton} onClick={onToggleClick}></div>
    const mobileNav = <div className={`${styles.mobileNav} ${menu ? styles.open : styles.close}`}>
        <button className={styles.closeBtn} onClick={onToggleClick}>X</button>
        <nav>
            <Link href="/nosotros" className={styles.navLink} onClick={onToggleClick}>Nosotros</Link>
            <Link href="/servicios" className={styles.navLink} onClick={onToggleClick}>Servicios</Link>
            <Link href="/contacto" onClick={onToggleClick}><Button className={styles.navButton}>Quiero trabajar con ustedes</Button></Link>
        </nav>
    </div>

    return <header className={styles.header}>
        <Link href="/">
            <Image
                src="/adshark_logo_navbar.svg"
                alt="Addshark home page"
                className={styles.logo}
                width={30}
                height={24}
                priority
            />
        </Link>
        {hamburgerMenu}
        {mobileNav}
        <nav className={styles.desktopNav}>
            <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
            <Link href="/servicios" className={styles.navLink}>Servicios</Link>
            <Link href="/contacto" className={styles.navLink}>Contacto</Link>
            <Link href="/contacto"><Button className={styles.navButton}>Quiero trabajar con ustedes</Button></Link>
        </nav>
    </header>
}